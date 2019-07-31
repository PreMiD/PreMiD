import { Menu, Tray } from "electron";
import { join } from "path";

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
    tray = new Tray(join(__dirname, "../assets/tray/Icon@2x.png"));

    //* Set its context menu
    tray.setContextMenu(trayContextMenu);
    //* Resolve promise
    resolve(tray);
  });
}
