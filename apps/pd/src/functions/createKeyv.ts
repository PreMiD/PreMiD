import Keyv from "keyv";

export default function createKeyv() {
	const keyv = new Keyv(process.env.REDIS_URL ?? undefined);

	/* c8 ignore next 3 */
	keyv.on("error", (error) => {
		console.error("Keyv connection error:", error);
	});

	return keyv;
}
