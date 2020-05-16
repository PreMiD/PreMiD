import { join } from "path";
import { Service } from "node-windows";

const service = new Service({
	name: "PreMiD",
	description: "Your Rich Presence for everything.",
	script: join(__dirname, "master.js")
});

service.exists ? service.uninstall() : service.install();

service.on("install", service.start);
service.on("uninstall", service.install);
