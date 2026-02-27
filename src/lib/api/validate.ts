import { NextRequest } from "next/server";
import { z } from "zod";

export async function parseBody<T extends z.ZodTypeAny>(
  request: NextRequest,
  schema: T,
): Promise<{ data: z.infer<T>; error: null } | { data: null; error: string }> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return { data: null, error: "요청 본문을 파싱할 수 없습니다." };
  }

  const result = schema.safeParse(body);

  if (!result.success) {
    const firstError = result.error.issues[0];
    const message = firstError
      ? `${firstError.path.join(".")}: ${firstError.message}`
      : "유효하지 않은 요청입니다.";
    return { data: null, error: message };
  }

  return { data: result.data, error: null };
}
