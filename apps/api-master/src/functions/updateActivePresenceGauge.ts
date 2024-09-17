import pLimit from "p-limit";
import { mainLog, redis } from "../index.js";
import { activePresenceGauge } from "../tracing.js";
import { insertIpData } from "./insertIpData.js";

export const updateActivePresenceGaugeLimit = pLimit(1);
let log: debug.Debugger | undefined;
//* Function to update the gauge with per-service counts
export async function updateActivePresenceGauge() {
	await updateActivePresenceGaugeLimit(async () => {
		log ??= mainLog.extend("Heartbeat-Updates");

		const pattern = "pmd-api.heartbeatUpdates.*";
		let cursor: string = "0";
		const serviceCounts = new Map<string, number>();
		const ips = new Map<string, {
			presences: string[];
			sessions: number;
		}>();

		do {
			const [newCursor, keys] = await redis.scan(cursor, "MATCH", pattern, "COUNT", 1000);
			cursor = newCursor;

			const hashes = await Promise.all(keys.map(key => redis.hmget(key, "service", "version", "ip_address")));
			for (const hash of hashes) {
				const service = hash[0];
				const version = hash[1];
				const ip = hash[2];
				if (service && version) {
					serviceCounts.set(`${service}:${version}`, (serviceCounts.get(`${service}:${version}`) || 0) + 1);
				}
				else {
					serviceCounts.set("none", (serviceCounts.get("none") || 0) + 1);
				}
				if (ip) {
					const presenceName = service && version ? `${service}:${version}` : undefined;

					const ipData = ips.get(ip) || { presences: [], sessions: 0 };
					if (presenceName) {
						ipData.presences.push(presenceName);
						ipData.presences = Array.from(new Set(ipData.presences.filter(Boolean)));
					}

					ipData.sessions++;
					ips.set(ip, ipData);
				}
			}
		} while (cursor !== "0");

		log?.("Updating active presence gauge");

		// Clear previous data
		activePresenceGauge.clear({ except: [...serviceCounts.keys()] });

		// Set new data
		for (const [serviceVersion, count] of serviceCounts.entries()) {
			const [presence_name, version] = serviceVersion.split(":");
			activePresenceGauge.set(serviceVersion, count, {
				presence_name,
				version,
			});
		}

		insertIpData(ips);
	});
}
