import { Menu, Tray, app, shell } from "electron";
import { join } from "path";
import { trayManager } from "..";
import { checkForUpdate, update, updateAvailable } from "../util/updateChecker";
import { connected } from "./socketManager";
import { platform } from "os";

let trayIcon;

switch (platform()) {
	case "darwin":
		trayIcon = join(__dirname, "../assets/tray/IconTemplate.png");
		break;
	case "win32":
		trayIcon = join(__dirname, "../assets/tray/Icon.ico");
		break;
	default:
		trayIcon = join(__dirname, "../assets/tray/Icon@4x.png");
		break;
}

export class TrayManager {
	tray: Tray;

	constructor() {
		this.tray = new Tray(trayIcon);
		this.tray.setToolTip(app.name);

		this.tray.on("right-click", () => this.update());
	}

	update() {
		this.tray.setContextMenu(
			Menu.buildFromTemplate([
				{
					icon:
						platform() === "darwin"
							? join(__dirname, "../assets/tray/IconTemplate.png")
							: join(__dirname, "../assets/tray/Icon@4x.png"),
					label: `${app.name} v${app.getVersion()}`,
					enabled: false
				},
				{
					id: "connectInfo",
					label: `Extension - ${connected ? "Connected" : "Not connected"}`,
					enabled: false
				},
				{
					type: "separator"
				},
				{
					label: "Presence Store",
					click: () => shell.openExternal("https://premid.app/store")
				},
				{
					type: "separator"
				},
				{
					label: `Update ${app.name}`,
					visible: updateAvailable,
					click: () => update()
				},
				{
					label: "Check for Updates...",
					click: () => checkForUpdate(false, true),
					visible: !updateAvailable
				},
				{
					label: "Acknowledgments",
					click: () => shell.openExternal("https://premid.app/contributors")
				},
				{
					type: "separator"
				},
				{
					label: `Quit ${app.name}`,
					role: "quit"
				}
			])
		);
	}
}

app.once("quit", () => trayManager.tray.destroy());
