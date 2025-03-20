import process from "node:process";
import { connect } from "mongoose";
import { Routes } from "discord.js";
import * as Sentry from "@sentry/node";
import { client, processEnv, rest } from "./constants.js";
import { getActivity } from "./util/getActivity.js";
import loadCommands, { commands } from "./util/loadCommands.js";
import loadEvents from "./util/loadEvents.js";
import { logger } from "./util/logger.js";
import { updateActivityList } from "./util/activityList.js";

Sentry.init({
	integrations: [
		Sentry.mongooseIntegration(),
	],
	dsn: processEnv.SENTRY_DSN,
});

logger.info("Starting bot initialization...");

try {
	await loadCommands();
	logger.info("Commands loaded successfully");
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
	await updateActivityList();
	logger.info("Successfully updated presence list");
}
catch (error) {
	logger.error("Error connecting to database:", error);
	process.exit(1);
}

try {
	await client.login(processEnv.TOKEN);
	logger.info("Bot logged in successfully");
	client.user?.setActivity(getActivity({}));
}
catch (error) {
	logger.error("Failed to log in:", error);
	process.exit(1);
}

client.once("ready", async (client) => {
	logger.info(`Bot is ready! Logged in as ${client.user?.tag}`);

	try {
		//* Register guild-specific commands
		await rest.put(Routes.applicationGuildCommands(client.application.id, processEnv.GUILD_ID), {
			body: Array.from(commands.values()).map(({ data }) => data),
		});

		//* Clear global commands
		await rest.put(Routes.applicationCommands(client.application.id), { body: [] });
		logger.info("Successfully registered commands");
	}
	catch (error) {
		logger.error("Failed to register commands:", error);
		process.exit(1);
	}
});

setInterval(async () => {
	const newActivity = getActivity({
		previous: client.user?.presence.activities[0]?.name,
	});
	client.user?.setActivity(newActivity);
	logger.debug(`Updated bot activity to: ${newActivity.name}`);
}, 60000);

setInterval(() => {
	updateActivityList();
}, 1000 * 60 * 5);
