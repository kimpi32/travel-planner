import { getCurrentUser } from "./get-user";
import { err } from "@/lib/api/response";

/**
 * API 라우트에서 어드민 권한 확인.
 * 어드민이면 user 반환, 아니면 에러 Response 반환.
 */
export async function requireAdmin() {
  const user = await getCurrentUser();
  if (!user) {
    return { user: null, error: err("로그인이 필요합니다.", 401) };
  }
  if (user.role !== "admin") {
    return { user: null, error: err("관리자 권한이 필요합니다.", 403) };
  }
  return { user, error: null };
}
