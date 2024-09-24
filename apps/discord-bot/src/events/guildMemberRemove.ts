import { Events } from "discord.js";
import { AlphaUsers, BetaUsers, Credits, DiscordUsers } from "@premid/db";
import { client } from "../constants.js";

client.on(Events.GuildMemberRemove, async (member) => {
	await Promise.all([
		BetaUsers.deleteOne({ userId: member.id }),
		AlphaUsers.deleteOne({ userId: member.id }),
		DiscordUsers.deleteOne({ userId: member.id }),
		Credits.deleteOne({ userId: member.id }),
	]);
});
