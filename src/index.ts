import "source-map-support/register";

import { app } from "electron";
import { init as initSocket } from "./managers/socketManager";
import { update as initAutoLaunch } from "./managers/launchManager";
import { platform } from "os";
import { checkForUpdate } from "./util/updateChecker";
import { TrayManager } from "./managers/trayManager";
import * as Sentry from "@sentry/electron";

if (app.isPackaged)
	Sentry.init({
		dsn:
			"https://c11e044610da45b7a4dc3bac6c006037@o357239.ingest.sentry.io/5193608"
	});
export let trayManager: TrayManager;

//* Define and set it to null
//* Set AppUserModelId for task manager etc
//* When app is ready
export let updateCheckerInterval = null;

//* Attempt to get lock to prevent multiple instances of PreMiD from running
let singleInstanceLock = app.requestSingleInstanceLock();

//* Application already running?
if (!singleInstanceLock)
	app.quit();

app.setAppUserModelId("Timeraa.PreMiD");
app.whenReady().then(async () => {
	trayManager = new TrayManager();

	await Promise.all([checkForUpdate(true), initAutoLaunch(), initSocket()]);

	app.isPackaged
		? (updateCheckerInterval = setInterval(checkForUpdate, 15 * 1000 * 60))
		: undefined;
	if (platform() === "darwin") app.dock.hide();
});