import process from "node:process";
import { Counter, Gauge, Registry, collectDefaultMetrics } from "prom-client";
import { updateActivePresenceGauge, updateActivePresenceGaugeLimit } from "./functions/updateActivePresenceGauge.js";
import { redis } from "./index.js";

const scanCount = Number.parseInt(process.env.SCAN_COUNT || "1000", 10);

export const register = new Registry();
collectDefaultMetrics({ register });

export const activeSessionsCounter = new Counter({
	name: "active_sessions",
	help: "Number of active sessions",
	async collect() {
		this.reset();
		let length = 0;
		let cursor = "0";
		do {
			const reply = await redis.scan(cursor, "MATCH", "pmd-api.sessions.*", "COUNT", scanCount);
			cursor = reply[0];
			length += reply[1].length;
		} while (cursor !== "0");
		this.inc(length);
	},
});

export const activePresencesCounter = new Gauge({
	name: "active_presences",
	help: "Number of active presences",
	labelNames: ["presence_name", "version"],
	async collect() {
		if (process.env.DISABLE_ACTIVE_PRESENCE_GAUGE !== "true") {
			this.reset();
			updateActivePresenceGaugeLimit.clearQueue();
			await updateActivePresenceGauge(this);
		}
	},
});

register.registerMetric(activeSessionsCounter);
register.registerMetric(activePresencesCounter);
