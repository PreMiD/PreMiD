import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { useSentry } from "@envelop/sentry";
import { maxAliasesPlugin } from "@escape.tech/graphql-armor-max-aliases";
import { maxDepthPlugin } from "@escape.tech/graphql-armor-max-depth";
import { maxDirectivesPlugin } from "@escape.tech/graphql-armor-max-directives";
import { maxTokensPlugin } from "@escape.tech/graphql-armor-max-tokens";
import type { FastifyReply, FastifyRequest } from "fastify";
import fastify from "fastify";
import { createSchema, createYoga } from "graphql-yoga";

import { resolvers } from "../graphql/resolvers/v4/index.js";

export interface FastifyContext {
	request: FastifyRequest;
	reply: FastifyReply;
}

const __dirname = new URL(".", import.meta.url).pathname;

export default async function createServer() {
	const
		app = fastify({ logger: true });
	const yoga = createYoga<FastifyContext>({
		graphqlEndpoint: "/v4",
		logging: {
			/* c8 ignore next 4 */
			debug: (...arguments_) => { for (const argument of arguments_) app.log.debug(argument); },
			error: (...arguments_) => { for (const argument of arguments_) app.log.error(argument); },
			info: (...arguments_) => { for (const argument of arguments_) app.log.info(argument); },
			warn: (...arguments_) => { for (const argument of arguments_) app.log.warn(argument); },
		},
		plugins: [maxAliasesPlugin(), maxDepthPlugin(), maxDirectivesPlugin(), maxTokensPlugin(), useSentry()],
		schema: createSchema<FastifyContext>({ resolvers, typeDefs: await readFile(resolve(__dirname, "../generated/schema-v4.graphql"), "utf8") }),
	});

	app.route({
		handler: async (request, reply) => {
			const response = await yoga.handleNodeRequest(request, {
				reply,
				request,
			});
			for (const [key, value] of response.headers.entries())
				void reply.header(key, value);

			void reply.status(response.status);

			void reply.send(response.body);

			return reply;
		},
		method: ["GET", "POST", "OPTIONS"],
		url: "/v4",
	});

	return app;
}
