DO $$ BEGIN
 CREATE TYPE "public"."notificationType" AS ENUM('rental', 'transaction', 'review', 'system');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
