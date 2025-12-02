import { describe, expect, it } from "vitest";

import { createServer } from "../functions/createServer.js";

describe.concurrent("/create", async () => {
	const server = await createServer();

	it("should return a 400 status code when no URL is provided", async () => {
		const result = await server.inject({
			method: "GET",
			url: "/create/",
		});

		expect(result.statusCode).toBe(400);
		expect(result.body).toMatchInlineSnapshot("\"Invalid URL\"");
	});

	it("should return a 400 status code when the URL is too short", async () => {
		const result = await server.inject({
			method: "GET",
			url: "/create/https://www.google.com",
		});
		expect(result.statusCode).toBe(400);
		expect(result.body).toMatchInlineSnapshot("\"URL is too short\"");
	});

	it("should return a 400 status code when the URL is invalid", async () => {
		const result = await server.inject({
			method: "GET",
			url: `/create/file://www.googl${"e".repeat(256)}`,
		});

		expect(result.statusCode).toBe(400);
		expect(result.body).toMatchInlineSnapshot("\"Invalid URL\"");
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
		const { body } = result;
		const result2 = await server.inject({
			method: "GET",
			url: `/create/https://www.googl${"d".repeat(256)}.com`,
		});

		expect(result2.statusCode).toBe(200);
		expect(result2.body).toStrictEqual(body);
	});

	it("should preserve file extension when URL has a valid image extension", async () => {
		const result = await server.inject({
			method: "GET",
			url: `/create/https://www.exampl${"e".repeat(256)}.com/image.png`,
		});

		expect(result.statusCode).toBe(200);
		expect(result.body).toStrictEqual(expect.any(String));
		expect(result.body).toMatch(/\.png$/);
	});

	it("should preserve file extension when URL has .jpg extension", async () => {
		const result = await server.inject({
			method: "GET",
			url: `/create/https://www.exampl${"e".repeat(256)}.com/photo.jpg`,
		});

		expect(result.statusCode).toBe(200);
		expect(result.body).toStrictEqual(expect.any(String));
		expect(result.body).toMatch(/\.jpg$/);
	});

	it("should preserve file extension when URL has .webp extension", async () => {
		const result = await server.inject({
			method: "GET",
			url: `/create/https://www.exampl${"e".repeat(256)}.com/image.webp`,
		});

		expect(result.statusCode).toBe(200);
		expect(result.body).toStrictEqual(expect.any(String));
		expect(result.body).toMatch(/\.webp$/);
	});

	it("should preserve file extension when URL has .png with query parameters", async () => {
		const result = await server.inject({
			method: "GET",
			url: `/create/https://www.exampl${"e".repeat(256)}.com/image.png?ref=example`,
		});

		expect(result.statusCode).toBe(200);
		expect(result.body).toStrictEqual(expect.any(String));
		expect(result.body).toMatch(/\.png$/);
	});

	it("should preserve file extension when URL has .gif with complex query parameters", async () => {
		const result = await server.inject({
			method: "GET",
			url: `/create/https://www.exampl${"e".repeat(256)}.com/animated.gif?size=large&quality=high`,
		});

		expect(result.statusCode).toBe(200);
		expect(result.body).toStrictEqual(expect.any(String));
		expect(result.body).toMatch(/\.gif$/);
	});

	it("should not preserve file extension when URL has invalid extension", async () => {
		const result = await server.inject({
			method: "GET",
			url: `/create/https://www.exampl${"e".repeat(256)}.com/document.pdf`,
		});

		expect(result.statusCode).toBe(200);
		expect(result.body).toStrictEqual(expect.any(String));
		expect(result.body).not.toMatch(/\.pdf$/);
	});

	it("should work normally when URL has no file extension", async () => {
		const result = await server.inject({
			method: "GET",
			url: `/create/https://www.exampl${"e".repeat(256)}.com/page`,
		});

		expect(result.statusCode).toBe(200);
		expect(result.body).toStrictEqual(expect.any(String));
		expect(result.body).not.toMatch(/\.\w+$/);
	});

	it("should handle case-insensitive extensions", async () => {
		const result = await server.inject({
			method: "GET",
			url: `/create/https://www.exampl${"e".repeat(256)}.com/image.PNG`,
		});

		expect(result.statusCode).toBe(200);
		expect(result.body).toStrictEqual(expect.any(String));
		expect(result.body).toMatch(/\.png$/); //* Should be lowercase in result
	});
});
