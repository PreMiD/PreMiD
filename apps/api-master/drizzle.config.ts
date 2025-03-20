import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dbCredentials: {
		url: "postgresql://metrics:metrics@localhost:5432/metrics",
	},
	dialect: "postgresql",
	schema: "./src/db.ts",
	out: "./drizzle",
});
