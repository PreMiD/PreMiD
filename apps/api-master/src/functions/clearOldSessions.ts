import { REST } from "@discordjs/rest";
import pLimit from "p-limit";
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
	let keysToDelete: string[] = [];

	mainLog("Starting session cleanup");

	const limit = pLimit(100); // Create a limit of 100 concurrent operations

	do {
		const [nextCursor, result] = await redis.hscan("pmd-api.sessions", cursor, "COUNT", batchSize);
		cursor = nextCursor;
		totalSessions += result.length / 2;

		const deletePromises = [];

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

			if (now - session.lastUpdated < 30000)
				continue;

			deletePromises.push(limit(() => deleteSession(session, key)));
		}

		const results = await Promise.allSettled(deletePromises);
		results.forEach((result) => {
			if (result.status === "fulfilled" && result.value) {
				keysToDelete.push(result.value);
				cleared++;
			}
		});

		if (keysToDelete.length >= batchSize) {
			await redis.hdel("pmd-api.sessions", ...keysToDelete);
			keysToDelete = [];
		}
	} while (cursor !== "0");

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

async function deleteSession(session: { token: string; session: string }, key: string): Promise<string> {
	try {
		const abortController = new AbortController();
		const discord = new REST({ version: "10", authPrefix: "Bearer" });
		discord.setToken(session.token);

		const timeoutId = setTimeout(() => abortController.abort(), 5000); //* 1 second timeout

		await discord.post("/users/@me/headless-sessions/delete", {
			signal: abortController.signal,
			body: {
				token: session.session,
			},
		});

		clearTimeout(timeoutId);
		return key;
	}
	catch (error) {
		if (error instanceof Error && error.name === "AbortError") {
			mainLog("Session deletion aborted due to timeout");
		}
		else if (error instanceof Error) {
			mainLog(`Failed to delete session: ${error.message}`);
		}
		else {
			mainLog(`Failed to delete session: Unknown error`);
		}
		return key;
	}
}
