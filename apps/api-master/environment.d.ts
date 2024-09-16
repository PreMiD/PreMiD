declare module "ip-location-api" {
	export function lookup(ip: string): Promise<{
		latitude: number;
		longitude: number;
		country: string;
	} | null>;

	export function updateDb(options: { fields?: string[]; dataDir?: string; tmpDataDir?: string }): Promise<void>;
	export function reload(options: { fields?: string[]; dataDir?: string; tmpDataDir?: string }): Promise<void>;
}
