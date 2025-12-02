import { describe, expect, it } from "vitest";

import { createServer } from "../functions/createServer.js";

describe("createServer", () => {
	it("should return a fastify instance", async () => {
		const server = await createServer();
		expect(server).toBeDefined();
	});
});
