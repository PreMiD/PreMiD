import pLimit from "p-limit";
import { mainLog, redis } from "../index.js";
import { activePresenceGauge } from "../tracing.js";
import { insertIpData } from "./insertIpData.js";

export const updateActivePresenceGaugeLimit = pLimit(1);
let log: debug.Debugger | undefined;

export async function updateActivePresenceGauge() {
	await updateActivePresenceGaugeLimit(async () => {
		log ??= mainLog.extend("Heartbeat-Updates");
		log?.("Starting active presence gauge update");

		const pattern = "pmd-api.heartbeatUpdates.*";
		let cursor: string = "0";
		const serviceCounts = new Map<string, number>();
		const ips = new Map<string, {
			presences: Set<string>;
			sessions: number;
		}>();

		do {
			const [newCursor, keys] = await redis.scan(cursor, "MATCH", pattern, "COUNT", 1000);
			cursor = newCursor;

			//* Use pipelining for batch Redis operations
			const pipeline = redis.pipeline();
			keys.forEach(key => pipeline.hmget(key, "service", "version", "ip_address"));
			const hashes = await pipeline.exec();

			if (!hashes) {
				log?.("No hashes found");
				return;
			}

			hashes.forEach(([err, hash]) => {
				if (err || !Array.isArray(hash))
					return;

				const [service, version, ip] = hash;
				const serviceVersion = service && version ? `${service}:${version}` : "none";
				serviceCounts.set(serviceVersion, (serviceCounts.get(serviceVersion) || 0) + 1);

				if (ip) {
					const ipData = ips.get(ip) || { presences: new Set(), sessions: 0 };
					if (serviceVersion !== "none")
						ipData.presences.add(serviceVersion);
					ipData.sessions++;
					ips.set(ip, ipData);
				}
			});
		} while (cursor !== "0");

		log?.("Updating active presence gauge");

		//* Batch update the gauge
		activePresenceGauge.clear({ except: [...serviceCounts.keys()] });
		for (const [serviceVersion, count] of serviceCounts) {
			const [presence_name, version] = serviceVersion.split(":");
			activePresenceGauge.set(serviceVersion, count, { presence_name, version });
		}

		//* Convert IP data for insertion
		const ipDataForInsertion = new Map(
			Array.from(ips, ([ip, data]) => [ip, {
				presences: Array.from(data.presences),
				sessions: data.sessions,
			}]),
		);

		await insertIpData(ipDataForInsertion);
		log?.("Active presence gauge update completed");
	});
}
