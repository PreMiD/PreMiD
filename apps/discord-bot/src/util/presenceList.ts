import { Presence } from "@premid/db";
import { logger } from "./logger.js";

// eslint-disable-next-line import/no-mutable-exports
export let presenceList: string[] = [];

export async function updatePresenceList() {
	presenceList = (await Presence.find({}, { name: true })).map(presence => presence.name);
	logger.debug(`Updated presence list with ${presenceList.length} presences`);
}
