import { resolve } from "node:path";

import { describe, expect, test } from "vitest";

import { app } from "./index.js";

describe("schemas", () => {
	test("/ should return date", async () => {
		const result = await app.inject({ url: "/" });

		expect(result.statusCode).toBe(200);
		expect(result.json()).toEqual({ date: expect.any(String) });
	});

	test("/metadata/1.0 should return metadata schema", async () => {
		const result = await app.inject({ url: "/metadata/1.0" }),
			schema = await import(resolve(import.meta.dirname, "../schemas/metadata/1.0.json"));

		expect(result.statusCode).toBe(200);
		expect(result.json()).toEqual(schema.default);
	});

	test("/metadata/1.0 should return cached metadata schema", async () => {
		const result = await app.inject({ url: "/metadata/1.0" }),
			schema = await import(resolve(import.meta.dirname, "../schemas/metadata/1.0.json"));

		expect(result.statusCode).toBe(200);
		expect(result.json()).toEqual(schema.default);
	});

	test("/metadata/1 should return 404", async () => {
		const result = await app.inject({ url: "/metadata/1" });

		expect(result.statusCode).toBe(404);
		expect(result.json()).toEqual({ error: "Schema not found." });
	});
});
