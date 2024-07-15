declare module "*.gql" {
	import type { DocumentNode } from "graphql";

	const Schema: DocumentNode;
	export = Schema;
}

declare module "*.graphql" {
	import type { DocumentNode } from "graphql";

	const Schema: DocumentNode;
	export = Schema;
}
