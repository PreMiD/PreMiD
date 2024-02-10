import { RouteHandlerMethod } from "fastify";
import { fileTypeFromBuffer } from "file-type";
import { nanoid } from "nanoid";

import { keyv } from "../constants.js";

const handler: RouteHandlerMethod = async (request, reply) => {
	if (!request.isMultipart()) return reply.status(400).send("Request is not multipart");

	const file = await request.file();

	if (!file) return reply.status(400).send("Invalid file");

	const type = await fileTypeFromBuffer(await file.toBuffer());

	if (!type) return reply.status(400).send("Invalid file");

	if (![
		"image/png",
		"image/jpeg",
		"image/jpg",
		"image/gif",
		"image/webp",
	].includes(type.mime))
		return reply.status(400).send("Only png, jpeg, jpg, gif and webp are supported");

	const buffer = await file.toBuffer(),
		body = `data:${type.mime};base64,${buffer.toString("base64")}`,
		url = await keyv.get(body);

	if (url) {
		await Promise.all([
			keyv.set(url, body, 30 * 60 * 1000),
			keyv.set(body, url, 30 * 60 * 1000),
		]);

		reply.header("Cache-control", `public, max-age=${30 * 60}`);
		return reply.send(process.env.HOST + url);
	}

	const uniqueId = `${nanoid(10)}.${type.ext}`;

	await Promise.all([
		keyv.set(body, uniqueId, 30 * 60 * 1000),
		keyv.set(uniqueId, body, 30 * 60 * 1000),
	]);

	reply.header("Cache-control", `public, max-age=${30 * 60}`);
	return reply.send(process.env.HOST + uniqueId);
};

export default handler;
