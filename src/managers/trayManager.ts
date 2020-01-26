import { Menu, Tray } from "electron";
import { join } from "path";
import { platform } from "os";

export class TrayManager {
	tray: Tray;
	trayContextMenu: Menu;

	constructor() {
		this.trayContextMenu = Menu.buildFromTemplate([
			{
				role: "quit"
			}
		]);

		this.tray = new Tray(join(__dirname, "../assets/tray/IconTemplate.png"));
		this.tray.setContextMenu(this.trayContextMenu);
	}
}
