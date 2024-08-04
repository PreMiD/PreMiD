import { CronJob } from "cron";

import debug from "debug";
import createRedis from "./functions/createRedis.js";
import { clearOldSesssions } from "./functions/clearOldSessions.js";

export const redis = createRedis();

export const mainLog = debug("api-master");

debug("Starting cron job to clear old sessions");

void new CronJob(
	// Every 5 seconds
	"*/5 * * * * *",
	async () => {
		clearOldSesssions();
	},
	undefined,
	true,
);
