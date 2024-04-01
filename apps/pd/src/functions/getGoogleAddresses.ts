import got from "got";

import { CIDR } from "./isInCidRange.js";

export default async function getGoogleAddresses(): Promise<CIDR> {
	const { body } = await got.get("https://www.gstatic.com/ipranges/cloud.json"),
		result = JSON.parse(body) as GoogleResult;
	return result.prefixes.map(({ ipv4Prefix, ipv6Prefix }) => {
		return ipv6Prefix ? { ipv6Prefix } : { ipv4Prefix };
	});
}

interface GoogleResult {
	syncToken: string;
	creationTime: string;
	prefixes: GoogleIP[];
}

interface GoogleIP {
	ipv6Prefix: string;
	ipv4Prefix: string;
	service: string;
	scope: string;
}
