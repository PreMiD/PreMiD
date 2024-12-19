import process from "node:process";
import pLimit from "p-limit";
import type { Gauge } from "prom-client";
import { mainLog, redis } from "../index.js";
import { insertIpData } from "./insertIpData.js";

export const updateExtensionVersionGaugeLimit = pLimit(1);
let log: debug.Debugger | undefined;

const scanCount = Number.parseInt(process.env.SCAN_COUNT || "1000", 10);

export async function updateExtensionVersionGauge(gauge: Gauge) {
	await updateExtensionVersionGaugeLimit(async () => {
		log ??= mainLog.extend("Extension-Version-Updates");
		log?.("Starting extension version gauge update");

		const pattern = "pmd-api.heartbeatUpdates.*";
		let cursor: string = "0";
		const versionCounts = new Map<string, number>();

		do {
			const [newCursor, keys] = await redis.scan(cursor, "MATCH", pattern, "COUNT", scanCount);
			cursor = newCursor;

			//* Use pipelining for batch Redis operations
			const pipeline = redis.pipeline();
			keys.forEach(key => pipeline.hmget(key, "extension_version"));
			const hashes = await pipeline.exec();

			if (!hashes) {
				log?.("No hashes found");
				return;
			}

			hashes.forEach(([err, hash]) => {
				if (err || !Array.isArray(hash))
					return;

				const [version] = hash;
				if (version && typeof version === "string")
					versionCounts.set(version, (versionCounts.get(version) || 0) + 1);
			});
		} while (cursor !== "0");

		log?.("Updating extension version gauge");

		//* Batch update the gauge
		gauge.reset();
		for (const [version, count] of versionCounts) {
			gauge.set({ version }, count);
		}

		log?.("Extension version gauge update completed");
	});
}
