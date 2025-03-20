import http from "node:http";
import { mainLog } from "../index.js";
import { register } from "../tracing.js";

export function setupServer() {
	const server = http.createServer(async (req, res) => {
		//* If it's a head request, just return 200
		if (req.method === "HEAD")
			return res.writeHead(200).end();

		//* If it's a favicon request, just return 404
		if (req.url === "/favicon.ico")
			return res.writeHead(404).end();

		//* Basic routing logic
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end(await register.metrics());
	});

	server.listen(9464, () => {
		mainLog("Server running");
	});

	return server;
}
