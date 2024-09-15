import { CronJob } from "cron";

import debug from "debug";
import { clearOldSessions } from "./functions/clearOldSessions.js";
import createRedis from "./functions/createRedis.js";
import { setCounter } from "./functions/setCounter.js";
import "./tracing.js";
import { updateActivePresenceGauge } from "./functions/updateActivePresenceGauge.js"; //* Added import

export const redis = createRedis();

export const mainLog = debug("api-master");

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
		setCounter();
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
