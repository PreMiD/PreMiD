import { hostname } from "node:os";

import { Redis } from "ioredis";

/* c8 ignore start */
export default function createRedis(): Redis {
	const redis = new Redis({
		lazyConnect: true,
		name: `pd-${hostname()}`,
		sentinels: process.env.REDIS_SENTINELS?.split(",")?.map(s => ({
			host: s,
			port: 26_379,
		})),
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
