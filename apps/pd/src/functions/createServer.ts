import cors from "@fastify/cors";
import ratelimit from "@fastify/rate-limit";
import fastify from "fastify";

import createFromBase64 from "../routes/createFromBase64.js";
import createFromImage from "../routes/createFromImage.js";
import createShortenedLink from "../routes/createShortenedLink.js";
import getFullLink from "../routes/getFullLink.js";

export async function createServer() {
	const server = fastify({
		trustProxy: true,
	});

	await server.register(cors, {
		methods: ["GET"],
		origin: "*",
	});

	await server.register(ratelimit, {
		max: 25,
		nameSpace: "pd",
		// TODO
		/* redis, */
		timeWindow: "1 minute",
	});

	server.get("/create/image", createFromImage);
	server.get("/create/base64", createFromBase64);
	server.get("/create/*", createShortenedLink);

	server.get(
		"/*",
		{
			config: {
				rateLimit: false,
			},
		},
		getFullLink,
	);

	server.get(
		"/health",
		{
			config: {
				rateLimit: false,
			},
		},
		(_, reply) => reply.status(204).send(),
	);

	return server;
}
