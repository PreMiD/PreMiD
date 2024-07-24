import type { Resolvers } from "../../../generated/graphql-v4.js";
import { Query } from "./Query/index.js";
import { Mutation } from "./Mutation/index.js";

export const resolvers: Resolvers = {
	Query,
	Mutation,
};
