import addScience from "./addScience.js";
import heartbeat from "./heartbeat.js";
import type { MutationResolvers } from "../../../../generated/graphql-v5.js";

export const Mutation: MutationResolvers = {
	addScience,
	heartbeat,
};
