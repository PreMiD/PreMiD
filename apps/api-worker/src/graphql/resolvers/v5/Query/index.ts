import type { QueryResolvers } from "../../../../generated/graphql-v5.js";
import presences from "./presences.js";

export const Query: QueryResolvers = {
	presences,
};
