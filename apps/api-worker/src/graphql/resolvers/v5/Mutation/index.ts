import type { MutationResolvers } from "../../../../generated/graphql-v5.js";
import addScience from "./addScience.js";
import heartbeat from "./heartbeat.js";

export const Mutation: MutationResolvers = {
	addScience,
	heartbeat,
};
