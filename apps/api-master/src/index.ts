import process from "node:process";
import { CronJob } from "cron";
import debug from "debug";
import { clearOldSessions } from "./functions/clearOldSessions.js";
import createRedis from "./functions/createRedis.js";
import "./tracing.js";
import { reloadIpLocationApi } from "./functions/lookupIp.js";
import { cleanupOldUserData } from "./functions/cleanupOldUserData.js";
import { setupServer } from "./functions/setupServer.js";

export const redis = createRedis();

export const server = setupServer();

export const mainLog = debug("api-master");

debug("Starting cron jobs");

void reloadIpLocationApi();

void new CronJob(
	// Every 5 seconds
	"*/5 * * * * *",
	() => {
		if (process.env.DISABLE_CLEAR_OLD_SESSIONS !== "true") {
			clearOldSessions();
		}
	},
	undefined,
	true,
);

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
