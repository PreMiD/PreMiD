import process from "node:process";
import { REST } from "@discordjs/rest";
import { type } from "arktype";
import { Routes } from "discord-api-types/v10";
import type { FastifyReply, FastifyRequest } from "fastify";
import { redis } from "../functions/createServer.js";
import { shortHash } from "../functions/shortHash.js";

const schema = type({
	token: "string.trim",
	session: "string.trim",
});

export async function sessionKeepAlive(request: FastifyRequest, reply: FastifyReply) {
	//* Get the 2 headers
	const out = schema({
		token: request.headers["x-token"],
		session: request.headers["x-session"],
	});

	if (out instanceof type.errors)
		return reply.status(400).send({ code: "MISSING_HEADERS", message: out.message });

	if (!await isTokenValid(out.token))
		return reply.status(400).send({ code: "INVALID_TOKEN", message: "The token is invalid" });

	const now = Math.floor(Date.now() / 1000); // Unix timestamp in seconds

	await redis.hmset(
		`pmd:session:${shortHash(out.session, out.token)}`,
		{
			t: out.token,
			u: now,
			s: out.session,
		},
	);

	// Set expiration for the hash
	await redis.expire(`pmd:session:${shortHash(out.session, out.token)}`, 60); // Expire after 1 minute

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
