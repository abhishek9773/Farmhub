import { db, connection, queryString } from "@/lib/db/db";
import { migrate } from "drizzle-orm/postgres-js/migrator";

(async () => {
  // console.log(queryString);
  // console.log();
  await migrate(db, { migrationsFolder: "./migrations" });
  await connection.end();
})();
