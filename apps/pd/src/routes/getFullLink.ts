import { Buffer } from "node:buffer";

import crypto from "node:crypto";
import type { RouteHandlerMethod } from "fastify";

import isInCIDRRange from "../functions/isInCidRange.js";
import googleCIDRs from "../googleCIDRs.js";
import keyv from "../keyv.js";

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

	await Promise.all([keyv.set(hash, id, 30 * 60 * 1000), keyv.set(id, url, 30 * 60 * 1000)]);

	//* If it is a base64 string, decode and return the image
	if (url.startsWith("data:image")) {
		const image = Buffer.from(
			url.replace(/^data:image\/\w+;base64,/, ""),
			"base64",
		);

		const mime = url.split(";")[0]!.split(":")[1]!;

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

			const contentType = response.headers.get("content-type") || `image/${extension}`;
			const imageBuffer = Buffer.from(await response.arrayBuffer());

			return reply.type(contentType).send(imageBuffer);
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
