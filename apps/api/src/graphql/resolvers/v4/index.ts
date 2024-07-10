import { Resolvers } from "../../../generated/graphql-v4.js";
import sendFeedback from "./feedback.js";
import presences from "./presences.js";

export const resolvers: Resolvers = {
	Mutation: {
		sendFeedback,
	},
	Query: {
		presences,
	},
};
