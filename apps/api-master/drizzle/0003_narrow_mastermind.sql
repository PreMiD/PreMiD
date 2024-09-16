ALTER TABLE "online_users_ip_data" ADD COLUMN "presences" jsonb DEFAULT '[]' NOT NULL;--> statement-breakpoint
ALTER TABLE "online_users_ip_data" DROP COLUMN IF EXISTS "name";