import http from "node:http";
import { mainLog } from "../index.js";
import { register } from "../tracing.js";

export function setupServer() {
	const server = http.createServer(async (req, res) => {
		//* Basic routing logic
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end(await register.metrics());
	});

	server.listen(9464, () => {
		mainLog("Server running");
	});

	return server;
}
