import { exec } from "child_process";
import { resolve } from "path";
import { error, info } from "./debug";
import { trayContextMenu } from "../managers/trayManager";
import { MenuItem, app, dialog } from "electron";
import { tray } from "../managers/trayManager";
import { platform } from "os";
import sudoPrompt from "sudo-prompt";
import axios from "axios";
import { Notification } from "electron";

let updaterPath: string;
//* Resolve paths for each OS
switch (platform()) {
	case "darwin":
		updaterPath = resolve(
			`${app.getAppPath()}../../../../../updater.app/Contents/MacOS/installbuilder.sh`
		);
		break;
	case "win32":
		updaterPath = resolve(`${app.getAppPath()}../../../updater.exe`);
		break;
}

export async function checkForUpdate(autoUpdate = false) {
	//* Skip Update checker if unsupported OS / not packaged
	if (!app.isPackaged || !["darwin", "win32"].includes(platform())) {
		//* Show debug
		//* return
		info("Skipping UpdateChecker");
		return;
	}

	try {
		let latestAppVersion = (
			await axios.get("https://api.premid.app/v2/versions")
		).data.app;
		if (app.getVersion() >= latestAppVersion) return;
		if (autoUpdate) {
			update();
			return;
		}
	} catch (err) {
		error(err);
	}

	let updateNotification = new Notification({
		title: "Update available!",
		body: "A new version of PreMiD is available! Click here to update."
	});

	updateNotification.once("click", update);

	updateNotification.show();

	addTray();
}

export function update() {
	if (platform() === "darwin") {
		exec(
			`\"${updaterPath}\" --mode unattended --unattendedmodebehavior download`,
			() => {
				dialog.showErrorBox(
					"Error while updating",
					`${app.name} was unable to update itself. Please try again later.`
				);
			}
		);
		return;
	}

	sudoPrompt.exec(
		`\"${updaterPath}\" --mode unattended --unattendedmodebehavior download`,
		{
			name: app.name,
			icns: "assets/appIcon.icns"
		},
		err => {
			// @ts-ignore
			if (err.message === "User did not grant permission.") {
				// @ts-ignore
				error(err.message);
				addTray();
			} else
				dialog.showErrorBox(
					"Error while updating",
					// @ts-ignore
					`${app.name} was unable to update itself. Please try again later.\n\nError: ${err.message}`
				);
		}
	);
}

function addTray() {
	if (trayContextMenu.items.length < 3) {
		trayContextMenu.insert(
			0,
			new MenuItem({
				label: "Update available!",
				click() {
					update();
				}
			})
		);

		trayContextMenu.insert(
			1,
			new MenuItem({
				type: "separator"
			})
		);
		tray.setContextMenu(trayContextMenu);
	}
}
