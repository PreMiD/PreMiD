import type { AutocompleteInteraction, ChatInputCommandInteraction } from "discord.js";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } from "discord.js";
import { Presence } from "@premid/db";
import { createStandardEmbed } from "../util/createStandardEmbed.js";
import type { Command } from "../util/loadCommands.js";
import { presenceList } from "../util/presenceList.js";
import { client } from "../constants.js";

export default {
	data: new SlashCommandBuilder()
		.setName("presence")
		.setDescription("Search for a presence")
		.addStringOption(option =>
			option
				.setName("query")
				.setDescription("The presence to search for")
				.setAutocomplete(true)
				.setRequired(true),
		),
	autocomplete: async (interaction: AutocompleteInteraction) => {
		const focusedValue = interaction.options.getFocused();
		const filtered = presenceList.filter(({ service }) => service.toLowerCase().includes(focusedValue.toLowerCase()));
		return interaction.respond(filtered.slice(0, 25).map(({ service }) => ({ name: service, value: service })));
	},
	execute: async (interaction: ChatInputCommandInteraction) => {
		const query = interaction.options.getString("query");

		if (!query)
			return interaction.reply({ content: "Please provide a query to search for", ephemeral: true });

		const presence = await Presence.findOne({ name: query }, {
			_id: false,
			metadata: {
				service: true,
				author: { id: true },
				contributors: { id: true },
				url: true,
				description: {
					en: true,
				},
				logo: true,
				color: true,
			},
		});

		if (!presence)
			return interaction.reply({ content: "Presence not found", ephemeral: true });

		const embed = createStandardEmbed({
			title: presence.metadata.service,
			description: presence.metadata.description.en,
			color: presence.metadata.color,
			fields: presence.metadata.contributors?.length
				? [{
						name: "Contributors",
						value: presence.metadata.contributors.map(contributor => `<@${contributor.id}>`).join(", "),
					}]
				: undefined,
		});

		embed.setURL(`https://${Array.isArray(presence.metadata.url) ? presence.metadata.url[0] : presence.metadata.url}`);
		embed.setThumbnail(presence.metadata.logo);

		const author = await client.users.fetch(presence.metadata.author.id).catch(() => null);
		if (author) {
			embed.setAuthor({
				name: author.username,
				iconURL: author.displayAvatarURL(),
			});
		}

		return interaction.reply({ embeds: [embed], components: [
			new ActionRowBuilder<ButtonBuilder>()
				.addComponents(
					new ButtonBuilder()
						.setLabel("Open in Store")
						.setURL(`https://premid.app/store/presences/${encodeURI(presence.metadata.service)}`)
						.setStyle(ButtonStyle.Link),
				),
		] });
	},
	help: {
		name: "presence",
		value: "presence",
		command: "/presence <query>",
		commandDescription: "Search for a presence",
		embed: createStandardEmbed({
			title: "Command: /presence",
			description: "Search for a presence",
			fields: [
				{ name: "Usage", value: "`/presence <query>`", inline: true },
				{ name: "Example", value: "`/presence YouTube`", inline: true },
			],
		}),
	},
} satisfies Command;
