import { expect, test } from "vitest";

import createKeyv from "./createKeyv.js";

test("should return keyv instance", async () => {
	const keyv = await createKeyv();

	expect(keyv).toStrictEqual(expect.any(Object));
});
