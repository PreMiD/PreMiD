import { REST } from "@discordjs/rest";
import { scope, type } from "arktype";
import { Routes } from "discord-api-types/v10";
import WebSocket from "ws";
import type { FastifyRequest } from "fastify";
import type { RawData } from "ws";
import { redis } from "../functions/createServer.js";
import { counter } from "../tracing.js";

const schema = scope({
	token: {
		"+": "delete",
		"type": "'token'",
		"token": "string.trim",
		"expires": "number.epoch",
	},
	session: {
		"+": "delete",
		"type": "'session'",
		"token": "string.trim",
	},
	validMessages: "token | session",
}).export();

export class Socket {
	currentToken: typeof schema.token.infer | undefined;
	currentSession: typeof schema.session.infer | undefined;
	discord = new REST({ version: "10", authPrefix: "Bearer" });

	constructor(
		public readonly socket: WebSocket.WebSocket,
		public readonly request: FastifyRequest,
	) {
		counter.add(1);
		socket.on("message", this.onMessage.bind(this));
		socket.on("close", () => this.onClose());
	}

	async onMessage(message: RawData) {
		try {
			const out = schema.validMessages(JSON.parse(message.toString()));

			if (out instanceof type.errors) {
				return this.close(1003, out.summary);
			}

			switch (out.type) {
				case "token": {
					this.discord.setToken(out.token);
					if (!await this.isTokenValid(out)) {
						return this.close(1003, "Invalid token");
					}
					this.currentToken = out;
					break;
				}
				case "session": {
					await redis.del(`pmd:session:${out.token}`);
					this.currentSession = out;
					break;
				}
			}
		}
		catch (error) {
			console.error(error);
			this.close(1011, "Internal Error");
		}
	}

	async onClose() {
		counter.add(-1);

		if (!this.currentToken || !this.currentSession)
			return;

		const now = Math.floor(Date.now() / 1000);

		await redis.hmset(
			`pmd:session:${this.currentSession.token}`,
			{
				t: this.currentToken.token,
				u: now,
			},
		);

		await redis.expire(`pmd:session:${this.currentSession.token}`, 60); // Expire after 1 minute
	}

	async isTokenValid(token: typeof schema.token.infer) {
		// ? Check the expiration date of the token
		if (token.expires < Date.now())
			return false;

		// ? See if we can get the user's information
		try {
			await this.discord.get(Routes.user());
			return true;
		}
		catch {
			return false;
		}
	}

	send(data: any) {
		this.socket.send(JSON.stringify(data));
	}

	close(code: number = 1000, message?: string) {
		if (this.socket.readyState === WebSocket.CLOSED)
			return;
		this.socket.close(code, message);
	}
}
