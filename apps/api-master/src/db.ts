import process from "node:process";
import { decimal, index, integer, jsonb, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// Define the schema
export const onlineUsersIpData = pgTable("online_users_ip_data", {
	uuid: uuid("uuid").primaryKey().defaultRandom(),
	ip: varchar("ip", { length: 45 }).notNull(),
	country: varchar("country", { length: 2 }).notNull(),
	latitude: decimal("latitude", { precision: 10, scale: 8 }).notNull(),
	longitude: decimal("longitude", { precision: 11, scale: 8 }).notNull(),
	sessions: integer("sessions").notNull().default(0),
	presences: jsonb("presences").notNull().default("[]").$type<string[]>(),
	timestamp: timestamp("timestamp", { withTimezone: true }).defaultNow(),
}, table => ({
	idxOnlineUsersUuid: index("idx_online_users_uuid").on(table.uuid),
	idxOnlineUsersTimestamp: index("idx_online_users_timestamp").on(table.timestamp),
}));

if (!process.env.METRICS_DATABASE_URL) {
	throw new Error("METRICS_DATABASE_URL is not set");
}

export const sql = postgres(process.env.METRICS_DATABASE_URL);

export const db = drizzle(sql);
