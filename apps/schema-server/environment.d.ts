declare namespace NodeJS {
	export interface ProcessEnv {
		NODE_ENV?: "development" | "production" | "test";
		PORT?: string;
		HOST?: string;
	}
}
