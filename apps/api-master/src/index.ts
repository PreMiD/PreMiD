import { CronJob } from "cron";

import debug from "debug";
import { clearOldSessions } from "./functions/clearOldSessions.js";
import createRedis from "./functions/createRedis.js";
import { setSessionCounter } from "./functions/setSessionCounter.js";
import "./tracing.js";
import { updateActivePresenceGauge } from "./functions/updateActivePresenceGauge.js";
import { reloadIpLocationApi } from "./functions/lookupIp.js";

export const redis = createRedis();

export const mainLog = debug("api-master");

reloadIpLocationApi();

debug("Starting cron jobs");

void new CronJob(
	// Every 5 seconds
	"*/5 * * * * *",
	() => {
		clearOldSessions();
	},
	undefined,
	true,
);

void new CronJob(
	// Every second
	"* * * * * *",
	() => {
		setSessionCounter();
	},
	undefined,
	true,
);

void new CronJob(
	// Every 5 seconds
	"*/5 * * * * *",
	() => {
		updateActivePresenceGauge();
	},
	undefined,
	true,
);

void new CronJob(
	// Every day at 9am
	"0 9 * * *",
	() => {
		reloadIpLocationApi();
	},
	undefined,
	true,
);
