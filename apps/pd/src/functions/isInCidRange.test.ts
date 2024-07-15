import { expect, it } from "vitest";

import isInCIDRRange from "./isInCidRange.js";

it("isInCIDRRange - IPv4 - in range", () => {
	const CIDRs = [{ ipv4Prefix: "192.0.2.0/24" }];
	const ip = "192.0.2.123";
	const result = isInCIDRRange(CIDRs, ip);
	expect(result).toBe(true);
});

it("isInCIDRRange - IPv4 - not in range", () => {
	const CIDRs = [{ ipv4Prefix: "192.0.2.0/24" }];
	const ip = "192.0.3.123";
	const result = isInCIDRRange(CIDRs, ip);
	expect(result).toBe(false);
});

it("isInCIDRRange - IPv6 - in range", () => {
	const CIDRs = [{ ipv6Prefix: "2001:db8::/32" }];
	const ip = "2001:db8::1234";
	const result = isInCIDRRange(CIDRs, ip);
	expect(result).toBe(true);
});

it("isInCIDRRange - IPv6 - not in range", () => {
	const CIDRs = [{ ipv6Prefix: "2001:db8::/32" }];
	const ip = "2001:db9::1234";
	const result = isInCIDRRange(CIDRs, ip);
	expect(result).toBe(false);
});
