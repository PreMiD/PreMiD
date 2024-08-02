import type { QueryResolvers } from "../../../../generated/graphql-v4.js";
import presences from "./presences.js";

export const Query: QueryResolvers = {
	presences,
};
