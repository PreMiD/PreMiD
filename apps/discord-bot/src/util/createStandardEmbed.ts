import { type APIEmbedField, type ColorResolvable, EmbedBuilder } from "discord.js";

interface StandardEmbedOptions {
	title: string;
	description: string;
	fields?: APIEmbedField[];
	footer?: string;
	color?: number | string;
}

export function createStandardEmbed({
	title,
	description,
	fields = [],
	footer = "PreMiD",
	color = "Blurple",
}: StandardEmbedOptions): EmbedBuilder {
	return new EmbedBuilder()
		.setColor(color as ColorResolvable)
		.setTitle(title)
		.setDescription(description)
		.addFields(fields)
		.setFooter({ text: footer })
		.setTimestamp();
}
