import ipaddr from "ipaddr.js";

export default function isInCIDRRange(CIDRs: CIDR, ip: string) {
	const parsed = ipaddr.parse(ip);

	for (const CIDR of CIDRs.filter((c) => {
		if (parsed.kind() === "ipv4" && "ipv4Prefix" in c)
			return true;
		else if (parsed.kind() === "ipv6" && "ipv6Prefix" in c)
			return true;
		else return false;
	})) {
		const check = parsed.match(ipaddr.parseCIDR("ipv4Prefix" in CIDR ? CIDR.ipv4Prefix : CIDR.ipv6Prefix));

		if (check)
			return check;
	}

	return false;
}

export type CIDR = (
	| {
		ipv4Prefix: string;
	}
	| {
		ipv6Prefix: string;
	}
)[];
