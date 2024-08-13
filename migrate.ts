import { connection, db } from "@/lib/db/db";
import "dotenv/config";
import { migrate } from "drizzle-orm/postgres-js/migrator";
(async () => {
  // This will run migrations on the database, skipping the ones already applied
  await migrate(db, { migrationsFolder: "./drizzle" });
  // Don't forget to close the connection, otherwise the script will hang
  await connection.end();
})();
