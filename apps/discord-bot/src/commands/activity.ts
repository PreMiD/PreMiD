import type { AutocompleteInteraction, ChatInputCommandInteraction } from "discord.js";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } from "discord.js";
import { Presence as Activity } from "@premid/db";
import { createStandardEmbed } from "../util/createStandardEmbed.js";
import type { Command } from "../util/loadCommands.js";
import { getActivityList } from "../util/activityList.js";
import { client } from "../constants.js";

export default {
	data: new SlashCommandBuilder()
		.setName("activity")
		.setDescription("Search for an activity")
		.addStringOption(option =>
			option
				.setName("query")
				.setDescription("The activity to search for")
				.setAutocomplete(true)
				.setRequired(true),
		),
	autocomplete: async (interaction: AutocompleteInteraction) => {
		const focusedValue = interaction.options.getFocused();
		const activityList = getActivityList();
		const filtered = activityList.filter(({ service }) => service.toLowerCase().includes(focusedValue.toLowerCase()));

		return interaction.respond(filtered.slice(0, 25).map(({ service }) => ({ name: service, value: service })));
	},
	execute: async (interaction: ChatInputCommandInteraction) => {
		const query = interaction.options.getString("query");

		if (!query)
			return interaction.reply({ content: "Please provide a query to search for", ephemeral: true });

		const activity = await Activity.findOne({ name: query }, {
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

		if (!activity)
			return interaction.reply({ content: "Activity not found", ephemeral: true });

		const embed = createStandardEmbed({
			title: activity.metadata.service,
			description: activity.metadata.description.en,
			color: activity.metadata.color,
			fields: activity.metadata.contributors?.length
				? [{
						name: "Contributors",
						value: activity.metadata.contributors.map(contributor => `<@${contributor.id}>`).join(", "),
					}]
				: undefined,
		});

		embed.setURL(`https://${Array.isArray(activity.metadata.url) ? activity.metadata.url[0] : activity.metadata.url}`);
		embed.setThumbnail(activity.metadata.logo);

		const author = await client.users.fetch(activity.metadata.author.id).catch(() => null);
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
						.setURL(`https://premid.app/store/presences/${encodeURI(activity.metadata.service)}`)
						.setStyle(ButtonStyle.Link),
				),
		] });
	},
	help: {
		name: "activity",
		value: "activity",
		command: "/activity <query>",
		commandDescription: "Search for an activity",
		embed: createStandardEmbed({
			title: "Command: /activity",
			description: "Search for an activity",
			fields: [
				{ name: "Usage", value: "`/activity <query>`", inline: true },
				{ name: "Example", value: "`/activity YouTube`", inline: true },
			],
		}),
	},
} satisfies Command;
