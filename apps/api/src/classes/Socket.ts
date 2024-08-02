import { scope, type } from "arktype";
import type { FastifyRequest } from "fastify";
import WebSocket from "ws";
import type { RawData } from "ws";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
import { redis } from "../functions/createServer.js";

const schema = scope({
	token: {
		"+": "delete",
		"type": "'token'",
		"token": "format.trim",
		"expires": "unixTimestamp",
	},
	session: {
		"+": "delete",
		"type": "'session'",
		"token": "format.trim",
	},
	validMessages: "token | session",
}).export();

export class Socket {
	currentToken: typeof schema.token.infer | undefined;
	currentSesssion: typeof schema.session.infer | undefined;
	discord = new REST({ version: "10", authPrefix: "Bearer" });

	constructor(
		public readonly socket: WebSocket.WebSocket,
		public readonly request: FastifyRequest,
	) {
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
					await redis.hdel("pmd-api.sessions", out.token);
					this.currentSesssion = out;
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
		if (!this.currentToken || !this.currentSesssion)
			return;

		await redis.hset(
			"pmd-api.sessions",
			this.currentSesssion.token,
			JSON.stringify({
				session: this.currentSesssion.token,
				token: this.currentToken.token,
				lastUpdated: Date.now(),
			}),
		);
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
