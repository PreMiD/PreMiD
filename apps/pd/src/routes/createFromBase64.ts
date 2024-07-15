import crypto from "node:crypto";

import process from "node:process";
import type { RouteHandlerMethod } from "fastify";
import mime from "mime-types";
import { nanoid } from "nanoid";

import keyv from "../keyv.js";

const	handler: RouteHandlerMethod = async (request, reply) => {
	const { body } = request;

	if (!body)
		return reply.status(400).send("Invalid body");

	if (typeof body !== "string")
		return reply.status(400).send("Invalid body");

	const matches = body.match(/^data:(.+);base64,(.+)/);

	if (!matches || matches.length === 0)
		return reply.status(400).send("Invalid base64 string");

	const type = mime.extension(matches.at(1)!);

	if (!type)
		return reply.status(400).send("Invalid base64 string");

	if (!["png", "jpeg", "jpg", "gif", "webp"].includes(type))
		return reply.status(400).send("Supported types: png, jpeg, jpg, gif, webp");

	const hash = crypto.createHash("sha256").update(body).digest("hex");
	const existingUrl = await keyv.get(hash);

	if (existingUrl) {
		void reply.header("Cache-control", `public, max-age=${(30 * 60).toString()}`);
		return reply.send(process.env.BASE_URL! + existingUrl);
	}

	const uniqueId = `${nanoid(10)}.${type}`;

	await keyv.set(hash, uniqueId, 30 * 60 * 1000);
	await keyv.set(uniqueId, body, 30 * 60 * 1000);

	void reply.header("Cache-control", `public, max-age=${(30 * 60).toString()}`);
	return reply.send(process.env.BASE_URL! + uniqueId);
};

export default handler;
