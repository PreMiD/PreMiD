import { describe, it } from "vitest";

import { createServer } from "../functions/createServer.js";

describe.concurrent("createFromBase64", async () => {
	const server = await createServer();

	it("should return a 400 when the body is not present", async ({ expect }) => {
		const result = await server.inject({
			method: "POST",
			url: "/create/base64",
		});

		expect(result.statusCode).toBe(400);
		expect(result.body).toMatchInlineSnapshot("\"Invalid body\"");
	});

	it("should return a 400 when the body is not a string", async ({ expect }) => {
		const result = await server.inject({
			method: "POST",
			payload: new Blob([]),
			url: "/create/base64",
		});

		expect(result.statusCode).toBe(400);
		expect(result.body).toMatchInlineSnapshot("\"Invalid body\"");
	});

	it("should return a 400 when the body is not a valid base64 string", async ({ expect }) => {
		const result = await server.inject({
			headers: {
				"Content-Type": "text/plain",
			},
			method: "POST",
			payload: "data:image/png;base64t",
			url: "/create/base64",
		});

		expect(result.statusCode).toBe(400);
		expect(result.body).toMatchInlineSnapshot("\"Invalid base64 string\"");
	});

	it("should return a 400 when the base64 string is not a valid image", async ({ expect }) => {
		const result = await server.inject({
			headers: {
				"Content-Type": "text/plain",
			},
			method: "POST",
			payload: "data:image/sv;base64,a",
			url: "/create/base64",
		});

		expect(result.statusCode).toBe(400);
		expect(result.body).toMatchInlineSnapshot("\"Invalid base64 string\"");

		const result2 = await server.inject({
			headers: {
				"Content-Type": "text/plain",
			},
			method: "POST",
			payload: "data:image/svg+xml;base64,s",
			url: "/create/base64",
		});

		expect(result2.statusCode).toBe(400);
		expect(result2.body).toMatchInlineSnapshot("\"Supported types: png, jpeg, jpg, gif, webp\"");
	});

	it("should return a 200 when the base64 string is valid", async ({ expect }) => {
		const result = await server.inject({
			headers: {
				"Content-Type": "text/plain",
			},
			method: "POST",
			payload: "data:image/png;base64,s",
			url: "/create/base64",
		});

		expect(result.statusCode).toBe(200);
		expect(result.body).toStrictEqual(expect.any(String));

		const result2 = await server.inject({
			headers: {
				"Content-Type": "text/plain",
			},
			method: "POST",
			payload: "data:image/png;base64,s",
			url: "/create/base64",
		});

		expect(result2.statusCode).toBe(200);
		expect(result2.body).toStrictEqual(expect.any(String));
	});
});
