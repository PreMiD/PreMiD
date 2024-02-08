import Keyv from "keyv";

export default function createKeyv() {
	const keyv = new Keyv();

	keyv.on("error", (error) => {
		console.error("Keyv connection error:", error);
	});

	return keyv;
}
