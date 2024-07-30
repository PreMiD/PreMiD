import { type } from "arktype";
import type { MutationResolvers } from "../../../../generated/graphql-v4.js";

const heartbeatSchema = type({
	identifier: "uuid & format.lowercase",
	presences: {
		service: "format.trim",
		version: "semver",
		language: "format.trim",
		since: "unixTimestamp",
	},
	extension: {
		"version": "semver",
		"language": "format.trim",
		"connected?": {
			app: "integer",
			discord: "boolean",
		},
	},
});

const mutation: MutationResolvers["heartbeat"] = async (_parent, input) => {
	const out = heartbeatSchema(input);

	if (out instanceof type.errors)
		throw new Error(out.summary);

	// ! Disabled for now
	/* await redis.setex(
		`pmd-api.heartbeatUpdates.${data.identifier}`,
		// 5 minutes
		300,
		JSON.stringify(data)
	); */

	return {
		__typename: "HeartbeatResult",
		...out,
	};
};

export default mutation;
