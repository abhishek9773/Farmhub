import "dotenv/config";
import { migrate } from "drizzle-orm/postgres-js/migrator";

import { db, connection } from "@/db/db";
(async () => {
  await migrate(db, { migrationsFolder: "./migrations" });
  await connection.end();
})();
