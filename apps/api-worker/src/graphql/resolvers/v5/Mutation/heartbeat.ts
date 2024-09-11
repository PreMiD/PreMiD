import { type } from "arktype";
import type { MutationResolvers } from "../../../../generated/graphql-v5.js";

const heartbeatSchema = type({
	identifier: "string.uuid & string.lower",
	presences: {
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
