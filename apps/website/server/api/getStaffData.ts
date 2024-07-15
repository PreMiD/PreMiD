import { REST } from "@discordjs/rest";
import type { RESTGetAPIGuildMemberResult, RESTGetAPIGuildRolesResult } from "discord-api-types/v10";
import { Routes } from "discord-api-types/v10";
import type { DiscordUserCardActivity, DiscordUserCardUser } from "@discord-user-card/vue";
import { ActivityType, PresenceUpdateStatus, flagsToBadges } from "@discord-user-card/vue";

const { discord_bot_token } = useRuntimeConfig();
const rest = new REST({ version: "10" }).setToken(discord_bot_token);

const getGuildRoles = defineCachedFunction(async () => {
	return await rest.get(Routes.guildRoles("493130730549805057")) as RESTGetAPIGuildRolesResult;
}, {
	maxAge: 60 * 60,
});

const staff = ["223238938716798978", "241278257335500811", "259407123782434816", "576097150359044106", "299265463131832340", "205984221859151873", "193714715631812608", "152155870917033985"];

export default defineCachedEventHandler(async () => {
	return await Promise.all(staff.map(async id => await getStaffData(id)));
}, {
	maxAge: 60 * 60,
});

const activities: Map<string, DiscordUserCardActivity[]> = new Map()
	.set("223238938716798978", [
		{
			name: "YouTube Music",
			type: ActivityType.Listening,
			details: "Do What I Say (feat. Vito Z Holmes)",
			state: "Black Gryph0n",
			largeImage: "https://lh3.googleusercontent.com/iPWq0C0lV7LZ6GcPYuwX_VBI8N624lcTTX9ybCCCehzW-yhTszL6pDCShOWj8rQakKua7aArualPtF29KQ=w120-h120-l90-rj",
			smallImage: "https://cdn.rcd.gg/PreMiD/resources/play.png",
			buttons: [
				{
					label: "Listen Along",
					url: "https://music.youtube.com/watch?v=1GCdryJS-g0",
				},
				{
					label: "View Album",
					url: "https://music.youtube.com/playlist?list=OLAK5uy_liz--9shrXoo8HzhWv5flgnM_c_5qyLCs",
				},
			],
		} satisfies DiscordUserCardActivity,
	])
	.set("241278257335500811", [
		{
			name: "YouTube",
			type: ActivityType.Watching,
			details: "Weeekly 위클리 'Good Day (Special Daileee)' Special Video",
			state: "Weeekly 위클리",
			largeImage: "https://i3.ytimg.com/vi/EGFTER65SEQ/hqdefault.jpg",
			smallImage: "https://cdn.rcd.gg/PreMiD/resources/play.png",
			buttons: [
				{
					label: "Watch Video",
					url: "https://www.youtube.com/watch?v=EGFTER65SEQ",
				},
				{
					label: "View Channel",
					url: "https://www.youtube.com/@Weeekly",
				},
			],
		} satisfies DiscordUserCardActivity,
	]).set("193714715631812608", [
		{
			type: ActivityType.Playing,
			name: "Kotobade Asobou",
			largeImage: "https://cdn.rcd.gg/PreMiD/websites/K/Kotobade%20Asobou/assets/logo.png",
			details: "しょうり",
			state: "1/12 - 🟩🟩🟩🟩",
			buttons: [
				{ url: "https://taximanli.github.io/kotobade-asobou/", label: "あそぼう" },
			],
			startTimestamp: Date.now(),
		} satisfies DiscordUserCardActivity,
	]).set("205984221859151873", [
		{
			type: ActivityType.Playing,
			name: "BeatLeader",
			largeImage: "https://cdn.assets.beatleader.xyz/songcover-38bddxx-cover.jpg",
			smallImage: "https://cdn.rcd.gg/PreMiD/websites/B/BeatLeader/assets/15.png",
			smallImageText: "Lawless Expert+",
			details: "Blue Bird",
			state: "Mapped by: Darkrealm7, ItsNoot3rch",
			startTimestamp: Date.now(),
			buttons: [
				{
					label: "View Page",
					url: "https://beatleader.xyz/leaderboard/global/38bddxx97/1",
				},
			],
		} satisfies DiscordUserCardActivity,
	]).set("152155870917033985", [
		{
			type: ActivityType.Watching,
			name: "YouTube",
			details: "lofi hip hop radio 📚 - beats to relax/study to",
			state: "Lofi Girl",
			largeImage: "https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault_live.jpg",
			smallImage: "https://cdn.rcd.gg/PreMiD/resources/live.png",
			startTimestamp: Date.now(),
			buttons: [
				{
					label: "Watch Live",
					url: "https://www.youtube.com/live/jfKfPfyJRdk",
				},
			],
		} satisfies DiscordUserCardActivity,
	]);

async function getStaffData(id: string) {
	try {
		const member = await rest.get(Routes.guildMember("493130730549805057", id)) as RESTGetAPIGuildMemberResult;

		const guildRoles = await getGuildRoles();
		const roles = member.roles.map(role => guildRoles.find(r => r.id === role)).filter(r => r !== undefined);
		return {
			user: {
				id: member.user.id,
				username: member.user.username,
				displayName: member.user.global_name ?? undefined,
				avatar: member.user.avatar ?? undefined,
				avatarDecoration: member.user.avatar_decoration_data?.asset,
				banner: member.user.banner ?? undefined,
				status: PresenceUpdateStatus.Online,
				discriminator: member.user.discriminator,
				roles: roles.map(r => ({ id: r.id, name: r.name, color: r.color, position: r.position, emoji: r.unicode_emoji ?? undefined, icon: r.icon ?? undefined })),
				bannerColor: member.user.accent_color ?? undefined,
				badges: member.user.flags ? flagsToBadges(member.user.flags) : undefined,
			} satisfies DiscordUserCardUser,
			activities: activities.get(member.user.id) ?? [],
		};
	}
	catch (error) {
		console.error(error);
		throw createError({
			statusCode: 500,
			message: "Internal Server Error",
		});
	}
}
