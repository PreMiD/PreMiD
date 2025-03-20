import pLimit from "p-limit";
import ky, { HTTPError, TimeoutError } from "ky";
import { mainLog, redis } from "../index.js";

let inProgress = false;
export async function clearOldSessions() {
	if (inProgress) {
		mainLog("Session cleanup already in progress");
		return;
	}

	inProgress = true;
	const now = Date.now();
	const pattern = "pmd-api.sessions.*";
	let cursor = "0";
	let totalSessions = 0;
	let cleared = 0;
	const batchSize = 100;
	let keysToDelete: string[] = [];

	mainLog("Starting session cleanup");

	const limit = pLimit(100); // Create a limit of 100 concurrent operations

	do {
		const [newCursor, keys] = await redis.scan(cursor, "MATCH", pattern, "COUNT", 1000); //* Use SCAN with COUNT for memory efficiency

		cursor = newCursor;
		totalSessions += keys.length;

		const deletePromises: Promise<string>[] = [];

		for (const key of keys) {
			const session = await redis.hgetall(key) as unknown as {
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
			await redis.del(...keysToDelete);
			keysToDelete = [];
		}
	} while (cursor !== "0");

	if (keysToDelete.length > 0) {
		await redis.del(...keysToDelete);
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
		await ky.post("https://discord.com/api/v10/users/@me/headless-sessions/delete", {
			json: {
				token: session.session,
			},
			headers: {
				Authorization: `Bearer ${session.token}`,
			},
			retry: 3,
			timeout: 5000,
		});
	}
	catch (error) {
		if (error instanceof TimeoutError) {
			mainLog(`Session deletion aborted due to timeout for key ${key}`);
		}
		else if (error instanceof HTTPError) {
			mainLog(`Failed to delete session for key ${key}: [${error.name}] ${error.message} ${JSON.stringify(await error.response.json())}`);
		}
		else {
			mainLog(`Failed to delete session for key ${key}: Unknown error`);
		}
	}

	return key;
}
