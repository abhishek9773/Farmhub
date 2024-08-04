CREATE TABLE IF NOT EXISTS "rentalPeriod" (
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
ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "addresses" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rentalPeriod" ADD CONSTRAINT "rentalPeriod_service_id_service_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."service"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rentalPeriod" ADD CONSTRAINT "rentalPeriod_renter_id_users_id_fk" FOREIGN KEY ("renter_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
