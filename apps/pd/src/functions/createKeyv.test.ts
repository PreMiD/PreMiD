import { expect, test } from "vitest";

import createKeyv from "./createKeyv.js";

test("should return keyv instance", () => {
	const keyv = createKeyv();

	expect(keyv).toStrictEqual(expect.any(Object));
});
