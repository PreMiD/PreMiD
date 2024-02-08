import got from "got";

import { CIDR } from "./isInCidRange.js";

export default async function getCloudFlareAddr(): Promise<CIDR> {
	const [resv4, resv6] = await Promise.all([got.get("https://www.cloudflare.com/ips-v4"), got.get("https://www.cloudflare.com/ips-v6")]);

	return [...resv4.body.split("\n").map(r => ({ ipv4Prefix: r })), ...resv6.body.split("\n").map(r => ({ ipv6Prefix: r }))];
}
