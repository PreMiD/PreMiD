import { readdirSync, readFileSync, unwatchFile } from "fs";
import { dialog, app } from "electron";
import { socket } from "./socketManager";
import { extname } from "path";
import { info } from "../util/debug";

import chokidar from "chokidar";

let presenceDevWatchedFiles = [],
	currWatchPath = "",
	currWatcher: chokidar.FSWatcher = null;

export async function watchDir(path: string) {
	currWatchPath = path + "/";
	let files = readdirSync(path);

	if (currWatcher) await currWatcher.close();

	currWatcher = chokidar.watch(currWatchPath, {
		ignoreInitial: true,
		ignored: ["*.ts"]
	});

	currWatcher.on("all", eventName => {
		files = readdirSync(currWatchPath);

		console.log(eventName, currWatchPath, files);

		readFiles(files, currWatchPath);
	});

	readFiles(files, path);
}

async function readFiles(files, path) {
	//* Send files to extension
	socket.emit("localPresence", {
		files: await Promise.all(
			files.map(f => {
				if (extname(f) === ".json")
					return {
						file: f,
						contents: JSON.parse(readFileSync(`${path}/${f}`).toString())
					};
				else if (extname(f) === ".js")
					return {
						file: f,
						contents: readFileSync(`${path}/${f}`).toString()
					};
				else return;
			})
		)
	});
}

export async function openFileDialog() {
	//* Open file dialog
	//* If user cancels
	//* Unwatch all still watched files
	//* Watch directory
	app.focus();
	let oDialog = await dialog.showOpenDialog(null, {
		title: "Select Presence Folder",
		message:
			"Please select the folder that contains the presence you want to load.\n(metadata.json, presence.js, iframe.js)",
		buttonLabel: "Load Presence",
		properties: ["openDirectory"]
	});
	if (oDialog.canceled) {
		//* Show debug
		//* return
		info("Presence load canceled.");
		return;
	}
	info(`Watching ${oDialog.filePaths[0]}`);
	if (presenceDevWatchedFiles.length > 0)
		await Promise.all(
			presenceDevWatchedFiles.map(f => unwatchFile(currWatchPath + f))
		);

	watchDir(oDialog.filePaths[0]);
}
