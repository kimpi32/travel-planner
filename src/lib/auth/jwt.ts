import { SignJWT, jwtVerify, type JWTPayload } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? "travel-app-secret-key-change-in-production-2026"
);

const COOKIE_NAME = "travel-session";
const EXPIRES_IN = "7d";

export interface SessionPayload extends JWTPayload {
  userId: string;
  email: string;
}

export async function signToken(payload: { userId: string; email: string }): Promise<string> {
  return new SignJWT({ userId: payload.userId, email: payload.email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(EXPIRES_IN)
    .sign(JWT_SECRET);
}

export async function verifyToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as SessionPayload;
  } catch {
    return null;
  }
}

export { COOKIE_NAME };
