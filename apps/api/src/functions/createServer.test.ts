import { describe, expect, it } from "vitest";

describe.concurrent("createServer", () => {
	it("should create a server", async () => {
		const createServer = await import("./createServer.js");
		const server = await createServer.default();
		expect(server).toBeDefined();
		expect(server).toHaveProperty("listen");
	});

	it("should handle graphql requests", async () => {
		const createServer = await import("./createServer.js");
		const server = await createServer.default();
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
