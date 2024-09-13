import process from "node:process";
import { REST } from "@discordjs/rest";
import { type } from "arktype";
import { Routes } from "discord-api-types/v10";
import type { FastifyReply, FastifyRequest } from "fastify";
import { redis } from "../functions/createServer.js";

const schema = type({
	token: "string.trim",
	session: "string.trim",
	version: "string.semver & string.trim",
	scienceId: "string.trim",
});

export async function sessionKeepAlive(request: FastifyRequest, reply: FastifyReply) {
	//* Get the headers
	const out = schema({
		token: request.headers["x-token"],
		session: request.headers["x-session"],
		version: request.headers["x-version"] ?? "2.6.8",
		scienceId: request.headers["x-science-id"] ?? request.headers["x-token"],
	});

	if (out instanceof type.errors)
		return reply.status(400).send({ code: "MISSING_HEADERS", message: out.message });

	if (!await isTokenValid(out.token))
		return reply.status(400).send({ code: "INVALID_TOKEN", message: "The token is invalid" });

	await redis.hset(
		"pmd-api.sessions",
		out.scienceId,
		JSON.stringify({
			session: out.session,
			token: out.token,
			lastUpdated: Date.now(),
		}),
	);

	const interval = Number.parseInt(process.env.SESSION_KEEP_ALIVE_INTERVAL ?? "5000");

	return reply.status(200).send({
		code: "OK",
		message: "Session updated",
		nextUpdate: interval,
	});
}

async function isTokenValid(token: string) {
	const discord = new REST({ version: "10", authPrefix: "Bearer" });

	discord.setToken(token);
	try {
		await discord.get(Routes.user());
		return true;
	}
	catch {
		return false;
	}
}
