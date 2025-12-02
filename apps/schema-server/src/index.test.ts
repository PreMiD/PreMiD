import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

import { app } from "./index.js";

describe("schemas", () => {
	it("/ should return date", async () => {
		const result = await app.inject({ url: "/" });

		expect(result.statusCode).toBe(200);
		expect(result.json()).toEqual({ date: expect.any(String) });
	});

	it("/metadata/1.0 should return metadata schema", async () => {
		const result = await app.inject({ url: "/metadata/1.0" });
		const schema = await import(resolve(import.meta.dirname, "../schemas/metadata/1.0.json")) as { default: Record<string, unknown> };

		expect(result.statusCode).toBe(200);
		expect(result.json()).toEqual(schema.default);
	});

	it("/metadata/1.0 should return cached metadata schema", async () => {
		const result = await app.inject({ url: "/metadata/1.0" });
		const schema = await import(resolve(import.meta.dirname, "../schemas/metadata/1.0.json")) as { default: Record<string, unknown> };

		expect(result.statusCode).toBe(200);
		expect(result.json()).toEqual(schema.default);
	});

	it("/metadata/1 should return 404", async () => {
		const result = await app.inject({ url: "/metadata/1" });

		expect(result.statusCode).toBe(404);
		expect(result.json()).toEqual({ error: "Schema not found." });
	});
});
