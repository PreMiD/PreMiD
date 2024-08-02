import { CronJob } from "cron";

import createRedis from "./functions/createRedis.js";
import { clearOldSesssions } from "./functions/clearOldSessions.js";

export const redis = createRedis();

void new CronJob(
	// Every 5 seconds
	"*/5 * * * * *",
	async () => {
		clearOldSesssions();
	},
	undefined,
	true,
);
