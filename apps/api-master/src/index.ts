import process from "node:process";
import { CronJob } from "cron";
import debug from "debug";
import { clearOldSessions } from "./functions/clearOldSessions.js";
import createRedis from "./functions/createRedis.js";
import { setSessionCounter } from "./functions/setSessionCounter.js";
import "./tracing.js";
import { updateActivePresenceGauge, updateActivePresenceGaugeLimit } from "./functions/updateActivePresenceGauge.js";
// import { reloadIpLocationApi } from "./functions/lookupIp.js";
import { cleanupOldUserData } from "./functions/cleanupOldUserData.js";

export const redis = createRedis();

export const mainLog = debug("api-master");

debug("Starting cron jobs");

void new CronJob(
	// Every 5 seconds
	"*/5 * * * * *",
	() => {
		if (process.env.DISABLE_CLEAR_OLD_SESSIONS !== "true") {
			clearOldSessions();
		}
		if (process.env.DISABLE_SET_SESSION_COUNTER !== "true") {
			setSessionCounter();
		}
		if (process.env.DISABLE_ACTIVE_PRESENCE_GAUGE !== "true") {
			updateActivePresenceGaugeLimit.clearQueue();
			updateActivePresenceGauge();
		}
	},
	undefined,
	true,
);

// void new CronJob(
// 	// Every day at 9am
// 	"0 9 * * *",
// 	() => {
// 		reloadIpLocationApi();
// 	},
// 	undefined,
// 	true,
// 	undefined,
// 	undefined,
// 	true,
// );

void new CronJob(
	// Every day at 1am
	"0 1 * * *",
	() => {
		cleanupOldUserData(14); // Keep 14 days of data
	},
	undefined,
	true,
	undefined,
	undefined,
	true,
);
