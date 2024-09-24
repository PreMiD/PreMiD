import { Events } from "discord.js";
import { AlphaUsers, BetaUsers, Credits, DiscordUsers } from "@premid/db";
import { client, processEnv, roleColors, roles as rolesEnv } from "../constants.js";

client.on(Events.GuildMemberUpdate, async (oldMember, newMember) => {
	const highestRole = newMember.roles.cache
		.filter(role => (Object.values(rolesEnv) as string[]).includes(role.id))
		.sort((a, b) => b.position - a.position)
		.at(0)!;

	await Promise.all([
		DiscordUsers.updateOne(
			{ userId: newMember.id },
			{
				$set: {
					avatar: newMember.user.avatar,
					created: newMember.user.createdTimestamp,
					discriminator: newMember.user.discriminator,
					userId: newMember.id,
					username: newMember.user.username,
				},
			},
			{ upsert: true },
		),
		Credits.updateOne(
			{ userId: newMember.id },
			{
				$set: {
					userId: newMember.id,
					name: newMember.user.username,
					tag: newMember.user.discriminator,
					avatar: newMember.user.avatar,
					premium_since: newMember.premiumSince !== null ? newMember.premiumSinceTimestamp! : undefined,
					role: newMember.roles.cache.filter(r => r.name !== "@everyone").map(r => r.name),
					roleIds: newMember.roles.cache.filter(r => r.name !== "@everyone").map(r => r.id),
					roleColor: roleColors[
						Object.entries(rolesEnv).find(([, id]) => id === highestRole.id)![0] as keyof typeof roleColors
					],
					rolePosition: highestRole.position,
					status: newMember.presence?.status ?? "offline",
				},
			},
			{ upsert: true },
		),
	]);

	const roles = newMember.roles.cache.map(role => role.id);

	//* User should have Alpha Role
	if (roles.includes(rolesEnv.BOOSTER) || roles.includes(rolesEnv.PATRON) || newMember.roles.cache.has(processEnv.ALPHA_ROLE)) {
		if (!newMember.roles.cache.has(processEnv.ALPHA_ROLE)) {
			await newMember.roles.add(processEnv.ALPHA_ROLE, "User should have Alpha Role");
		}
		if (newMember.roles.cache.has(processEnv.BETA_ROLE)) {
			await newMember.roles.remove(processEnv.BETA_ROLE, "User should have Alpha Role");
		}
		await Promise.all([
			AlphaUsers.updateOne({ userId: newMember.id }, { $set: { userId: newMember.id } }, { upsert: true }),
			BetaUsers.deleteOne({ userId: newMember.id }),
		]);
		return;
	}

	//* User should have Beta Role
	const betaUser = await BetaUsers.findOne({ userId: newMember.id });
	if (roles.includes(rolesEnv.DONATOR) || betaUser || newMember.roles.cache.has(processEnv.BETA_ROLE) || oldMember.roles.cache.has(processEnv.ALPHA_ROLE)) {
		if (newMember.roles.cache.has(processEnv.ALPHA_ROLE)) {
			await newMember.roles.remove(processEnv.ALPHA_ROLE, "User should have Beta Role");
		}
		if (!newMember.roles.cache.has(processEnv.BETA_ROLE)) {
			await newMember.roles.add(processEnv.BETA_ROLE, "User should have Beta Role");
		}
		await Promise.all([
			BetaUsers.updateOne({ userId: newMember.id }, { $set: { userId: newMember.id } }, { upsert: true }),
			AlphaUsers.deleteOne({ userId: newMember.id }),
		]);
	}
});

//* Beta can be requested from the website so we need to periodically check for that
setInterval(async () => {
	const betaUsers = await BetaUsers.find({});
	const guild = await client.guilds.fetch(processEnv.GUILD_ID);

	for (const betaUser of betaUsers) {
		const member = await guild.members.fetch(betaUser.userId);

		if (!member.roles.cache.has(processEnv.BETA_ROLE)) {
			await member.roles.add(processEnv.BETA_ROLE, "User should have Beta Role");
		}
	}
}, 1000 * 60 * 5);
