import type { Resolvers } from "../../../generated/graphql-v5.js";
import { Mutation } from "./Mutation/index.js";
import { Query } from "./Query/index.js";

export const resolvers: Resolvers = {
	Query,
	Mutation,
};
