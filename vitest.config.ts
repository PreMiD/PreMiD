import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		coverage: {
			all: true,
			enabled: true,
			exclude: [...configDefaults.coverage.exclude ?? [], "commitlint.config.cjs", "**/generated/**", "**/codegen.ts", "**/lib/**"],
			reportOnFailure: true,
			skipFull: true,
		},
		isolate: false,
		passWithNoTests: true,
		// https://vitest.dev/guide/common-errors#failed-to-terminate-worker
		pool: "forks",
	},
});
