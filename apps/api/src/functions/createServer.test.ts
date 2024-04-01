import { describe, expect, it, test } from "vitest";

describe.concurrent("createServer", () => {
	test("should create a server", async () => {
		const createServer = await import("./createServer.js"),
			server = await createServer.default();
		expect(server).toBeDefined();
		expect(server).toHaveProperty("listen");
	});

	it("should handle graphql requests", async () => {
		const createServer = await import("./createServer.js"),
			server = await createServer.default();
		expect(server).toBeDefined();
		expect(server).toHaveProperty("listen");

		const response = await server.inject({
			method: "GET",
			url: "/v4",
		});

		expect(response).toBeDefined();
		expect(response.statusCode).toBe(200);
	});
});
