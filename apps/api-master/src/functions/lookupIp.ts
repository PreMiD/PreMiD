import { join } from "node:path";
import process from "node:process";
import { lookup, reload, updateDb } from "ip-location-api";
import { mainLog } from "../index.js";

const fields = ["latitude", "longitude", "country"];

const dataDir = join(process.cwd(), "data");
const tmpDataDir = join(process.cwd(), "tmp");
const smallMemory = true;

let initialized = false;

export async function lookupIp(ip: string): Promise<{ latitude: number; longitude: number; country: string } | undefined> {
	if (!initialized) {
		reloadIpLocationApi();
		return undefined;
	}
	try {
		return await lookup(ip) ?? undefined;
	}
	catch {
		return undefined;
	}
}

let reloading: Promise<void> | undefined = Promise.resolve();
let log: debug.Debugger | undefined;

export async function reloadIpLocationApi() {
	log ??= mainLog.extend("IP-Location-API");

	if (reloading)
		return reloading;

	reloading = new Promise((resolve, reject) => {
		log?.("Reloading IP location API");
		updateDb({ fields, dataDir, tmpDataDir, smallMemory }).then(async () => {
			await reload({ fields, dataDir, tmpDataDir, smallMemory });
			log?.("IP location API reloaded");
			initialized = true;
			reloading = undefined;
			resolve();
		}).catch(reject);
	});
	return reloading;
}
