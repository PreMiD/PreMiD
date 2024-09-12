import { REST } from "@discordjs/rest";
import { mainLog, redis } from "../index.js";

export async function clearOldSessions() {
	const now = Date.now();
	let cursor = "0";
	let totalSessions = 0;
	let cleared = 0;

	mainLog("Starting session cleanup");

	do {
		//* Use hscan to iterate through sessions
		const [nextCursor, result] = await redis.hscan("pmd-api.sessions", cursor, "COUNT", "100");
		cursor = nextCursor;
		totalSessions += result.length / 2;

		for (let i = 0; i < result.length; i += 2) {
			const key = result[i];
			const value = result[i + 1];

			if (!key || !value) {
				continue;
			}

			const session = JSON.parse(value) as {
				token: string;
				session: string;
				lastUpdated: number;
			};

			//* If the session is younger than 30 seconds, skip it
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

				await redis.hdel("pmd-api.sessions", key);
				cleared++;
			}
			catch (error) {
				mainLog(`Failed to delete session: %O`, error);
			}
		}
	} while (cursor !== "0");

	if (totalSessions === 0) {
		mainLog("No sessions to clear");
	}
	else {
		mainLog(`Checked ${totalSessions} sessions, cleared ${cleared}`);
	}
}
