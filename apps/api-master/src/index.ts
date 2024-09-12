import { CronJob } from "cron";

import debug from "debug";
import { clearOldSessions } from "./functions/clearOldSessions.js";
import createRedis from "./functions/createRedis.js";
import { setCounter } from "./functions/setCounter.js";
import "./tracing.js";

export const redis = createRedis();

export const mainLog = debug("api-master");

debug("Starting cron job to clear old sessions");

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
