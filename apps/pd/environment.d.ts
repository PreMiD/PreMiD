/* eslint-disable unicorn/prevent-abbreviations */
// env.d.ts
declare namespace NodeJS {
	export interface ProcessEnv {
		NODE_ENV?: "development" | "production";
		REDIS_URL?: string;
		PORT?: string;
		HOST?: string;
	}
}
