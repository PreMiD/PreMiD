import { join } from "path";
import { Service } from "node-windows";

const service = new Service({
	name: "PreMiD",
	script: join(__dirname, "master.js")
});

if (service.exists) service.uninstall();
