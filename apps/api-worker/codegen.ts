import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	generates: {
		"dist/generated/schema-v5.graphql": {
			plugins: ["schema-ast"],
			schema: "src/graphql/schema/v5/**/*.gql",
		},
		"src/generated/graphql-v5.ts": {
			config: {
				scalars: {
					StringOrStringArray: "string | string[]",
				},
			},
			plugins: ["typescript", "typescript-resolvers"],
			schema: "src/graphql/schema/v5/**/*.gql",
		},
		"src/generated/schema-v5.graphql": {
			plugins: ["schema-ast"],
			schema: "src/graphql/schema/v5/**/*.gql",
		},
	},
	overwrite: true,
};

export default config;
