import { expect, test } from "vitest";

test("should return keyv instance", async () => {
	const { default: createKeyv } = await import("../functions/createKeyv.js"),

		keyv = createKeyv();

	expect(keyv).toStrictEqual(expect.any(Object));
});
