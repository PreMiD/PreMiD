import { Events } from "discord.js";
import { DiscordUsers, Presence } from "@premid/db";
import { client, roles as rolesEnv } from "../constants.js";

client.on(Events.GuildMemberAdd, async (member) => {
	const [presence] = await Promise.all([
		Presence.findOne({
			$or: [{ "metadata.author.id": member.id }, { "metadata.contributors.id": member.id }],
		}, { name: true }),
		DiscordUsers.updateOne(
			{ userId: member.id },
			{
				$set: {
					avatar: member.user.avatar,
					created: member.user.createdTimestamp,
					discriminator: member.user.discriminator,
					userId: member.id,
					username: member.user.displayName ?? member.user.username,
				},
			},
			{ upsert: true },
		),
	]);

	//* User should have Presence Developer Role
	if (presence) {
		if (!member.roles.cache.has(rolesEnv.PRESENCE_DEV)) {
			await member.roles.add(rolesEnv.PRESENCE_DEV, "User should have Presence Developer Role");
		}
	}
});
