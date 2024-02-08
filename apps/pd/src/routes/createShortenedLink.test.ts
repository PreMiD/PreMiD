import { describe, expect, it } from "vitest";

import { createServer } from "../functions/createServer.js";

describe("/create", async () => {
	const server = await createServer();

	it("should return a 400 status code when no URL is provided", async () => {
		const result = await server.inject({
			method: "GET",
			url: "/create/",
		});

		expect(result.statusCode).toBe(400);
		expect(result.body).toMatchInlineSnapshot('"Invalid URL"');
	});

	it("should return a 400 status code when the URL is too short", async () => {
		const result = await server.inject({
			method: "GET",
			url: "/create/https://www.google.com",
		});
		expect(result.statusCode).toBe(400);
		expect(result.body).toMatchInlineSnapshot('"URL is too short"');
	});

	it("should return a 400 status code when the URL is invalid", async () => {
		const result = await server.inject({
			method: "GET",
			url: `/create/file://www.googl${"e".repeat(256)}`,
		});

		expect(result.statusCode).toBe(400);
		expect(result.body).toMatchInlineSnapshot('"Invalid URL"');
	});

	it("should return a 200 status code when the URL is valid", async () => {
		const result = await server.inject({
			method: "GET",
			url: `/create/https://www.googl${"e".repeat(256)}.com`,
		});

		expect(result.statusCode).toBe(200);
		expect(result.body).toStrictEqual(expect.any(String));
	});

	it("should return a 200 status code when the URL is valid and already exists", async () => {
		const result = await server.inject({
			method: "GET",
			url: `/create/https://www.googl${"d".repeat(256)}.com`,
		});

		expect(result.statusCode).toBe(200);
		expect(result.body).toStrictEqual(expect.any(String));
		const { body } = result,
			result2 = await server.inject({
				method: "GET",
				url: `/create/https://www.googl${"d".repeat(256)}.com`,
			});

		expect(result2.statusCode).toBe(200);
		expect(result2.body).toStrictEqual(body);
	});
});
