import process from "node:process";
import { defu } from "defu";

const disabledFlags = process.env.DISABLED_FEATURE_FLAGS?.split(",") ?? [];
const flags = Object.fromEntries(disabledFlags.map(flag => [flag, false]));

export const featureFlags = defu(flags, {
	WebSocketManager: true,
	SessionKeepAlive: true,
});
