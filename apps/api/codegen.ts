import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	generates: {
		"dist/generated/schema-v4.graphql": {
			plugins: ["schema-ast"],
			schema: "src/graphql/schema/v4/**/*.gql",
		},
		"src/generated/graphql-v4.ts": {
			config: {
				scalars: {
					StringOrStringArray: "string | string[]",
				},
			},
			plugins: ["typescript", "typescript-resolvers"],
			schema: "src/graphql/schema/v4/**/*.gql",
		},
		"src/generated/schema-v4.graphql": {
			plugins: ["schema-ast"],
			schema: "src/graphql/schema/v4/**/*.gql",
		},
	},
	overwrite: true,
};

export default config;
