import type { ActivitiesOptions } from "discord.js";
import { ActivityType } from "discord.js";

export function getActivity({ previous }: {
	previous?: string;
}): ActivitiesOptions {
	const statuses = [
		"Setting activities for others",
		"hihihaha",
	].filter(status => status !== previous);

	return {
		type: ActivityType.Custom,
		name: statuses[Math.floor(Math.random() * statuses.length)]!,
	};
}
