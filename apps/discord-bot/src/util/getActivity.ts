import type { ActivitiesOptions } from "discord.js";
import { ActivityType } from "discord.js";
import { getActivityList } from "./activityList.js";

export function getActivity({ previous }: {
	previous?: string;
}): ActivitiesOptions {
	const activityList = getActivityList();
	const statuses = activityList.filter(status => status.service !== previous);
	const selectedStatus = statuses[Math.floor(Math.random() * statuses.length)]!;

	return {
		type: selectedStatus.category === "music"
			? ActivityType.Listening
			: selectedStatus.category === "anime"
				? ActivityType.Watching
				: selectedStatus.category === "videos"
					? ActivityType.Watching
					: ActivityType.Playing,
		name: selectedStatus.service,
	};
}
