import { NextResponse } from "next/server";

// Supabase Auth 제거 후 사용하지 않는 콜백
// 이전 링크가 남아있을 수 있으므로 홈으로 리다이렉트
export async function GET(request: Request) {
  const { origin } = new URL(request.url);
  return NextResponse.redirect(`${origin}/auth/login`);
}
