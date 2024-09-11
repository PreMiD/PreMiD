import { Mutation } from "./Mutation/index.js";
import { Query } from "./Query/index.js";
import type { Resolvers } from "../../../generated/graphql-v5.js";

export const resolvers: Resolvers = {
	Query,
	Mutation,
};
