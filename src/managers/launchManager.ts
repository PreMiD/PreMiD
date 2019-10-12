import AutoLaunch from "auto-launch";
import { app } from "electron";
import { settings } from "./settingsManager";
import { info } from "../util/debug";

//* Create autoLaunch object
let autoLaunch = new AutoLaunch({
  name: app.getName(),
  isHidden: true
});

/**
 * Updates autoLaunch
 */
export async function update() {
  //* If app not packaged return
  //* Either enable/disable autolaunch
  if (!app.isPackaged) {
    //* Show debug
    //* Return
    info("Skipping autoLaunch.");
    return;
  }
  if (settings.get("autoLaunch", true))
    if (!(await autoLaunch.isEnabled()))
      //* Enable if not enabled
      autoLaunch.enable();
    //* Disable if enabled
    else if (await autoLaunch.isEnabled()) autoLaunch.disable();
}
