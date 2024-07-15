declare namespace NodeJS {
	export interface ProcessEnv {
		NODE_ENV?: "development" | "production" | "test";
		REDIS_URL?: string;
		MAX_FILE_SIZE?: string;
		PORT?: string;
		HOST?: string;
		RATELIMIT_MAX?: string;
		RATELIMIT_WINDOW?: string;
		BASE_URL?: string;
	}
}
