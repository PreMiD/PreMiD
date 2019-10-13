import { app, systemPreferences, dialog } from "electron";
//* Source .map support if devEnv
if (!app.isPackaged) require("source-map-support").install();

import { init as initSocket, socket } from "./managers/socketManager";
import { init as initTray } from "./managers/trayManager";
import { update as initAutoLaunch } from "./managers/launchManager";
import { platform } from "os";
import { checkForUpdate } from "./util/updateChecker";
import { info } from "./util/debug";

//* Define and set it to null
//* Set AppUserModelId for task manager etc
//* Hide app icon if Mac OS
//* Mac OS truted accessability client
export let updateCheckerInterval = null;
app.setAppUserModelId("Timeraa.PreMiD");
if (platform() === "darwin") {
  !systemPreferences.isTrustedAccessibilityClient(false)
    ? systemPreferences.isTrustedAccessibilityClient(true)
    : info("Trusted accessibility client.");
}

//* When app is ready
app.whenReady().then(async () => {
  //* Init auto launch
  //* Check for updates > Update and relaunch
  //* Init socket
  //* init application tray icon
  //* If app is packaged, run an update check every 15 mins
  initAutoLaunch();
  await checkForUpdate(true);
  await initSocket();
  await initTray();
  app.isPackaged
    ? (updateCheckerInterval = setInterval(checkForUpdate, 15 * 1000 * 60))
    : undefined;
  if (platform() === "darwin") app.dock.hide();
});

//* If second instance started, close old one
app.on("second-instance", app.quit);

//* Send errors from app to extension
process.on("unhandledRejection", rejection => {
  console.log(rejection);
  socket.emit("unhandledRejection", rejection);
});

// TODO Find better way to log
process.on("uncaughtException", err => {
  dialog.showErrorBox(err.name, err.stack);
  app.exit(0);
});
