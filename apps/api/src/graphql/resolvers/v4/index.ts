import { Resolvers } from "../../../generated/graphql-v4.js";
import presences from "./presences.js";

export const resolvers: Resolvers = {
	Query: {
		presences,
	},
};
