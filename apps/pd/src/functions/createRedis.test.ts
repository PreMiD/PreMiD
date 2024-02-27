// FILEPATH: /Users/florian/Developer/PreMiD/PreMiD/apps/pd/src/functions/createRedis.test.ts
import { hostname } from "node:os";

import { Redis } from "ioredis";
import { describe, expect, Mocked, test, vi } from "vitest";

import createRedis from "./createRedis.js";

vi.mock("ioredis", () => {
	return {
		Redis: vi.fn().mockImplementation(() => {
			return {
				on: vi.fn(),
			};
		}),
	};
});

describe("createRedis", () => {
	vi.resetModules();
	const mockRedis = new Redis() as Mocked<Redis>;
	vi.mocked(Redis).mockImplementation(() => mockRedis as Redis);

	test("should create a new Redis instance with correct parameters", () => {
		createRedis();
		expect(Redis).toHaveBeenCalledWith({
			host: process.env.REDIS_URL,
			name: `pd-${hostname()}`,
		});
	});

	test("should set up error and connect event handlers", () => {
		createRedis();
		expect(mockRedis.on).toHaveBeenCalledWith("error", expect.any(Function));
		expect(mockRedis.on).toHaveBeenCalledWith("connect", expect.any(Function));
	});
});
