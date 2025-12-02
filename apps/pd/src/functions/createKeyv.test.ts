import { expect, it } from "vitest";

import createKeyv from "./createKeyv.js";

it("should return keyv instance", () => {
	const keyv = createKeyv();

	expect(keyv).toStrictEqual(expect.any(Object));
});
