import "source-map-support/register";

import { app } from "electron";
import { platform } from "os";

import { update as initAutoLaunch } from "./managers/launchManager";
import { init as initSocket } from "./managers/socketManager";
import { TrayManager } from "./managers/trayManager";
import { checkForUpdate } from "./util/updateChecker";

export let trayManager: TrayManager;

//* Define and set it to null
//* Set AppUserModelId for task manager etc
//* When app is ready
export let updateCheckerInterval = null;

//* Attempt to get lock to prevent multiple instances of PreMiD from running
let singleInstanceLock = app.requestSingleInstanceLock();

//* Application already running?
if (!singleInstanceLock) app.quit();

app.setAppUserModelId("Timeraa.PreMiD");
app.whenReady().then(async () => {
	trayManager = new TrayManager();

	await Promise.all([checkForUpdate(true), initAutoLaunch(), initSocket()]);

	app.isPackaged
		? (updateCheckerInterval = setInterval(checkForUpdate, 15 * 1000 * 60))
		: undefined;
	if (platform() === "darwin") app.dock.hide();
});
