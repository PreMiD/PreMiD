import ElectronStore from "electron-store";
import { destroy } from "./discordManager";
import { tray } from "./trayManager";
import { update as updateAutoLaunch } from "./launchManager";
import { platform } from "os";
import { deinit as deinitInputs, init as initInputs } from "./inputManager";
import { info } from "../util/debug";

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
   * @deprecated
   */
  titleMenubar: boolean;
  /**
   * language of extension
   */
  language: string;
}

//* Export settings
export var settings = new ElectronStore({
  defaults: {
    autoLaunch: true,
    mediaKeys: true,
    trayTitle: true
  }
});

export function update(extensionSettings: extensionSettings) {
  info("Updated settings from extension.");

  //* Destroy rpc connections if disabled
  if (!extensionSettings.enabled) destroy();
  //* remove title if disabled
  if (!extensionSettings.titleMenubar && platform() === "darwin")
    tray.setTitle("");
  //* bind/unbind mediakeys
  if (!extensionSettings.mediaKeys) deinitInputs();
  else initInputs();
  //* Update autolaunch if updated
  if (settings.get("autoLaunch") != extensionSettings.autoLaunch)
    updateAutoLaunch();

  //* Update Settings
  settings.set("autoLaunch", extensionSettings.autoLaunch);
  settings.set("mediaKeys", extensionSettings.mediaKeys);
  settings.set("trayTitle", extensionSettings.titleMenubar);
}
