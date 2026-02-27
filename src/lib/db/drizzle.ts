import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL!;

// Supabase 풀러 호환을 위해 prepare: false 설정
const client = postgres(connectionString, { prepare: false });

export const db = drizzle(client, { schema });
