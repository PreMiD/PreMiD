import { expect, test } from "vitest";

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
