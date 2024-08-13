import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const connectionString = process.env.DATABASE_URL!;
if (connectionString) {
  console.log("can not found database url");
}

// Disable prefetch as it is not supported for "Transaction" pool mode
export const connection = postgres(connectionString);
export const db = drizzle(connection);
