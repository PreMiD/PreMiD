import { platform } from "os";
import { app, dialog } from "electron";

/**
 * Check if application is in applications folder (Mac OS)
 * if not tell user via prompt to auto move/quit app
 */
export default function inAppFolder() {
  return new Promise((resolve, reject) => {
    //* Check if platform === darwin, app in applications folder & packaged else resolve promise
    if (
      platform() === "darwin" &&
      !app.isInApplicationsFolder() &&
      app.isPackaged
    ) {
      //* Focus app
      app.focus();
      //* Show dialog
      dialog.showMessageBox(
        null,
        {
          message: "Move to Applications folder?",
          detail: `${app.getName()} must live in the Applications folder to work properly.`,
          buttons: ["Move to Applications folder", `Quit ${app.getName()}`],
          defaultId: 0,
          cancelId: 1
        },
        index => {
          //* If option === "Quit app"
          if (index === 1) {
            //* Reject promise & return
            reject();
            return;
          }

          //* Move to applications folder & resolve promise
          app.moveToApplicationsFolder();
          resolve();
        }
      );
    } else resolve();
  });
}
