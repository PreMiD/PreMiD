CREATE TABLE IF NOT EXISTS "online_users_ip_data" (
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"ip" varchar(45) NOT NULL,
	"country" varchar(2) NOT NULL,
	"latitude" numeric(10, 8) NOT NULL,
	"longitude" numeric(11, 8) NOT NULL,
	"name" varchar(255),
	"timestamp" timestamp DEFAULT now()
);
