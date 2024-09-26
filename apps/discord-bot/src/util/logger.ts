import process from "node:process";
import { createLogger, format, transports } from "winston";

export const logger = createLogger({
	level: process.env.NODE_ENV === "production" ? (process.env.LOG_LEVEL || "info") : (process.env.LOG_LEVEL || "debug"),
	format: format.combine(
		format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
		format.errors({ stack: true }),
		format.splat(),
		format.json(),
	),
	transports: [
		new transports.Console({
			format: format.combine(
				format.colorize(),
				format.printf(({ timestamp, level, message, ...metadata }) => {
					let msg = `${timestamp} [${level}] : ${message}`;
					if (Object.keys(metadata).length > 0) {
						msg += `\n${JSON.stringify(metadata, null, 2)}`;
					}
					return msg;
				}),
			),
		}),
		new transports.File({
			filename: "error.log",
			level: "error",
			format: format.combine(
				format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
				format.json(),
			),
		}),
		new transports.File({
			filename: "combined.log",
			format: format.combine(
				format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
				format.json(),
			),
		}),
	],
});
