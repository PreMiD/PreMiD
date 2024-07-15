import process from "node:process";
import cors from "@fastify/cors";
import fastifyMultipart from "@fastify/multipart";
import ratelimit from "@fastify/rate-limit";
import fastify from "fastify";
import type { Redis } from "ioredis";

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
		max: Number.parseInt(process.env.RATELIMIT_MAX ?? "25"),
		nameSpace: "pd-ratelimit-",
		redis,
		timeWindow: process.env.RATELIMIT_WINDOW ?? "1 minute",
	});

	await server.register(fastifyMultipart, {
		limits: {
			fileSize: Number.parseInt(process.env.MAX_FILE_SIZE ?? (5 * 1024 * 1024).toString()),
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
