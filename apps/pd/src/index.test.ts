import { expect, it } from "vitest";

import { createServer } from "./functions/createServer.js";

it("/health", async () => {
	const server = await createServer();
	const result = await server.inject({
		method: "GET",
		url: "/health",
	});

	expect(result.statusCode).toBe(204);
	expect(result.body).toBe("");
});
