import { lt, sql } from "drizzle-orm";
import { db, onlineUsersIpData } from "../db.js";

export async function cleanupOldUserData(retentionDays: number) {
	const interval = `'${retentionDays} days'`;
	await db.delete(onlineUsersIpData)
		.where(lt(onlineUsersIpData.timestamp, sql`now() - interval ${sql.raw(interval)}`));
}
