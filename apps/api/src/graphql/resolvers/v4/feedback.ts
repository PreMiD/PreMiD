import { Feedback } from "@premid/db";

import { MutationResolvers } from "../../../generated/graphql-v4.js";

const resolver: MutationResolvers["sendFeedback"] = async (_parent, { input, type, discord, email }) => {
	try {
		await Feedback.create({
			discord,
			email,
			input,
			type,
		});

		return {
			success: true,
		};
	} catch {
		return {
			success: false,
		};
	}
};

export default resolver;
