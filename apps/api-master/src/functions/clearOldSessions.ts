import { REST } from "@discordjs/rest";
import { mainLog, redis } from "../index.js";

export async function clearOldSessions() {
	const sessionKeys = await redis.keys("pmd:session:*");
	const now = Math.floor(Date.now() / 1000);

	if (sessionKeys.length === 0) {
		mainLog("No sessions to clear");
		return;
	}

	mainLog(`Checking ${sessionKeys.length} sessions`);

	let cleared = 0;
	for (const key of sessionKeys) {
		const session = await redis.hgetall(key);

		if (!session.t || !session.u) {
			await redis.del(key);
			cleared++;
			continue;
		}

		//* If the session is younger than 30 seconds, skip it
		if (now - Number(session.u) < 30)
			continue;

		//* Delete the session
		try {
			const discord = new REST({ version: "10", authPrefix: "Bearer" });
			discord.setToken(session.t);
			await discord.post("/users/@me/headless-sessions/delete", {
				body: {
					token: key.split(":")[2], // Extract session token from key
				},
			});
		}
		catch (error) {
			mainLog(`Failed to delete session: %O`, error);
		}

		cleared++;
		await redis.del(key);
	}

	mainLog(`Cleared ${cleared} sessions`);
}
