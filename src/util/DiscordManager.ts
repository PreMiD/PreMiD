import { Client } from "discord-rpc";
import { logManager, packageJSON } from "..";

export default class DiscordManager {
	currentClient: {
		clientId: string;
		client: Client;
		ready: boolean;
	} | null = null;
	currentPresence: any;

	constructor() {}

	async setActivity(clientId: string, rpcData: any) {
		if (rpcData.largeImageKey)
			rpcData.largeImageText = `PreMiD • v${packageJSON.version}${
				packageJSON.releaseType !== "release"
					? "-" + packageJSON.releaseType
					: ""
			}`;

		//* Return if the same presence
		if (JSON.stringify(this.currentPresence) === JSON.stringify(rpcData))
			return;

		this.currentPresence = rpcData;

		await this.loginClient(clientId);
		if (this.currentClient?.ready)
			await this.currentClient.client
				.setActivity(rpcData)
				.catch(() => (this.currentClient = null));
	}

	async clearActivity() {
		if (this.currentClient?.ready)
			await this.currentClient.client
				.clearActivity()
				.catch(() => (this.currentClient = null));
	}

	private async loginClient(clientId: string) {
		if (clientId !== this.currentClient?.clientId) {
			await this.currentClient?.client.destroy().catch(() => {});
		} else return;

		logManager.info(`Logging in RPC client ${clientId}`);

		const client = new Client({ transport: "ipc" });

		this.currentClient = { clientId, client, ready: false };

		client
			.login({ clientId })
			// @ts-ignore
			.then(() => (this.currentClient.ready = true))
			.catch(() => (this.currentClient = null));
	}
}
