import { Menu, Tray, app } from "electron";
import { join } from "path";
import { trayManager } from "..";

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
		this.tray.setToolTip(`${app.name} - v${app.getVersion()}`);
	}
}

app.once("quit", () => trayManager.tray.destroy());
