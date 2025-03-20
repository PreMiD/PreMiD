import crypto from "node:crypto";

import process from "node:process";
import { fileTypeFromBuffer } from "file-type";
import { nanoid } from "nanoid";
import type { RouteHandlerMethod } from "fastify";

import keyv from "../keyv.js";

const handler: RouteHandlerMethod = async (request, reply) => {
	if (!request.isMultipart())
		return reply.status(400).send("Request is not multipart");

	const file = await request.file();

	if (!file)
		return reply.status(400).send("Invalid file");

	const type = await fileTypeFromBuffer(await file.toBuffer());

	if (!type)
		return reply.status(400).send("Invalid file");

	if (![
		"image/png",
		"image/jpeg",
		"image/jpg",
		"image/gif",
		"image/webp",
	].includes(type.mime)) {
		return reply.status(400).send("Only png, jpeg, jpg, gif and webp are supported");
	}

	const buffer = await file.toBuffer();
	const body = `data:${type.mime};base64,${buffer.toString("base64")}`;
	const hash = crypto.createHash("sha256").update(body).digest("hex");
	const existingUrl = await keyv.get(hash);

	if (existingUrl) {
		void reply.header("Cache-control", `public, max-age=${(30 * 60).toString()}`);
		return reply.send(process.env.BASE_URL! + existingUrl);
	}

	const uniqueId = `${nanoid(10)}.${type.ext}`;

	await Promise.all([
		keyv.set(hash, uniqueId, 30 * 60 * 1000),
		keyv.set(uniqueId, body, 30 * 60 * 1000),
	]);

	void reply.header("Cache-control", `public, max-age=${(30 * 60).toString()}`);
	return reply.send(process.env.BASE_URL! + uniqueId);
};

export default handler;
