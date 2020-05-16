import axios from "axios";
import fastGlob from "fast-glob";
import unzipper from "unzipper";
import { discordManager, logManager, packageJSON, server, socket } from "..";
import { get } from "https";
import { join } from "path";
import { unlink } from "fs";

export default class UpdateManager {
	updateCheckInterval: NodeJS.Timeout;
	updateCheckIntervalDelay = 60 * 5 * 1000;
	newVersion = 0;

	constructor() {
		this.updateCheckInterval = setInterval(
			() => this.checkForUpdate(),
			this.updateCheckIntervalDelay
		);
	}

	async checkForUpdate() {
		try {
			logManager.info("Checking for update...");
			const upstreamVersion = (
				await axios("https://api.premid.app/v2/versions")
			).data[packageJSON.releaseType + "App"];

			if (
				parseInt(upstreamVersion.replace(/\D/g, "")) >
				parseInt(packageJSON.version.replace(/\D/g, ""))
			) {
				this.newVersion = upstreamVersion.replace(/\D/g, "");
				await this.updateApp();
			}
		} catch (err) {
			logManager.error(err.message);
		}
	}

	async updateApp() {
		try {
			logManager.info("Attempting to install update...");

			socket?.disconnect(true);
			server?.close();
			discordManager.currentClient?.client.destroy().catch(() => {});
			clearInterval(this.updateCheckInterval);

			logManager.info(
				`Updating PreMiD from ${packageJSON.version.replace(/\D/g, "")} to ${
					this.newVersion
				}`
			);

			get("https://dl.premid.app/alphaApp.zip", async res => {
				if (res.statusCode !== 200) {
					this.updateCheckInterval = setInterval(
						() => this.checkForUpdate(),
						this.updateCheckIntervalDelay
					);
					return;
				}

				const filesToDelete = await fastGlob("**/*", {
					ignore: [
						"uninstall.exe",
						"uninstall.dat",
						"appIcon.ico",
						"index.js",
						"master.js",
						"daemon"
					],
					cwd: join(__dirname, "../")
				});

				await Promise.all(
					filesToDelete.map(
						f =>
							new Promise(resolve =>
								unlink(join(__dirname, "../" + f), resolve)
							)
					)
				);

				res
					.pipe(unzipper.Extract({ path: join(__dirname, "../") }))
					.once("close", () => {
						logManager.info("Update installed, restarting service...");
						process.exit();
					});
			});
		} catch (err) {
			logManager.error(err.message);
		}
	}
}
