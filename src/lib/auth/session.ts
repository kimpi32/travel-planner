import { cookies } from "next/headers";
import { COOKIE_NAME, verifyToken, type SessionPayload } from "./jwt";

/**
 * 서버 사이드에서 현재 세션을 읽는 함수
 * Server Components, Route Handlers, Server Actions에서 사용
 */
export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) return null;

  return verifyToken(token);
}
