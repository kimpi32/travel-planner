import { NextResponse, type NextRequest } from "next/server";
import { verifyToken, COOKIE_NAME } from "@/lib/auth/jwt";

const PROTECTED_PATHS = [
  "/planner",
  "/profile",
  "/community/write",
  "/admin",
  "/api/admin",
  "/api/trips",
  "/api/community/posts",
  "/api/community/profiles",
  "/api/community/reports",
];

const ADMIN_PATHS = ["/admin", "/api/admin"];

// API 경로 중 GET은 비인증 허용, POST/PUT/PATCH/DELETE만 인증 필요
const API_GET_ALLOWED = [
  "/api/community/posts",
];

function isProtectedPath(pathname: string, method: string): boolean {
  // API GET 요청은 일부 허용
  if (method === "GET" && API_GET_ALLOWED.some((p) => pathname.startsWith(p))) {
    return false;
  }
  return PROTECTED_PATHS.some((path) => pathname.startsWith(path));
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const method = request.method;

  // 보호된 경로가 아니면 패스
  if (!isProtectedPath(pathname, method)) {
    return NextResponse.next();
  }

  // JWT 토큰 검증
  const token = request.cookies.get(COOKIE_NAME)?.value;

  if (!token) {
    // API 요청이면 401 응답
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
    }
    // 페이지 요청이면 로그인으로 리다이렉트
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  const payload = await verifyToken(token);
  if (!payload) {
    // 유효하지 않은 토큰 → 쿠키 삭제 후 리다이렉트
    if (pathname.startsWith("/api/")) {
      const res = NextResponse.json({ error: "세션이 만료되었습니다." }, { status: 401 });
      res.cookies.set(COOKIE_NAME, "", { path: "/", maxAge: 0 });
      return res;
    }
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    const res = NextResponse.redirect(loginUrl);
    res.cookies.set(COOKIE_NAME, "", { path: "/", maxAge: 0 });
    return res;
  }

  // 어드민 경로 접근 시 role 체크
  const isAdminPath = ADMIN_PATHS.some((p) => pathname.startsWith(p));
  if (isAdminPath && payload.role !== "admin") {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "관리자 권한이 필요합니다." }, { status: 403 });
    }
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|otf)$).*)",
  ],
};
