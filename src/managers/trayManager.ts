import { Menu, Tray } from "electron";
import { join } from "path";
import { platform } from "os";

export var tray: Tray;
export var trayContextMenu = Menu.buildFromTemplate([
  {
    role: "quit"
  }
]);

/**
 * Create tray
 */
export function init() {
  return new Promise<Tray>(function(resolve) {
    //* Create tray
    if (platform() === "darwin")
      tray = new Tray(join(__dirname, "../assets/tray/IconTemplate.png"));
    else tray = new Tray(join(__dirname, "../assets/tray/Icon.png"));

    //* Set its context menu
    tray.setContextMenu(trayContextMenu);
    //* Resolve promise
    resolve(tray);
  });
}
