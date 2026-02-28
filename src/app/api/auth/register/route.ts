import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/drizzle";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { hashPassword } from "@/lib/auth/password";
import { signToken, COOKIE_NAME } from "@/lib/auth/jwt";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요.").max(50),
  email: z.string().email("올바른 이메일 형식이 아닙니다."),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다.").max(100),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "입력값이 올바르지 않습니다." },
        { status: 400 }
      );
    }

    const { name, email, password } = parsed.data;

    // 이메일 중복 확인
    const [existing] = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.email, email));

    if (existing) {
      return NextResponse.json(
        { error: "이미 가입된 이메일 주소입니다." },
        { status: 409 }
      );
    }

    // 비밀번호 해싱 + 유저 생성
    const passwordHash = await hashPassword(password);

    const insertResult = await db
      .insert(users)
      .values({ email, passwordHash, name })
      .$returningId();

    const userId = insertResult[0].id;

    // JWT 발급 + 쿠키 설정
    const token = await signToken({ userId, email });

    const response = NextResponse.json(
      { id: userId, email, name },
      { status: 201 }
    );

    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7일
    });

    return response;
  } catch (error) {
    console.error("[POST /api/auth/register]", error);
    return NextResponse.json(
      { error: "회원가입 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
