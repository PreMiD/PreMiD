import { app, systemPreferences, dialog } from "electron";
//* Source .map support
if (!app.isPackaged) require("source-map-support").install();

import { init as initSocket, socket } from "./managers/socketManager";
import { init as initTray } from "./managers/trayManager";
import { update as initAutoLaunch } from "./managers/launchManager";
import { platform } from "os";
import { checkForUpdate } from "./util/updateChecker";
import { info } from "./util/debug";

//* Define and set it to null
export var updateCheckerInterval = null;

//* Set AppUserModelId for task manager etc
app.setAppUserModelId("Timeraa.PreMiD");

//* Hide app icon if Mac OS
if (platform() === "darwin") app.dock.hide();

//* Mac OS truted accessability client
if (
  platform() === "darwin" &&
  !systemPreferences.isTrustedAccessibilityClient(false)
)
  systemPreferences.isTrustedAccessibilityClient(true);
else info("Trusted Accessibility Client");

//* When app is ready
app.whenReady().then(async () => {
  //* Init auto launch
  initAutoLaunch();

  //* Check for updates > Update and relaunch
  //* Init socket
  //* init application tray icon
  await checkForUpdate(true);
  await initSocket();
  await initTray();

  //* If app is packaged, run an update check every 15 mins
  if (app.isPackaged)
    updateCheckerInterval = setInterval(checkForUpdate, 15 * 1000 * 60);
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
