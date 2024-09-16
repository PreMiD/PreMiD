import type { InferInsertModel } from "drizzle-orm";
import { db, onlineUsersIpData } from "../db.js";
import { lookupIp } from "./lookupIp.js";

const batchSize = 1000;

export async function insertIpData(
	data: Map<string, {
		presences: string[];
		sessions: number;
	}>,
) {
	const timestamp = new Date();
	const list = Array.from(data.entries());
	//* Split into batches of batchSize
	for (let i = 0; i < list.length; i += batchSize) {
		const batch = list.slice(i, i + batchSize);
		const mapped = await Promise.all(batch.map(async ([ip, { presences, sessions }]) => {
			const parsed = await lookupIp(ip);
			if (parsed) {
				return {
					ip,
					country: parsed.country,
					latitude: parsed.latitude.toString(),
					longitude: parsed.longitude.toString(),
					presences,
					sessions,
					timestamp,
				} satisfies InferInsertModel<typeof onlineUsersIpData>;
			}
		}));

		const toInsert = mapped.filter(Boolean) as InferInsertModel<typeof onlineUsersIpData>[];

		if (toInsert.length > 0) {
			await db.insert(onlineUsersIpData).values(toInsert);
		}
	}
}
