/* eslint-disable no-console */
import "@sentry/tracing";

import process from "node:process";
import Sentry from "@sentry/node";
import { connect } from "mongoose";

import createServer from "./functions/createServer.js";

// TODO SETUP SENTRY
Sentry.init({
	integrations: [new Sentry.Integrations.GraphQL(), new Sentry.Integrations.Mongo({ useMongoose: true })],
});

if (!process.env.DATABASE_URL)
	throw new Error("DATABASE_URL is not set");

await connect(process.env.DATABASE_URL, { appName: "PreMiD API" });

const server = await createServer();
const url = await server.listen({ port: 3001 });

console.log(`Server listening at ${url}`);
