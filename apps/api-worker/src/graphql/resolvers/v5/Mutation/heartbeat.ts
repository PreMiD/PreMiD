import { type } from "arktype";
import type { MutationResolvers } from "../../../../generated/graphql-v5.js";
import { redis } from "../../../../functions/createServer.js";

const heartbeatSchema = type({
	identifier: "string.uuid & string.lower",
	presence: {
		service: "string.trim",
		version: "string.semver",
		language: "string.trim",
		since: "number.epoch",
	},
	extension: {
		"version": "string.semver",
		"language": "string.trim",
		"connected?": {
			app: "number.integer",
			discord: "boolean",
		},
	},
});

const mutation: MutationResolvers["heartbeat"] = async (_parent, input) => {
	const out = heartbeatSchema(input);

	if (out instanceof type.errors)
		throw new Error(out.summary);

	// * Use Redis Hash with 'service' in the key to store heartbeat data
	const redisKey = `pmd-api.heartbeatUpdates.${out.identifier}.${out.presence.service}`;
	await redis.hset(redisKey, {
		service: out.presence.service,
		version: out.presence.version,
		language: out.presence.language,
		since: out.presence.since.toString(),
		extension_version: out.extension.version,
		extension_language: out.extension.language,
		extension_connected_app: out.extension.connected?.app?.toString() || "",
		extension_connected_discord: out.extension.connected?.discord?.toString() || "",
	});
	await redis.expire(redisKey, 5);

	// * End the custom metric or adjust as needed

	return {
		__typename: "HeartbeatResult",
		...out,
	};
};

export default mutation;
