import { Presence } from "@premid/db";
import { PresenceSchema } from "@premid/db/Presence.js";
import { parseResolveInfo } from "graphql-parse-resolve-info";
import { FilterQuery } from "mongoose";

import { QueryResolvers } from "../../../generated/graphql-v4.js";

const resolver: QueryResolvers["presences"] = async (_parent, { author, contributor, limit, query, service, start, tag }, _context, info) => {
	const authorFilter: FilterQuery<PresenceSchema> = author ? { "metadata.author.name": author } : {},
		contributorFilter: FilterQuery<PresenceSchema> = contributor ? { "metadata.contributors.name": contributor } : {},
		serviceFilter: FilterQuery<PresenceSchema> = service ? (Array.isArray(service) ? { "metadata.service": { $in: service } } : { "metadata.service": service }) : {},
		queryFilter: FilterQuery<PresenceSchema> = query ? { "metadata.service": { $options: "i", $regex: query } } : {},
		tagFilter: FilterQuery<PresenceSchema> = tag ? { "metadata.tags": tag } : {},

		presences = await Presence.find({
			...authorFilter,
			...contributorFilter,
			...serviceFilter,
			...queryFilter,
			...tagFilter,
		}, Object.assign({}, ...Object.keys(parseResolveInfo(info)!.fieldsByTypeName.Presence!).map(fieldName => ({ [fieldName]: true }))) as Record<string, boolean>, { ...(limit ? { limit } : {}), ...(start ? { skip: start } : {}) });

	return presences.map(presence => ({
		iframeJs: presence.iframeJs,
		metadata: presence.metadata,
		presenceJs: presence.presenceJs,
		url: presence.url,
		users: 0,
	}));
};

export default resolver;
