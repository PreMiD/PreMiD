import chalk from "chalk";
import { EventLogger } from "node-windows";
import { socket } from "..";

export default class LogManager {
	//@ts-ignore
	logger = new EventLogger("PreMiD");

	constructor() {
		process.on("uncaughtException", this.appError);
		process.on("unhandledRejection", this.appError);
	}

	info(message: string) {
		this.logger.info(message);
		console.log(chalk.blue(message));
	}

	warning(message: string) {
		this.logger.warning(message);
		console.log(chalk.yellow(message));
	}

	error(message: string) {
		this.logger.error(message);
		console.log(chalk.red(message));
	}

	private appError(err: any) {
		if (socket?.connected) socket.emit("appError", err);
		console.error(err);
	}
}
