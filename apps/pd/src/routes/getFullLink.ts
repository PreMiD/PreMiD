import { Buffer } from "node:buffer";

import crypto from "node:crypto";
import dns from "node:dns/promises";
import type { RouteHandlerMethod } from "fastify";
import ipaddr from "ipaddr.js";

import isInCIDRRange from "../functions/isInCidRange.js";
import googleCIDRs from "../googleCIDRs.js";
import { keyv, ttl } from "../keyv.js";

// RFC1918 + loopback + link-local + other private ranges to block for SSRF prevention
const BLOCKED_CIDRS = [
	"0.0.0.0/8",
	"10.0.0.0/8",
	"100.64.0.0/10",
	"127.0.0.0/8",
	"169.254.0.0/16",
	"172.16.0.0/12",
	"192.0.0.0/24",
	"192.168.0.0/16",
	"198.18.0.0/15",
	"198.51.100.0/24",
	"203.0.113.0/24",
	"240.0.0.0/4",
	"::1/128",
	"fc00::/7",
	"fe80::/10",
].map(cidr => ipaddr.parseCIDR(cidr));

async function isPrivateHost(hostname: string): Promise<boolean> {
	try {
		const addresses = await dns.lookup(hostname, { all: true });
		for (const { address } of addresses) {
			const parsed = ipaddr.parse(address);
			for (const cidr of BLOCKED_CIDRS) {
				if (parsed.match(cidr))
					return true;
			}
		}
		return false;
	}
	catch {
		// If DNS resolution fails, block the request to be safe
		return true;
	}
}

// Only allow image/* content-types from remote servers
const ALLOWED_CONTENT_TYPE_PREFIX = "image/";
const ALLOWED_IMAGE_CONTENT_TYPES = [
	"image/png",
	"image/jpeg",
	"image/gif",
	"image/webp",
	"image/jpg",
];

const handler: RouteHandlerMethod = async (request, reply) => {
	/* c8 ignore next 2 */
	const ip = request.headers["cf-connecting-ip"]?.toString() || request.socket.remoteAddress || request.ip;

	if (
		!isInCIDRRange(
			googleCIDRs,
			ip,
		)
	) {
		return reply.status(401).send("Not a Google Cloud IP");
	}

	const id = (request.params as { "*": string })["*"].trim();

	if (id.split(".")[0]?.length !== 10)
		return reply.code(404).send("Invalid ID");

	const url = await keyv.get(id);
	if (!url)
		return reply.code(404).send("Unknown ID");

	const hash = crypto.createHash("sha256").update(url).digest("hex");

	await Promise.all([keyv.set(hash, id, ttl), keyv.set(id, url, ttl)]);

	//* If it is a base64 string, decode and return the image
	if (url.startsWith("data:image")) {
		const image = Buffer.from(
			url.replace(/^data:image\/\w+;base64,/, ""),
			"base64",
		);

		const mime = url.split(";")[0]!.split(":")[1]!;

		// Ensure the MIME type from the stored data URI is a known image type
		if (!ALLOWED_IMAGE_CONTENT_TYPES.includes(mime))
			return reply.code(400).send("Invalid image type");

		return reply.type(mime).send(image);
	}

	//* Check if URL has a valid image extension
	const urlObject = new URL(url);
	const pathname = urlObject.pathname;
	const extensionMatch = pathname.match(/\.([^./]+)$/);
	const extension = extensionMatch?.[1]?.toLowerCase() ?? null;

	const allowedExtensions = ["png", "jpeg", "jpg", "gif", "webp"];
	const hasValidImageExtension = extension && allowedExtensions.includes(extension);

	//* If URL has valid image extension, fetch and return the image
	if (hasValidImageExtension) {
		// SSRF prevention: resolve the hostname and reject private/internal IPs
		if (await isPrivateHost(urlObject.hostname))
			return reply.code(400).send("Invalid image URL");

		try {
			const response = await fetch(url, {
				headers: {
					"Accept": "image/*",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
					"Accept-Encoding": "gzip, deflate, br",
					"Cache-Control": "no-cache",
					"Pragma": "no-cache",
					"Referer": urlObject.origin, //* Set referer to the origin domain to bypass hotlink protection
					"Sec-Fetch-Dest": "image",
					"Sec-Fetch-Mode": "no-cors",
					"Sec-Fetch-Site": "cross-site",
				},
			});

			if (!response.ok) {
				return reply.code(404).send("Image not found");
			}

			const remoteContentType = response.headers.get("content-type") ?? "";

			// Whitelist the content-type to image/* only — never reflect arbitrary
			// content-types from remote servers, which could lead to XSS.
			const safeContentType = ALLOWED_IMAGE_CONTENT_TYPES.find(t => remoteContentType.startsWith(t))
				?? `image/${extension}`;

			const imageBuffer = Buffer.from(await response.arrayBuffer());

			return reply.type(safeContentType).send(imageBuffer);
		}
		catch {
			//* If fetch fails, fall back to redirect
			return reply.redirect(url);
		}
	}

	//* For all other URLs, redirect to them
	return reply.redirect(url);
};

export default handler;