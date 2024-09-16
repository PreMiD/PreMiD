import { redis } from "../index.js";
import { activePresenceGauge } from "../tracing.js";
import { insertIpData } from "./insertIpData.js";

//* Function to update the gauge with per-service counts
export async function updateActivePresenceGauge() {
	const pattern = "pmd-api.heartbeatUpdates.*";
	let cursor: string = "0";
	const serviceCounts = new Map<string, number>();
	const ips = new Map<string, {
		presences: string[];
		sessions: number;
	}>();

	do {
		const [newCursor, keys] = await redis.scan(cursor, "MATCH", pattern, "COUNT", 1000); //* Use SCAN with COUNT for memory efficiency
		cursor = newCursor;
		for (const key of keys) {
			const hash = await redis.hgetall(key);
			const service = hash.service;
			const version = hash.version; //* Get version from hash
			const ip = hash.ip_address;
			if (service && version) {
				serviceCounts.set(`${service}:${version}`, (serviceCounts.get(`${service}:${version}`) || 0) + 1);
			}
			else {
				serviceCounts.set("none", (serviceCounts.get("none") || 0) + 1);
			}
			if (ip) {
				const presenceName = service && version ? `${service}:${version}` : undefined;
				const ipData = ips.get(ip) || { presences: [], sessions: 0 };
				ipData.presences = [...new Set<string>([...ipData.presences, presenceName].filter(Boolean) as string[])];
				ipData.sessions++;
				ips.set(ip, ipData);
			}
		}
	} while (cursor !== "0");

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
}
