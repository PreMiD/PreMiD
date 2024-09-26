import type { GuildMember } from "discord.js";
import { Events } from "discord.js";
import { AlphaUsers, BetaUsers, Credits, Presence } from "@premid/db";
import { client, processEnv, roleColors, roles as rolesEnv } from "../constants.js";
import { logger } from "../util/logger.js";

client.once(Events.ClientReady, async () => {
	logger.debug("Giving roles to members");
	const guild = await client.guilds.fetch(processEnv.GUILD_ID);
	const members = await guild.members.fetch();

	let count = 0;
	for (const [, member] of members) {
		count++;
		const roles = member.roles.cache.map(role => role.id);

		//* User should have Alpha Role
		if (roles.includes(rolesEnv.BOOSTER) || roles.includes(rolesEnv.PATRON) || member.roles.cache.has(processEnv.ALPHA_ROLE)) {
			if (!member.roles.cache.has(processEnv.ALPHA_ROLE)) {
				await member.roles.add(processEnv.ALPHA_ROLE, "User should have Alpha Role");
			}
			if (member.roles.cache.has(processEnv.BETA_ROLE)) {
				await member.roles.remove(processEnv.BETA_ROLE, "User should have Alpha Role");
			}
			await Promise.all([
				AlphaUsers.updateOne({ userId: member.id }, { $set: { userId: member.id } }, { upsert: true }),
				BetaUsers.deleteOne({ userId: member.id }),
			]);
		}
		else {
			const betaUser = await BetaUsers.findOne({ userId: member.id });
			//* User should have Beta Role
			if (roles.includes(rolesEnv.DONATOR) || betaUser || member.roles.cache.has(processEnv.BETA_ROLE)) {
				if (member.roles.cache.has(processEnv.ALPHA_ROLE)) {
					await member.roles.remove(processEnv.ALPHA_ROLE, "User should have Beta Role");
				}
				if (!member.roles.cache.has(processEnv.BETA_ROLE)) {
					await member.roles.add(processEnv.BETA_ROLE, "User should have Beta Role");
				}
				await Promise.all([
					BetaUsers.updateOne({ userId: member.id }, { $set: { userId: member.id } }, { upsert: true }),
					AlphaUsers.deleteOne({ userId: member.id }),
				]);
			}
		}

		if (count % 1000 === 0) {
			logger.debug(`Processed ${count}/${members.size} members`);
		}
	}
	logger.debug(`Gave roles to ${count}/${members.size} members`);

	//* Presence Developers
	logger.debug("Checking for presence developers");
	const presenceDevelopers = await Presence.find({}, {
		"metadata.author.id": true,
		"metadata.contributors.id": true,
		"_id": false,
	});

	for (const presenceDeveloper of [
		...new Set(
			presenceDevelopers
				.map(presence => [presence.metadata.author.id, ...(presence.metadata.contributors?.map(c => c.id) || [])])
				.flat(),
		),
	]) {
		const member = guild.members.cache.get(presenceDeveloper);

		if (!member)
			continue;

		if (!member.roles.cache.has(rolesEnv.PRESENCE_DEV)) {
			await member.roles.add(rolesEnv.PRESENCE_DEV, "User should have Presence Developer Role");
		}
	}
	logger.debug("Checked for presence developers");

	//* Update Credits
	const usersToCredit = new Set<GuildMember>();

	for (const roleId of Object.values(rolesEnv)) {
		const role = await guild.roles.fetch(roleId);
		if (!role)
			continue;

		for (const member of role.members.values()) {
			usersToCredit.add(member);
		}
	}

	const usersToRemove = await Credits.find({ userId: { $nin: [...usersToCredit].map(member => member.user.id) } });

	await Credits.bulkWrite([
		...usersToRemove.map(user => ({ deleteOne: { filter: { userId: user.userId } } })),
		...[...usersToCredit].map((member) => {
			const highestRole = member.roles.cache
				.filter(role => (Object.values(rolesEnv) as string[]).includes(role.id))
				.sort((a, b) => b.position - a.position)
				.at(0)!;

			const color = roleColors[
				Object.entries(rolesEnv).find(([, id]) => id === highestRole.id)![0] as keyof typeof roleColors
			];
			return {
				updateOne: {
					filter: { userId: member.id },
					update: {
						$set: {
							userId: member.id,
							name: member.user.username,
							tag: member.user.discriminator,
							avatar: member.user.displayAvatarURL({
								extension: "png",
								forceStatic: false,
							}),
							premium_since: member.premiumSince !== null ? member.premiumSinceTimestamp! : undefined,
							role: highestRole.name,
							roleId: highestRole.id,
							roles: member.roles.cache.filter(r => r.name !== "@everyone").map(r => r.name),
							roleIds: member.roles.cache.filter(r => r.name !== "@everyone").map(r => r.id),
							roleColor: color,
							rolePosition: highestRole.position,
							status: member.presence?.status ?? "offline",
							flags: member.user.flags?.toArray() ?? [],
						},
					},
					upsert: true,
				},
			};
		}),
	]);
	logger.debug("Updated Credits");

	//* Beta can be requested from the website so we need to periodically check for that, presence developers are external too so we need to periodically check for that
	setInterval(async () => {
		//* Beta Users
		logger.debug("Checking for beta users");
		const betaUsers = await BetaUsers.find({});
		const guild = await client.guilds.fetch(processEnv.GUILD_ID);

		for (const betaUser of betaUsers) {
			const member = guild.members.cache.get(betaUser.userId);

			if (!member)
				continue;

			if (!member.roles.cache.has(processEnv.BETA_ROLE)) {
				await member.roles.add(processEnv.BETA_ROLE, "User should have Beta Role");
			}
		}
		logger.debug("Checked for beta users");

		//* Presence Developers
		logger.debug("Checking for presence developers");
		const presenceDevelopers = await Presence.find({}, {
			"metadata.author.id": true,
			"metadata.contributors.id": true,
			"_id": false,
		});

		for (const presenceDeveloper of [
			...new Set(
				presenceDevelopers
					.map(presence => [presence.metadata.author.id, ...(presence.metadata.contributors?.map(c => c.id) || [])])
					.flat(),
			),
		]) {
			const member = guild.members.cache.get(presenceDeveloper);

			if (!member)
				continue;

			if (!member.roles.cache.has(rolesEnv.PRESENCE_DEV)) {
				await member.roles.add(rolesEnv.PRESENCE_DEV, "User should have Presence Developer Role");
			}
		}
		logger.debug("Checked for presence developers");
	}, 1000 * 60 * 5);
});
