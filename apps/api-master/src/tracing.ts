import process from "node:process";
import { Counter, Gauge, Registry, collectDefaultMetrics } from "prom-client";
import { updateActivePresenceGauge, updateActivePresenceGaugeLimit } from "./functions/updateActivePresenceGauge.js";
import { redis } from "./index.js";

export const register = new Registry();
collectDefaultMetrics({ register });

export const activeSessionsCounter = new Counter({
	name: "active_sessions",
	help: "Number of active sessions",
	async collect() {
		this.reset();
		const length = await redis.hlen("pmd-api.sessions");
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
