import { createHash } from "node:crypto";

export function shortHash(...input: string[]) {
	return createHash("sha256").update(input.join("")).digest("hex").slice(0, 16);
}
