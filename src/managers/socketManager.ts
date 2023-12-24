import { app, dialog } from "electron";
import { createServer, Server } from "http";
import socketIo from "socket.io";

import { trayManager } from "../";
import { error, success } from "../util/debug";
import {
	clearActivity,
	getDiscordUser,
	rpcClients,
	setActivity
} from "./discordManager";
import { openFileDialog } from "./presenceDevManager";
import { update as updateSettings } from "./settingsManager";

export let io: socketIo.Server;
export let socket: socketIo.Socket;
export let server: Server;
export let connected: boolean = false;

export function init() {
	return new Promise<void>(resolve => {
		//* Create server
		//* create SocketIo server, don't server client
		//* Try to listen to port 3020
		//* If that fails/some other error happens run socketError
		//* If someone connects to socket socketConnection
		server = createServer();
		io = new socketIo.Server(server, {
			serveClient: false,
			allowEIO3: true,
			allowRequest: (req, callback) => {
				if (req.headers.origin === undefined) return callback(null, true);
				//* 2.5.0+ only allows extensions to connect
				if (
					req.headers.origin.startsWith("chrome-extension://") ||
					req.headers.origin.startsWith("moz-extension://")
				)
					return callback(null, true);

				callback("Origin not allowed", false);
			}
		});
		server.listen(3020, () => {
			//* Resolve promise
			//* Debug info
			resolve();
			success("Opened socket");
		});
		server.on("error", socketError);
		io.on("connection", socketConnection);
	});
}

function socketConnection(cSocket: socketIo.Socket) {
	//* Show debug
	//* Set exported socket letiable to current socket
	//* Handle setActivity event
	//* Handle clearActivity event
	//* Handle settingsUpdate
	//* Handle presenceDev
	//* Handle version request
	//* Once socket user disconnects run cleanup
	success("Socket connection");
	socket = cSocket;
	getDiscordUser()
		.then(user => socket.emit("discordUser", user))
		.catch(_ => socket.emit("discordUser", null));
	socket.on("setActivity", setActivity);
	socket.on("clearActivity", clearActivity);
	socket.on("settingUpdate", updateSettings);
	socket.on("selectLocalPresence", openFileDialog);
	socket.on("getVersion", () =>
		socket.emit("receiveVersion", app.getVersion().replace(/[\D]/g, ""))
	);
	socket.once("disconnect", () => {
		connected = false;
		trayManager.update();
		//* Show debug
		//* Destroy all open RPC connections
		error("Socket disconnection.");
		rpcClients.forEach(c => c.destroy());
	});
	connected = true;
	trayManager.update();
}

//* Runs on socket errors
function socketError(e: any) {
	//* Show debug
	//* If port in use
	error(e.message);
	if (e.code === "EADDRINUSE") {
		//* Focus app
		//* Show error dialog
		//* Exit app afterwards
		app.focus();
		dialog.showErrorBox(
			"Oh noes! Port error...",
			`${app.name} could not bind to port ${e.port}.\nIs ${app.name} running already?`
		);
		app.quit();
	}
}
