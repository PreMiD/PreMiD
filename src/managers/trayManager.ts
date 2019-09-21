import { Menu, Tray } from "electron";
import { join } from "path";

//* Export tray
//* Export trayContextMenu
export let tray: Tray;
export let trayContextMenu = Menu.buildFromTemplate([
  {
    role: "quit"
  }
]);

/**
 * Create tray
 */
export function init() {
  //* Return promise resolves to Tray
  return new Promise<Tray>(function(resolve) {
    //* Create Tray
    //* Set its context menu
    //* Resolve promise
    tray = new Tray(join(__dirname, "../assets/tray/IconTemplate.png"));
    tray.setContextMenu(trayContextMenu);
    resolve(tray);
  });
}
