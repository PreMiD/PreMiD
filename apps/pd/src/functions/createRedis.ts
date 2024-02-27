import { hostname } from "node:os";

import { Redis } from "ioredis";

export default function createRedis(): Redis {
	const redis = new Redis({
		host: process.env.REDIS_URL,
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
