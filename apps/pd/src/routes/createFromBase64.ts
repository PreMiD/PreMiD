import { RouteHandlerMethod } from "fastify";
import mime from "mime-types";
import { nanoid } from "nanoid";

import keyv from "../keyv.js";

const handler: RouteHandlerMethod = async (request, reply) => {
	const { body } = request;

	if (!body) return reply.status(400).send("Invalid body");

	if (typeof body !== "string") return reply.status(400).send("Invalid body");

	const matches = body.match(/^data:(.+);base64,(.+)/);

	if (!matches || matches.length === 0) return reply.status(400).send("Invalid base64 string");

	const type = mime.extension(matches.at(1) as string);

	if (!type) return reply.status(400).send("Invalid base64 string");

	if (!["png", "jpeg", "jpg", "gif", "webp"].includes(type)) return reply.status(400).send("Supported types: png, jpeg, jpg, gif, webp");

	const url = await keyv.get(body);

	if (url) {
		await Promise.all([
			keyv.set(url, body, 30 * 60 * 1000),
			keyv.set(body, url, 30 * 60 * 1000),
		]);

		reply.header("Cache-control", `public, max-age=${30 * 60}`);
		return reply.send(process.env.HOST + url);
	}

	const uniqueId = `${nanoid(10)}.${type}`;

	await Promise.all([
		keyv.set(body, uniqueId, 30 * 60 * 1000),
		keyv.set(uniqueId, body, 30 * 60 * 1000),
	]);

	reply.header("Cache-control", `public, max-age=${30 * 60}`);
	return reply.send(process.env.BASE_URL + uniqueId);
};

export default handler;
