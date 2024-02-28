import { hostname } from "node:os";

import { Redis } from "ioredis";

/* c8 ignore start */
export default function createRedis(): Redis {
	const redis = new Redis(process.env.REDIS_URL ?? "redis://127.0.0.1:6379", {
		name: `pd-${hostname()}`,
	});

	/* c8 ignore next 3 */
	redis.on("error", (error) => {
		console.error("Redis error", error);
	});

	/* c8 ignore next 3 */
	redis.on("connect", () => {
		console.log("Redis connected");
	});

	return redis;
}
