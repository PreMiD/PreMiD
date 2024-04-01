import { expect, test } from "vitest";

import isInCIDRRange from "./isInCidRange.js";

test("isInCIDRRange - IPv4 - in range", () => {
	const CIDRs = [{ ipv4Prefix: "192.0.2.0/24" }],
		ip = "192.0.2.123",
		result = isInCIDRRange(CIDRs, ip);
	expect(result).toBe(true);
});

test("isInCIDRRange - IPv4 - not in range", () => {
	const CIDRs = [{ ipv4Prefix: "192.0.2.0/24" }],
		ip = "192.0.3.123",
		result = isInCIDRRange(CIDRs, ip);
	expect(result).toBe(false);
});

test("isInCIDRRange - IPv6 - in range", () => {
	const CIDRs = [{ ipv6Prefix: "2001:db8::/32" }],
		ip = "2001:db8::1234",
		result = isInCIDRRange(CIDRs, ip);
	expect(result).toBe(true);
});

test("isInCIDRRange - IPv6 - not in range", () => {
	const CIDRs = [{ ipv6Prefix: "2001:db8::/32" }],
		ip = "2001:db9::1234",
		result = isInCIDRRange(CIDRs, ip);
	expect(result).toBe(false);
});
