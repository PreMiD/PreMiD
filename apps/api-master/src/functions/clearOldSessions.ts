import { REST } from "@discordjs/rest";
import { mainLog, redis } from "../index.js";

let inProgress = false;
export async function clearOldSessions() {
	if (inProgress) {
		mainLog("Session cleanup already in progress");
		return;
	}

	inProgress = true;
	const now = Date.now();
	let cursor = "0";
	let totalSessions = 0;
	let cleared = 0;
	const batchSize = 100;
	let keysToDelete = [];

	mainLog("Starting session cleanup");

	do {
		//* Use hscan to iterate through sessions
		const [nextCursor, result] = await redis.hscan("pmd-api.sessions", cursor, "COUNT", batchSize);
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

			//* Mark the session for deletion
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
				mainLog(`Failed to delete session: %O`, (typeof error === "object" && error && "message" in error ? error.message : error));
			}

			keysToDelete.push(key);
			cleared++;

			//* Delete in batches to avoid memory bloat
			if (keysToDelete.length >= batchSize) {
				await redis.hdel("pmd-api.sessions", ...keysToDelete);
				keysToDelete = [];
			}
		}
	} while (cursor !== "0");

	//* Delete any remaining keys
	if (keysToDelete.length > 0) {
		await redis.hdel("pmd-api.sessions", ...keysToDelete);
	}

	if (totalSessions === 0) {
		mainLog("No sessions to clear");
	}
	else {
		mainLog(`Checked ${totalSessions} sessions, cleared ${cleared}`);
	}

	inProgress = false;
}
