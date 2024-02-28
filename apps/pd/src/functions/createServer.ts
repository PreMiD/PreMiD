import cors from "@fastify/cors";
import fastifyMultipart from "@fastify/multipart";
import ratelimit from "@fastify/rate-limit";
import fastify from "fastify";
import { Redis } from "ioredis";

import createFromBase64 from "../routes/createFromBase64.js";
import createFromImage from "../routes/createFromImage.js";
import createShortenedLink from "../routes/createShortenedLink.js";
import getFullLink from "../routes/getFullLink.js";

export async function createServer(redis?: Redis) {
	const server = fastify({
		trustProxy: true,
	});

	await server.register(cors, {
		methods: ["GET"],
		origin: "*",
	});

	await server.register(ratelimit, {
		max: 25,
		nameSpace: "pd-ratelimit-",
		redis,
		timeWindow: "1 minute",
	});

	await server.register(fastifyMultipart, {
		limits: {
			fileSize: process.env.MAX_FILE_SIZE ?? 5 * 1024 * 1024,
			files: 1,
		},
	});

	server.post("/create/image", createFromImage);
	server.post("/create/base64", createFromBase64);
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
