import { db } from "@/lib/db/drizzle";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { createClient } from "./supabase-server";

export async function getCurrentUser() {
  const supabase = await createClient();

  if (!supabase) return null;

  const {
    data: { user: authUser },
    error,
  } = await supabase.auth.getUser();

  if (error || !authUser) {
    return null;
  }

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.authId, authUser.id));

  return user ?? null;
}

export async function requireUser() {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  return user;
}
