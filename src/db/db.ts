import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const queryString = process.env.DATABASE_URL!;
export const connection = postgres(queryString);

export const db = drizzle(connection);
