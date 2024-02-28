import { RouteHandlerMethod } from "fastify";
import { nanoid } from "nanoid";

import keyv from "../keyv.js";

const handler: RouteHandlerMethod = async (request, reply) => {
	const url = request.url.replace("/create/", "").trim();

	if (url.length === 0) return reply.status(400).send("Invalid URL");

	if (url.length < 256) return reply.status(400).send("URL is too short");

	const urlObject = new URL(url);
	if (!["http:", "https:"].includes(urlObject.protocol)) return reply.status(400).send("Invalid URL");

	const keyvUrl = (await keyv.get(url)) as string | undefined;

	void reply.header("Cache-control", "public, max-age=1800");

	if (keyvUrl) {
		await Promise.all([keyv.set(url, keyvUrl, 1800), keyv.set(keyvUrl, url, 1800)]);

		return reply.send(process.env.BASE_URL + keyvUrl);
	}

	const uniqueId = nanoid(10);

	await Promise.all([keyv.set(url, uniqueId, 1800), keyv.set(uniqueId, url, 1800)]);

	return reply.send(process.env.BASE_URL + uniqueId);
};

export default handler;
