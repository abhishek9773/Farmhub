import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const queryString = process.env.DATABASE_URL!;
console.log(queryString);
export const connection = postgres(queryString);

export const db = drizzle(connection);
