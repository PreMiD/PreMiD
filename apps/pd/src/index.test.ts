import { expect, it, test, vi } from "vitest";

import { createServer } from "./functions/createServer.js";

test("/health", async () => {
	const server = await createServer(),
		result = await server.inject({
			method: "GET",
			url: "/health",
		});

	expect(result.statusCode).toBe(204);
	expect(result.body).toBe("");
});

it("should have a server variable", async () => {
	vi.mock("./functions/createServer.js", () => ({ createServer: async () => ({ listen: async () => void {} }) }));
	const index = await import("./index.js");
	expect(index.server).toBeDefined();
	vi.unmock("./functions/createServer.js");
});
