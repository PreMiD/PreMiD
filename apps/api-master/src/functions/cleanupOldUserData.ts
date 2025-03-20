import { lt, sql } from "drizzle-orm";
import { db, onlineUsersIpData } from "../db.js";
import { mainLog } from "../index.js";

export async function cleanupOldUserData(retentionDays: number) {
	mainLog("Cleaning up old user ip data");
	const interval = `'${retentionDays} days'`;
	await db.delete(onlineUsersIpData)
		.where(lt(onlineUsersIpData.timestamp, sql`now() - interval ${sql.raw(interval)}`));
}
