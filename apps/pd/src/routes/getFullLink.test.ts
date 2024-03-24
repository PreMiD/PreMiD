import { readFile } from "node:fs/promises";

import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

import { createServer } from "../functions/createServer.js";
import * as isInCIDRRange from "../functions/isInCidRange.js";

describe("getFullLink", async () => {
	const server = await createServer();
	let url: string;

	beforeAll(async () => {
		url = await server.listen();
	});

	afterAll(async () => {
		await server.close();
	});

	it("should fail if not a Google Cloud IP", async () => {
		const result = await server.inject({
			headers: {
				"cf-connecting-ip": "",
			},
			url: "/1234567890",
		});

		expect(result.statusCode).toBe(401);
	});

	it("should fail if not a valid ID", async () => {
		vi.spyOn(isInCIDRRange, "default").mockReturnValueOnce(true);

		const result = await server.inject({
			headers: {
				"cf-connecting-ip": "",
			},
			url: "/123",
		});

		vi.spyOn(isInCIDRRange, "default").mockReturnValueOnce(true);
		const result2 = await server.inject({
			headers: {
				"cf-connecting-ip": "",
			},
			url: "/1234567890.",
		});

		expect(result.statusCode).toBe(404);
		expect(result2.statusCode).toBe(404);
	});

	it("should redirect to the correct URL", async () => {
		vi.spyOn(isInCIDRRange, "default").mockReturnValueOnce(true);

		const { body } = await server.inject({
			url: `/create/https://${"a".repeat(256)}`,
		});

		expect(body).toStrictEqual(expect.any(String));

		const result = await server.inject({
			headers: {
				"cf-connecting-ip": "",
			},
			url: body,
		});

		expect(result.statusCode).toBe(302);
		expect(result.headers.location).toBe(`https://${"a".repeat(256)}`);
	});

	it("should return the correct image", async () => {
		const imageBuffer = await readFile(new URL("../../fixtures/test.mp4", import.meta.url)),
			imageBase64 = `data:image/png;base64,${imageBuffer.toString("base64")}`,

			{ body } = await server.inject({
				headers: {
					"Content-Type": "text/plain",
				},
				method: "POST",
				payload: imageBase64,
				url: "/create/base64",
			});

		expect(body).toStrictEqual(expect.any(String));

		vi.spyOn(isInCIDRRange, "default").mockReturnValueOnce(true);

		const result = await fetch(`${url}${body}`, {
			headers: {
				"cf-connecting-ip": "",
			},
		});

		expect(result.status).toBe(200);
		expect(result.headers.get("content-type")).toBe("image/png");
		expect(Buffer.from(await result.arrayBuffer())).toStrictEqual(imageBuffer);
	});
});
