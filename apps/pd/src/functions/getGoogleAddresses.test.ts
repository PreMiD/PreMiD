import got from "got";
import { describe, expect, it, vi } from "vitest";

describe.concurrent("getGoogleAddresses", () => {
	it("should return an array of CIDR objects", async () => {
		const { default: getGoogleAddresses } = await import("./getGoogleAddresses.js");

		vi.spyOn(got, "get").mockResolvedValue({
			body: JSON.stringify({
				prefixes: [
					{ ipv4Prefix: "0.0.0.0" },
					{ ipv6Prefix: "0000:0000:0000::/16" },
				],
			}),
		});

		const result = await getGoogleAddresses();

		expect(result).toMatchInlineSnapshot(`
			[
			  {
			    "ipv4Prefix": "0.0.0.0",
			  },
			  {
			    "ipv6Prefix": "0000:0000:0000::/16",
			  },
			]
		`);
	});
});
