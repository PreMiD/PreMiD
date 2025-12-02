import crypto from "node:crypto";

import process from "node:process";
import { nanoid } from "nanoid";
import type { RouteHandlerMethod } from "fastify";

import { keyv, ttl } from "../keyv.js";

const handler: RouteHandlerMethod = async (request, reply) => {
	const url = request.url.replace("/create/", "").trim();

	if (url.length === 0)
		return reply.status(400).send("Invalid URL");

	if (url.length < 256)
		return reply.status(400).send("URL is too short");

	const urlObject = new URL(url);
	if (!["http:", "https:"].includes(urlObject.protocol))
		return reply.status(400).send("Invalid URL");

	//* Extract file extension from URL pathname
	const pathname = urlObject.pathname;
	const extensionMatch = pathname.match(/\.([^./]+)$/);
	const extension = extensionMatch?.[1]?.toLowerCase() ?? null;

	//* Check if extension is in allowed list
	const allowedExtensions = ["png", "jpeg", "jpg", "gif", "webp"];
	const hasValidExtension = extension && allowedExtensions.includes(extension);

	const hash = crypto.createHash("sha256").update(url).digest("hex");
	const existingShortenedUrl = await keyv.get(hash);

	if (existingShortenedUrl) {
		await Promise.all([keyv.set(hash, existingShortenedUrl, ttl), keyv.set(existingShortenedUrl, url, ttl)]);
		return reply.send(process.env.BASE_URL! + existingShortenedUrl);
	}

	//* Create unique ID with extension if valid, otherwise without extension
	const uniqueId = hasValidExtension ? `${nanoid(10)}.${extension}` : nanoid(10);

	await Promise.all([keyv.set(hash, uniqueId, ttl), keyv.set(uniqueId, url, ttl)]);

	return reply.send(process.env.BASE_URL! + uniqueId);
};

export default handler;
