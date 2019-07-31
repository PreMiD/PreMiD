import AutoLaunch from "auto-launch";
import { app } from "electron";
import { settings } from "./settingsManager";
import { info } from "../util/debug";

var autoLaunch = new AutoLaunch({
  name: app.getName(),
  isHidden: true
});

export async function update() {
  if (!app.isPackaged) {
    info("Skipping autoLaunch.");
    return;
  }

  if (settings.get("autoLaunch", true) && !(await autoLaunch.isEnabled()))
    autoLaunch.enable();
  else autoLaunch.disable();
}
