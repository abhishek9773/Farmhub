DO $$ BEGIN
 CREATE TYPE "public"."payment_method" AS ENUM('credit_card', 'paypal', 'crypto');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('pending', 'completed', 'canceled');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "rentalPeriods" (
	"id" uuid PRIMARY KEY NOT NULL,
	"service_id" uuid,
	"renter_id" uuid,
	"start_date" timestamp with time zone DEFAULT now(),
	"end_date" timestamp with time zone DEFAULT now(),
	"extended" boolean DEFAULT false,
	"extension_requested" boolean DEFAULT false,
	"extension_approved" boolean DEFAULT false,
	"extension_approved_by" boolean DEFAULT false,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "transaction" (
	"id" uuid PRIMARY KEY NOT NULL,
	"rental_period_id" uuid NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"status" "status",
	"transation_date" timestamp DEFAULT now(),
	"payment_method" "payment_method",
	"created_at" timestamp with time zone,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
DROP TABLE "rentalPeriod";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rentalPeriods" ADD CONSTRAINT "rentalPeriods_service_id_service_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."service"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rentalPeriods" ADD CONSTRAINT "rentalPeriods_renter_id_users_id_fk" FOREIGN KEY ("renter_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transaction" ADD CONSTRAINT "transaction_rental_period_id_rentalPeriods_id_fk" FOREIGN KEY ("rental_period_id") REFERENCES "public"."rentalPeriods"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
