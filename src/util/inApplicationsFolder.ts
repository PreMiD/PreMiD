import { app, dialog } from "electron";
import { error, info } from "./debug";
import { platform } from "os";

export default async function() {
  //* Return if not MacOS
  //* Return if in applications folder or not packaged
  if (platform() !== "darwin") return true;
  if (app.isInApplicationsFolder() || !app.isPackaged) return true;

  //* Send dialog
  //* If response 0 (exit) exit app
  //* Else move to pplications folder
  var answer = await dialog.showMessageBox(null, {
    message: `${app.getName()} must live in your applications folder to work properly.`,
    title: "Move to applications folder",
    buttons: ["Exit", "Move"],
    type: "question"
  });

  if (answer.response === 0) {
    error("User denied move");
    app.exit();
    return false;
  } else {
    info("Moving to applications folder...");
    if (!app.moveToApplicationsFolder()) {
      error("User denied move");
      return false;
    } else return true;
  }
}
