import { Presence } from "@premid/db";
import type { PresenceSchema } from "@premid/db/Presence.js";
import { parseResolveInfo } from "graphql-parse-resolve-info";
import type { FilterQuery } from "mongoose";

import type { QueryResolvers } from "../../../../generated/graphql-v5.js";

const resolver: QueryResolvers["presences"] = async (
	_parent,
	{ author, contributor, limit, query, service, start, tag },
	_context,
	info,
) => {
	const authorFilter: FilterQuery<PresenceSchema> = author
		? { "metadata.author.name": author }
		: {};
	const contributorFilter: FilterQuery<PresenceSchema> = contributor
		? { "metadata.contributors.name": contributor }
		: {};
	const serviceFilter: FilterQuery<PresenceSchema> = service
		? Array.isArray(service)
			? { "metadata.service": { $in: service } }
			: { "metadata.service": service }
		: {};
	const queryFilter: FilterQuery<PresenceSchema> = query
		? { "metadata.service": { $options: "i", $regex: query } }
		: {};
	const tagFilter: FilterQuery<PresenceSchema> = tag
		? { "metadata.tags": tag }
		: {};

	const presences = await Presence.find(
		{
			...authorFilter,
			...contributorFilter,
			...serviceFilter,
			...queryFilter,
			...tagFilter,
		},
		Object.assign(
			{},
			...Object.keys(parseResolveInfo(info)!.fieldsByTypeName.Presence!).map(
				fieldName => ({ [fieldName]: true }),
			),
		) as Record<string, boolean>,
		{ ...(limit ? { limit } : {}), ...(start ? { skip: start } : {}) },
	);

	return presences.map(presence => ({
		iframeJs: presence.iframeJs,
		metadata: presence.metadata,
		presenceJs: presence.presenceJs,
		url: presence.url,
		users: 0,
	}));
};

export default resolver;
