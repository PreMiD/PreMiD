import { Events, InteractionType } from "discord.js";
import { client } from "../constants.js";
import { commands } from "../util/loadCommands.js";
import { logger } from "../util/logger.js";

client.on(Events.InteractionCreate, async (interaction) => {
	if (!interaction.inGuild()) {
		logger.debug("Interaction received outside of a guild, ignoring.");
		return;
	}

	if (interaction.type === InteractionType.ApplicationCommand || interaction.type === InteractionType.ApplicationCommandAutocomplete) {
		const { commandName } = interaction;
		logger.info(`Command "${commandName}" ${interaction.type === InteractionType.ApplicationCommandAutocomplete ? "autocomplete" : "executed"} in guild ${interaction.guildId} by user ${interaction.user.id}`);

		if (!commands.has(commandName.toLowerCase()))
			return;

		const command = commands.get(commandName.toLowerCase())!;

		if (interaction.type === InteractionType.ApplicationCommandAutocomplete) {
			if (command.autocomplete) {
				try {
					await command.autocomplete(interaction);
					logger.debug(`Autocomplete for command "${commandName}" handled successfully`);
				}
				catch (error) {
					logger.error(`Error handling autocomplete for command "${commandName}":`, error);
				}
			}
			return;
		}

		try {
			await command.execute(interaction);
			logger.debug(`Command "${commandName}" executed successfully`);
		}
		catch (error) {
			logger.error(`Error executing command "${commandName}":`, error);
		}
	}
});
