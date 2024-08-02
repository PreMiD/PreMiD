import { type } from "arktype";
import type { MutationResolvers } from "../../../../generated/graphql-v5.js";
import { redis } from "../../../../functions/createServer.js";

const addScienceSchema = type({
	identifier: "uuid & format.lowercase",
	presences: "format.trim[]",
	platform: {
		arch: "format.trim", // ? "format.trim" is just a string that is trimmed
		os: "format.trim",
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
