import KeyvRedis from "@keyv/redis";
import Keyv from "keyv";

import redis from "../redis.js";

export default async function createKeyv() {
	let options: Keyv.Options<string> | undefined;

	/* c8 ignore next 8 */
	if (process.env.REDIS_URL) {
		options = {
			store: new KeyvRedis(redis),
		};
	}

	const keyv = new Keyv<string>(
		options,
	);

	/* c8 ignore next 3 */
	keyv.on("error", (error) => {
		console.error("Keyv connection error:", error);
	});

	return keyv;
}
