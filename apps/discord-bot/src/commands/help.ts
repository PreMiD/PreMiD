import {
	ActionRowBuilder,
	type AutocompleteInteraction,
	ButtonBuilder,
	ButtonStyle,
	type ChatInputCommandInteraction,
	SlashCommandBuilder,
} from "discord.js";
import { createStandardEmbed } from "../util/createStandardEmbed.js";
import { type Command, commands } from "../util/loadCommands.js";

export default {
	data: () => new SlashCommandBuilder()
		.setName("help")
		.setDescription("Shows help and usage information for PreMiD commands")
		.addStringOption(option =>
			option
				.setName("command")
				.setDescription("The specific command to get help for")
				.setAutocomplete(true),
		),
	autocomplete: async (interaction: AutocompleteInteraction) => {
		const focusedValue = interaction.options.getFocused();
		const choices = [...commands.values()]
			.filter(cmd => cmd.help)
			.map(cmd => ({ name: cmd.help!.name, value: cmd.help!.value }));

		const filtered = choices.filter(choice => choice.name.toLowerCase().includes(focusedValue.toLowerCase()));
		return interaction.respond(filtered.slice(0, 25));
	},
	execute: async (interaction: ChatInputCommandInteraction) => {
		const command = interaction.options.getString("command");

		if (command) {
			const help = [...commands.values()].find(({ help }) => help?.value === command)?.help;
			if (!help)
				return interaction.reply({ content: "Command not found", ephemeral: true });

			return interaction.reply({
				embeds: [help.embed],
				ephemeral: true,
			});
		}

		const generalCommands = [];

		for (const cmd of commands.values()) {
			if (cmd.help) {
				if (cmd.help.command)
					generalCommands.push(`\`${cmd.help.command}\` - ${cmd.help.commandDescription}`);
			}
		}

		const embed = createStandardEmbed({
			title: "🛠️ PreMiD Help",
			description: "PreMiD is a simple, configurable utility that allows you to show what you're doing on the web in your Discord now playing status.",
			fields: [
				{
					name: "🔧 Commands",
					value: generalCommands.join("\n") || "No commands available",
					inline: false,
				},
				{
					name: "📚 Additional Information",
					value: "Use `/help <command>` for detailed information about a specific command.",
					inline: false,
				},
			],
		});

		return interaction.reply({
			embeds: [embed],
			components: [
				new ActionRowBuilder<ButtonBuilder>().addComponents(
					new ButtonBuilder().setLabel("View Website").setURL("https://premid.app/").setStyle(ButtonStyle.Link),
					new ButtonBuilder().setLabel("View Store").setURL("https://premid.app/store").setStyle(ButtonStyle.Link),
					new ButtonBuilder().setLabel("Downloads").setURL("https://premid.app/downloads").setStyle(ButtonStyle.Link),
				),
			],
			ephemeral: true,
		});
	},
} satisfies Command;
