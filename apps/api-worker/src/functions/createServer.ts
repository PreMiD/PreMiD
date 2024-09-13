import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { useSentry } from "@envelop/sentry";
import { maxAliasesPlugin } from "@escape.tech/graphql-armor-max-aliases";
import { maxDepthPlugin } from "@escape.tech/graphql-armor-max-depth";
import { maxDirectivesPlugin } from "@escape.tech/graphql-armor-max-directives";
import { maxTokensPlugin } from "@escape.tech/graphql-armor-max-tokens";
import fastifyWebsocket from "@fastify/websocket";
import fastify from "fastify";

import { createSchema, createYoga } from "graphql-yoga";
import type { FastifyReply, FastifyRequest } from "fastify";
import { Socket } from "../classes/Socket.js";
import { resolvers } from "../graphql/resolvers/v5/index.js";
import { sessionKeepAlive } from "../routes/sessionKeepAlive.js";
import { featureFlags } from "../constants.js";
import createRedis from "./createRedis.js";

export interface FastifyContext {
	request: FastifyRequest;
	reply: FastifyReply;
}

const __dirname = new URL(".", import.meta.url).pathname;

export default async function createServer() {
	const app = fastify({ logger: true });
	const yoga = createYoga<FastifyContext>({
		graphqlEndpoint: "/v5/graphql",
		logging: {
			/* c8 ignore next 12 */
			debug: (...arguments_) => {
				for (const argument of arguments_) app.log.debug(argument);
			},
			error: (...arguments_) => {
				for (const argument of arguments_) app.log.error(argument);
			},
			info: (...arguments_) => {
				for (const argument of arguments_) app.log.info(argument);
			},
			warn: (...arguments_) => {
				for (const argument of arguments_) app.log.warn(argument);
			},
		},
		plugins: [
			maxAliasesPlugin(),
			maxDepthPlugin(),
			maxDirectivesPlugin(),
			maxTokensPlugin(),
			useSentry(),
		],
		schema: createSchema<FastifyContext>({
			resolvers,
			typeDefs: await readFile(
				resolve(__dirname, "../generated/schema-v5.graphql"),
				"utf8",
			),
		}),
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
		url: "/v5/graphql",
	});

	app.register(fastifyWebsocket);

	app.register(async (app) => {
		app.get("/v5/ws", { websocket: true }, (websocket, request) => {
			void new Socket(websocket, request);
		});
	});

	app.get("/v5/feature-flags", async (request, reply) => {
		void reply.send(featureFlags);
	});

	app.post("/v5/session-keep-alive", sessionKeepAlive);

	return app;
}

export const redis = createRedis();
