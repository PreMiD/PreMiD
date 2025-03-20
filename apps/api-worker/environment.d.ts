declare namespace NodeJS {
	export interface ProcessEnv {
		NODE_ENV?: "development" | "production" | "test";
		DATABASE_URL?: string;
		SESSION_KEEP_ALIVE_INTERVAL?: string;
		HEARTBEATS?: "true" | "false";
	}
}
