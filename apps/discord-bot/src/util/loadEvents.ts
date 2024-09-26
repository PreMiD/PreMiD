import { resolve } from "node:path";
import { glob } from "glob";

export default async function loadEvents() {
	for (const file of await glob("*.js", { cwd: resolve(import.meta.dirname, "../events") })) {
		import(`../events/${file}`);
	}
}
