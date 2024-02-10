import { readFile } from "node:fs/promises";
import { RequestOptions } from "node:http";
import { AddressInfo } from "node:net";

import { afterAll, beforeAll, describe, it } from "vitest";

import { createServer } from "../functions/createServer.js";

describe.concurrent("createFromImage", async () => {
	const server = await createServer(),
		form = new FormData(),
		defaultRequestOptions: RequestOptions = {
			hostname: "localhost",
			method: "POST",
			path: "/create/image",
			protocol: "http:",
		};

	let url: string;

	beforeAll(async () => {
		url = await server.listen();
		defaultRequestOptions.port = (server.server.address() as AddressInfo).port;
	});

	afterAll(() => {
		server.close();
	});

	it("should return a 400 when request is not multipart", async ({ expect }) => {
		const result = await fetch(`${url}/create/image`, {
			method: "POST",
		});

		expect(result.status).toBe(400);
		expect(await result.text()).toMatchInlineSnapshot("\"Request is not multipart\"");
	});

	it("should return a 400 status code when no file is provided", async ({ expect }) => {
		const result = await fetch(`${url}/create/image`, {
			body: form,
			method: "POST",
		});

		expect(result.status).toBe(400);
		expect(await result.text()).toMatchInlineSnapshot("\"Invalid file\"");
	});
	it("should return a 400 status code when the file is invalid", async ({ expect }) => {
		form.set("file", Buffer.alloc(1024 * 1024 * 2));

		const result = await fetch(`${url}/create/image`, {
			body: form,
			method: "POST",
		});

		expect(result.status).toBe(400);
		expect(await result.text()).toMatchInlineSnapshot("\"Invalid file\"");
	});

	it("should return a 400 status code when the file is invalid", async ({ expect }) => {
		form.set("file", new Blob([new Uint8Array(1024 * 1024 * 2)]));

		const result = await fetch(`${url}/create/image`, {
			body: form,
			method: "POST",
		});

		expect(result.status).toBe(400);
		expect(await result.text()).toMatchInlineSnapshot("\"Invalid file\"");
	});

	it("should return a 400 status code when the file is not an image", async ({ expect }) => {
		form.set("file", new Blob([await readFile(new URL("../../fixtures/test.mp4", import.meta.url))]));

		const result = await fetch(`${url}/create/image`, {
			body: form,
			method: "POST",
		});

		expect(result.status).toBe(400);
		expect(await result.text()).toMatchInlineSnapshot("\"Only png, jpeg, jpg, gif and webp are supported\"");
	});

	it("should return a 200 status code when the file is valid", async ({ expect }) => {
		form.set("file", new Blob([await readFile(new URL("../../fixtures/1x1.png", import.meta.url))]));

		const result = await fetch(`${url}/create/image`, {
			body: form,
			method: "POST",
		});

		expect(result.status).toBe(200);
		expect(await result.text()).toStrictEqual(expect.any(String));
	});

	it("should return a 200 status code when the file is valid and the same file is uploaded again", async ({ expect }) => {
		form.set("file", new Blob([await readFile(new URL("../../fixtures/1x1.png", import.meta.url))]));

		const result = await fetch(`${url}/create/image`, {
			body: form,
			method: "POST",
		});

		expect(result.status).toBe(200);
		expect(await result.text()).toStrictEqual(expect.any(String));
	});
});
