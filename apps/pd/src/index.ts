import { createServer } from "./functions/createServer.js";

if (!process.env.REDIS_URL) console.log("WARNING: No REDIS_URL environment variable set");

export const server = await createServer();

const url = await server.listen({
	host: process.env.HOST ?? "0.0.0.0",
	port: Number.parseInt(process.env.PORT ?? "80"),
});

console.log(`Server listening at ${url}`);
