import { REST } from "@discordjs/rest";
import { mainLog, redis } from "../index.js";

export async function clearOldSessions() {
	const sessions = await redis.hgetall("pmd-api.sessions");
	const now = Date.now();

	if (Object.keys(sessions).length === 0) {
		mainLog("No sessions to clear");
		return;
	}

	mainLog(`Checking ${Object.keys(sessions).length} sessions`);

	let cleared = 0;
	for (const [key, value] of Object.entries(sessions)) {
		const session = JSON.parse(value) as {
			token: string;
			session: string;
			lastUpdated: number;
		};

		// ? If the session is younger than 30seconds, skip it
		if (now - session.lastUpdated < 30000)
			continue;

		//* Delete the session
		try {
			const discord = new REST({ version: "10", authPrefix: "Bearer" });
			discord.setToken(session.token);
			await discord.post("/users/@me/headless-sessions/delete", {
				body: {
					token: session.session,
				},
			});
		}
		catch (error) {
			mainLog(`Failed to delete session: %O`, error);
		}

		cleared++;
		await redis.hdel("pmd-api.sessions", key);
	}

	mainLog(`Cleared ${cleared} sessions`);
}
