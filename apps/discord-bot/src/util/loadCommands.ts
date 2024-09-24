import { resolve } from "node:path";
import type { APIApplicationCommandOptionChoice, EmbedBuilder, SharedSlashCommandOptions } from "discord.js";
import { glob } from "glob";

export interface CommandHelp extends APIApplicationCommandOptionChoice<string> {
	embed: EmbedBuilder;
	command?: string;
	commandDescription?: string;
}

export interface Command {
	data: SharedSlashCommandOptions<any> | (() => SharedSlashCommandOptions<any>);
	execute: (interaction: any) => Promise<any>;
	autocomplete?: (interaction: any) => Promise<any>;
	init?: () => Promise<any>;
	help?: CommandHelp;
}

export const commands = new Map<string, Command>();

export default async function loadCommands() {
	for (const file of await glob("*.js", { cwd: resolve(import.meta.dirname, "../commands") })) {
		const imported = await import(`../commands/${file}`);

		const name = typeof imported.default.data === "function" ? imported.default.data().name : imported.default.data.name;
		commands.set(name.toLowerCase(), imported.default);

		if (imported.default.init) {
			try {
				await imported.default.init();
			}
			catch (error) {
				//* Failed to initialize command
				console.error(`Failed to initialize command ${name}:`, error);
			}
		}
	}

	return commands;
}
