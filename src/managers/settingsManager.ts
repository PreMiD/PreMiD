import ElectronStore from "electron-store";
import { tray } from "./trayManager";
import { update as updateAutoLaunch } from "./launchManager";
import { platform } from "os";
import { deinit as deinitInputs } from "./inputManager";
import { info } from "../util/debug";

//* Export and set default settings
export var settings = new ElectronStore({
  defaults: {
    autoLaunch: true
  }
});

/**
 * Update settings of app
 * @param extensionSettings Settings from extension
 */
export function update(extensionSettings: extensionSettings) {
  console.log(extensionSettings);
  //* Show debug
  //* remove title if disabled
  //* unbind keybinds if disabled
  //* Update autolaunch if updated
  //* Save Settings

  info("Updated settings");
  if (!extensionSettings.titleMenubar && platform() === "darwin")
    tray.setTitle("");
  if (!extensionSettings.mediaKeys) deinitInputs();
  if (settings.get("autoLaunch") != extensionSettings.autoLaunch)
    updateAutoLaunch();
  settings.set("autoLaunch", extensionSettings.autoLaunch);
}

//TODO Try to move types into file
interface extensionSettings {
  /**
   * If extension is enabled
   */
  enabled: boolean;
  /**
   * Autolaunch enabled
   */
  autoLaunch: boolean;
  /**
   * Media keys enabled
   */
  mediaKeys: boolean;
  /**
   * title menubar (TrayTitle)
   */
  titleMenubar: boolean;
  /**
   * language of extension
   */
  language: string;
}
