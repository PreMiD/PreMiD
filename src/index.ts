import DiscordManager from "./util/DiscordManager";
import LogManager from "./util/LogManager";
import SocketIO from "socket.io";
import UpdateManager from "./util/UpdateManager";
import { join } from "path";
import { readFileSync } from "fs";
import "source-map-support/register";

export let server: SocketIO.Server, socket: SocketIO.Socket;

export let packageJSON = JSON.parse(
		readFileSync(join(__dirname, "package.json"), "utf-8")
	),
	logManager = new LogManager(),
	discordManager = new DiscordManager(),
	updateManager = new UpdateManager();

async function main() {
	setInterval(() => {
		packageJSON = JSON.parse(
			readFileSync(join(__dirname, "package.json"), "utf-8")
		);
	}, 1000);

	await updateManager.checkForUpdate();

	server = SocketIO();

	server.on("connection", s => {
		socket = s;

		socket.on("setActivity", (activity: any) =>
			discordManager.setActivity(activity.clientId, activity.presenceData)
		);

		socket.on("clearActivity", () => discordManager.clearActivity());

		socket.on("getVersion", () =>
			socket.emit("receiveVersion", packageJSON.version.replace(/\D/g, ""))
		);
	});

	try {
		logManager.info("Listening on port 3020");
		server.listen(3020);
	} catch (err) {
		logManager.error(`Error binding port: ${err.message}`);
		process.exit(0);
	}
}

main();

//* Terminate strategy
process.once("SIGTERM", () => {
	socket?.disconnect(true);
	server.close();
	discordManager.currentClient?.client.destroy().catch(() => {});
	process.kill(process.pid, "SIGTERM");
});
