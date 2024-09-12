import { redis } from "../index.js";
import { counter } from "../tracing.js";

let activeActivities = 0;
counter.add(0);
export async function setCounter() {
	const length = await redis.hlen("pmd-api.sessions");
	if (length === activeActivities)
		return;
	const diff = length - activeActivities;
	activeActivities = length;
	counter.add(diff);
}
