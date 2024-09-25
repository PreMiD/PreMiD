import process from "node:process";
import { connect } from "mongoose";
import { Routes } from "discord.js";
import { client, processEnv, rest } from "./constants.js";
import { getActivity } from "./util/getActivity.js";
import loadCommands from "./util/loadCommands.js";
import loadEvents from "./util/loadEvents.js";
import { logger } from "./util/logger.js";
import { updatePresenceList } from "./util/presenceList.js";

logger.info("Starting bot initialization...");

try {
	const commands = await loadCommands();
	logger.info("Commands loaded successfully");

	//* Register guild-specific commands
	await rest.put(Routes.applicationGuildCommands(processEnv.CLIENT_ID, processEnv.GUILD_ID), {
		body: Array.from(commands.values()).map(({ data }) => data),
	});

	//* Clear global commands
	await rest.put(Routes.applicationCommands(processEnv.CLIENT_ID), { body: [] });
}
catch (error) {
	logger.error("Error loading commands:", error);
	process.exit(1);
}

try {
	await loadEvents();
	logger.info("Events loaded successfully");
}
catch (error) {
	logger.error("Error loading events:", error);
	process.exit(1);
}

try {
	await connect(processEnv.DATABASE_URL, { appName: "PreMiD Discord Bot" });
	logger.info("Successfully connected to database");
	await updatePresenceList();
	logger.info("Successfully updated presence list");
}
catch (error) {
	logger.error("Error connecting to database:", error);
	process.exit(1);
}

client.login(processEnv.TOKEN)
	.then(async () => {
		logger.info("Bot logged in successfully");
		client.user?.setActivity(getActivity({}));
	})
	.catch((error) => {
		logger.error("Failed to log in:", error);
		process.exit(1);
	});

client.once("ready", () => {
	logger.info(`Bot is ready! Logged in as ${client.user?.tag}`);
});

setInterval(async () => {
	const newActivity = getActivity({
		previous: client.user?.presence.activities[0]?.name,
	});
	client.user?.setActivity(newActivity);
	logger.debug(`Updated bot activity to: ${newActivity.name}`);
}, 60000);

setInterval(() => {
	updatePresenceList();
}, 1000 * 60 * 5);
