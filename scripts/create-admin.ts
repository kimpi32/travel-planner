/**
 * 어드민 계정 생성 스크립트
 *
 * 사용법:
 *   npx tsx scripts/create-admin.ts <email> <password> <name>
 *
 * 예시:
 *   npx tsx scripts/create-admin.ts admin@travel.com admin1234 관리자
 */

import { db } from "../src/lib/db/drizzle";
import { users } from "../src/lib/db/schema";
import { eq } from "drizzle-orm";
import { hashPassword } from "../src/lib/auth/password";

async function main() {
  const [, , email, password, name] = process.argv;

  if (!email || !password || !name) {
    console.error("사용법: npx tsx scripts/create-admin.ts <email> <password> <name>");
    process.exit(1);
  }

  if (password.length < 8) {
    console.error("비밀번호는 8자 이상이어야 합니다.");
    process.exit(1);
  }

  // 기존 유저 확인
  const [existing] = await db
    .select({ id: users.id, role: users.role })
    .from(users)
    .where(eq(users.email, email));

  if (existing) {
    if (existing.role === "admin") {
      console.log(`이미 어드민 계정입니다: ${email}`);
      process.exit(0);
    }
    // 기존 유저를 어드민으로 승격
    await db
      .update(users)
      .set({ role: "admin", updatedAt: new Date() })
      .where(eq(users.id, existing.id));
    console.log(`기존 유저를 어드민으로 승격했습니다: ${email}`);
    process.exit(0);
  }

  // 새 어드민 생성
  const passwordHash = await hashPassword(password);
  await db.insert(users).values({
    email,
    passwordHash,
    name,
    role: "admin",
  });

  console.log(`어드민 계정이 생성되었습니다: ${email}`);
  process.exit(0);
}

main().catch((err) => {
  console.error("오류:", err);
  process.exit(1);
});
