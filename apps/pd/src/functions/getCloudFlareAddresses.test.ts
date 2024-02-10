import got from "got";
import { describe, expect, it, vi } from "vitest";

describe.concurrent("getCloudFlareAddresses", async () => {
	it("should return an array of CIDR objects", async () => {
		const { default: getCloudFlareAddr } = await import("../functions/getCloudFlareAddresses.js");

		vi.spyOn(got, "get").mockResolvedValue({
			body: "0.0.0.0\n0.0.0.0",
		});

		const result = await getCloudFlareAddr();

		expect(result).toMatchInlineSnapshot(`
			[
			  {
			    "ipv4Prefix": "0.0.0.0",
			  },
			  {
			    "ipv4Prefix": "0.0.0.0",
			  },
			  {
			    "ipv6Prefix": "0.0.0.0",
			  },
			  {
			    "ipv6Prefix": "0.0.0.0",
			  },
			]
		`);
	});
});
