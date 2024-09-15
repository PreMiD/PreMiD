import { redis } from "../index.js";
import { activePresenceGauge } from "../tracing.js";

//* Track previously recorded services
const previousServices = new Set<string>();

//* Function to update the gauge with per-service counts
export async function updateActivePresenceGauge() {
	const pattern = "pmd-api.heartbeatUpdates.*";
	let cursor: string = "0";
	const serviceCounts = new Map<string, number>();

	do {
		const [newCursor, keys] = await redis.scan(cursor, "MATCH", pattern, "COUNT", 1000); //* Use SCAN with COUNT for memory efficiency
		cursor = newCursor;
		for (const key of keys) {
			const hash = await redis.hgetall(key);
			const service = hash.service;
			const version = hash.version; //* Get version from hash
			serviceCounts.set(`${service}:${version}`, (serviceCounts.get(`${service}:${version}`) || 0) + 1);
		}
	} while (cursor !== "0");

	// Set current counts and remove from previousServices
	serviceCounts.forEach((count, serviceVersion) => {
		const [presence_name, version] = serviceVersion.split(":");
		activePresenceGauge.record(count, { presence_name, version });
		previousServices.delete(serviceVersion);
	});

	// Set gauge to 0 for services that are no longer active
	previousServices.forEach((serviceVersion) => {
		const [presence_name, version] = serviceVersion.split(":");
		activePresenceGauge.record(0, { presence_name, version });
	});

	// Update the set of previous services
	serviceCounts.forEach((_, serviceVersion) => previousServices.add(serviceVersion));
}
