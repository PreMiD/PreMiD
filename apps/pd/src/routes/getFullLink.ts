import { RouteHandlerMethod } from "fastify";

import isInCIDRRange from "../functions/isInCidRange.js";
import googleCIDRs from "../googleCIDRs.js";
import keyv from "../keyv.js";

const handler: RouteHandlerMethod = async (request, reply) => {
	/* c8 ignore next 1 */
	const ip = request.headers["cf-connecting-ip"]?.toString() || request.socket.remoteAddress || request.ip;

	if (
		!isInCIDRRange(
			googleCIDRs,
			ip,
		)
	)
		return reply.status(401).send("Not a Google Cloud IP");

	const id = (request.params as { "*": string })["*"].trim();

	if (id.split(".")[0]?.length !== 10) return reply.code(404).send("Invalid ID");

	const url = await keyv.get(id);
	if (!url) return reply.code(404).send("Unknown ID");

	await keyv.set(url, id, 1800);
	reply.header("Cache-control", "public, max-age=1800");

	//* If it is not a base64 string, redirect to it
	if (!url.startsWith("data:image")) return reply.redirect(url);

	const image = Buffer.from(
			url.replace(/^data:image\/\w+;base64,/, ""),
			"base64",
		),
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		mime = url.split(";")[0]!.split(":")[1]!;

	return reply.type(mime).send(image);
};

export default handler;
