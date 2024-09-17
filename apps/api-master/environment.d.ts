declare module "ip-location-api" {
	export function lookup(ip: string): Promise<{
		latitude: number;
		longitude: number;
		country: string;
	} | null>;

	export function updateDb(options: { fields?: string[]; dataDir?: string; tmpDataDir?: string; smallMemory?: boolean }): Promise<void>;
	export function reload(options: { fields?: string[]; dataDir?: string; tmpDataDir?: string; smallMemory?: boolean }): Promise<void>;
}

declare namespace NodeJS {
	export interface ProcessEnv {
		METRICS_DATABASE_URL?: string;
	}
}
