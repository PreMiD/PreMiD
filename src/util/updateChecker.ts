import { spawn, exec } from "child_process";
import { resolve } from "path";
import { error, info } from "./debug";
import { trayContextMenu } from "../managers/trayManager";
import { MenuItem, app, dialog } from "electron";
import { tray } from "../managers/trayManager";
import { platform } from "os";
import { updateCheckerInterval } from "../index";
import { existsSync } from "fs";
import sudoPrompt from "sudo-prompt";

let updaterPath: string;

export async function checkForUpdate(autoUpdate = false) {
  //* Skip Update checker if unsupported OS / not packaged
  if (!app.isPackaged || !["darwin", "win32"].includes(platform())) {
    //* Show debug
    //* return
    info("Skipping UpdateChecker");
    return;
  }

  //* Resolve paths for each OS
  switch (platform()) {
    case "darwin":
      updaterPath = resolve(
        `${app.getAppPath()}../../../../../updater.app/Contents/MacOS/installbuilder.sh`
      );
      break;
    case "win32":
      updaterPath = resolve(`${app.getAppPath()}../../../updater.exe`);
      break;
  }

  // TODO remove?
  //* return if update doesn't exist
  if (!existsSync(updaterPath)) {
    error("Updater not found.");
    clearInterval(updateCheckerInterval);
    return;
  }

  //* Spawn update checker
  let child = spawn(updaterPath, ["--mode", "unattended"]);

  child.on("exit", code => {
    //* If no update or error return
    if (code === 1) {
      info("Up to date!");
      return;
    }
    if (code === 2) {
      error("Error while checking for updates");
      return;
    }

    //* If autoUpdate == true
    if (autoUpdate) {
      update();
      return;
    }

    if (trayContextMenu.items.length < 3) {
      trayContextMenu.insert(
        0,
        new MenuItem({
          label: "Update available!",
          click() {
            update();
          }
        })
      );

      trayContextMenu.insert(
        1,
        new MenuItem({
          type: "separator"
        })
      );
      tray.setContextMenu(trayContextMenu);
    }
  });
}

export function update() {
  if (platform() === "darwin") {
    exec(
      `\"${updaterPath}\" --mode unattended --unattendedmodebehavior download`,
      () => {
        dialog.showErrorBox(
          "Error while updating",
          `${app.getName()} was unable to update itself. Please try again later.`
        );
      }
    );
    return;
  }

  sudoPrompt.exec(
    `\"${updaterPath}\" --mode unattended --unattendedmodebehavior download`,
    (error: Error) => {
      dialog.showErrorBox(
        "Error while updating",
        `${app.getName()} was unable to update itself. Please try again later.`
      );
      if (error) {
        checkForUpdate();
        return;
      }
    }
  );
}
