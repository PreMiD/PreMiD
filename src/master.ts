import { ChildProcess, fork } from "child_process";
import { join } from "path";

let child: ChildProcess;
spawnChild();

function spawnChild() {
	child = fork(join(__dirname, "index.js"));

	child.once("exit", spawnChild);
}

process.once("SIGTERM", () => {
	child.kill("SIGTERM");
	process.kill(process.pid, "SIGTERM");
});
