import { app, systemPreferences, dialog } from "electron";
import { init as initSocket } from "./managers/socketManager";
import { init as initTray } from "./managers/trayManager";
import { update as initAutoLaunch } from "./managers/launchManager";
import { platform } from "os";
import { checkForUpdate } from "./util/updateChecker";

//* Source .map support
if (!app.isPackaged) require("source-map-support").install();

export var updateCheckerInterval = null;

//* Set AppUserModelId for task manager etc
app.setAppUserModelId("Timeraa.PreMiD");

//* Disable Hardware Acceleration as we don't render stuff
app.disableHardwareAcceleration();

//* App ready
app.once("ready", async () => {
  //* Mac OS truted accessability client
  if (
    platform() === "darwin" &&
    !systemPreferences.isTrustedAccessibilityClient(false)
  )
    systemPreferences.isTrustedAccessibilityClient(true);

  //* Configure auto launch
  initAutoLaunch();

  //* Init socket
  await initSocket();

  //* init application tray icon
  await initTray();

  //* Check for update
  checkForUpdate(true);
  updateCheckerInterval = setInterval(checkForUpdate, 15 * 1000 * 60);

  //* Hide app icon if Mac OS
  if (platform() === "darwin") app.dock.hide();
});

//* If second instance started, close old one
app.on("second-instance", app.quit);

process.on("uncaughtException", err => {
  if (platform() === "darwin") app.dock.show();
  app.focus();
  dialog.showErrorBox(err.name, err.stack);
});
