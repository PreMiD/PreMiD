import { type } from "arktype";
import { redis } from "../../../../functions/createServer.js";
import type { MutationResolvers } from "../../../../generated/graphql-v5.js";

const addScienceSchema = type({
	identifier: "string.uuid & string.lower",
	presences: "string.trim[]",
	platform: {
		arch: "string.trim",
		os: "string.trim",
	},
});

const mutation: MutationResolvers["addScience"] = async (_parent, input) => {
	const out = addScienceSchema(input);

	if (out instanceof type.errors)
		throw new Error(out.summary);

	await redis.hset(
		"pmd-api.scienceUpdates",
		out.identifier,
		JSON.stringify(out),
	);

	return {
		__typename: "AddScienceResult",
		...out,
	};
};

export default mutation;
