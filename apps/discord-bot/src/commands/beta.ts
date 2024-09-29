import type { ChatInputCommandInteraction } from "discord.js";
import { SlashCommandBuilder } from "discord.js";
import { BetaUsers } from "@premid/db";
import { createStandardEmbed } from "../util/createStandardEmbed.js";
import type { Command } from "../util/loadCommands.js";
import { client, processEnv } from "../constants.js";

export default {
	data: new SlashCommandBuilder()
		.setName("beta")
		.setDescription("Join or leave the beta program")
		.addSubcommand(subcommand =>
			subcommand
				.setName("leave")
				.setDescription("Leave the beta program"),
		).addSubcommand(subcommand =>
			subcommand
				.setName("join")
				.setDescription("Join the beta program"),
		),
	execute: async (interaction: ChatInputCommandInteraction) => {
		if (!interaction.inGuild())
			return;
		if (interaction.options.getSubcommand() === "leave") {
			const user = await BetaUsers.findOne({ userId: interaction.user.id });
			if (!user) {
				return interaction.reply({ content: "You are not a beta tester", ephemeral: true });
			}

			await BetaUsers.deleteOne({ userId: interaction.user.id });
			const member = client.guilds.cache.get(interaction.guildId)?.members.cache.get(interaction.user.id);
			await member?.roles.remove(processEnv.BETA_ROLE, "Left the beta program");

			return interaction.reply({ content: "You are no longer a beta tester", ephemeral: true });
		}
		else if (interaction.options.getSubcommand() === "join") {
			await BetaUsers.updateOne({ userId: interaction.user.id }, { $set: { userId: interaction.user.id } }, { upsert: true });
			const member = client.guilds.cache.get(interaction.guildId)?.members.cache.get(interaction.user.id);
			await member?.roles.add(processEnv.BETA_ROLE, "Joined the beta program");

			return interaction.reply({ content: "You are now a beta tester", ephemeral: true });
		}
		else {
			return interaction.reply({ content: "Invalid subcommand", ephemeral: true });
		}
	},
	help: {
		name: "beta",
		value: "beta",
		command: "/beta <join/leave>",
		commandDescription: "Join or leave the beta program",
		embed: createStandardEmbed({
			title: "Command: /beta <join/leave>",
			description: "Join or leave the beta program",
			fields: [
				{ name: "Usage", value: "`/beta <join/leave>`", inline: true },
				{ name: "Example", value: "`/beta join`", inline: true },
			],
		}),
	},
} satisfies Command;
