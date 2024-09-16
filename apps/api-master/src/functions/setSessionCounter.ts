import { redis } from "../index.js";
import { activeSessionsCounter } from "../tracing.js";

let activeActivities = 0;
activeSessionsCounter.add(0);
export async function setSessionCounter() {
	const length = await redis.hlen("pmd-api.sessions");
	if (length === activeActivities)
		return;
	const diff = length - activeActivities;
	activeActivities = length;
	activeSessionsCounter.add(diff);
}
