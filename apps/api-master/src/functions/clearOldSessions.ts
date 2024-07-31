import { REST } from "@discordjs/rest";
import { redis } from "../index.js";

export async function clearOldSesssions() {
	const sessions = await redis.hgetall("pmd-api.sessions");
	const now = Date.now();

	for (const [key, value] of Object.entries(sessions)) {
		const session = JSON.parse(value) as {
			token: string;
			session: string;
			lastUpdated: number;
		};

		// ? If the session is younger than 30seconds, skip it
		if (now - session.lastUpdated < 30000)
			continue;

		// ? Delete the session
		try {
			const discord = new REST({ version: "v10", authPrefix: "Bearer" });
			discord.setToken(session.token);
			await discord.post("/users/@me/headless-sessions/delete", {
				body: {
					token: session.session,
				},
			});
		}
		catch (error) {
			console.error(error);
		}

		await redis.hdel("pmd-api.sessions", key);
	}
}
