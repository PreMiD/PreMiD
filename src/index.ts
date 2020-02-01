import "source-map-support/register";

import { app, dialog, Tray } from "electron";
import { init as initSocket, socket } from "./managers/socketManager";
import { update as initAutoLaunch } from "./managers/launchManager";
import { platform } from "os";
import { checkForUpdate } from "./util/updateChecker";
import { TrayManager } from "./managers/trayManager";

export let trayManager: TrayManager;

//* Define and set it to null
//* Set AppUserModelId for task manager etc
//* When app is ready
export let updateCheckerInterval = null;
app.setAppUserModelId("Timeraa.PreMiD");
app.whenReady().then(async () => {
	trayManager = new TrayManager();

	await Promise.all([checkForUpdate(true), initAutoLaunch(), initSocket()]);

	app.isPackaged
		? (updateCheckerInterval = setInterval(checkForUpdate, 15 * 1000 * 60))
		: undefined;
	if (platform() === "darwin") app.dock.hide();
});

//* If second instance started, close old one
app.on("second-instance", () => app.exit(0));

//* Send errors from app to extension
process.on("unhandledRejection", rejection => {
	console.error(rejection);
	if (socket && socket.connected) socket.emit("unhandledRejection", rejection);
});

// TODO Find better way to log
process.on("uncaughtException", err => {
	console.error(err.stack);
	dialog.showErrorBox(err.name, err.stack);
	app.exit(0);
});
