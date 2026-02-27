import { z } from "zod";

export const createBookmarkSchema = z.object({
  targetType: z.enum(["post", "trip", "place"] as const, {
    error: "올바른 북마크 대상 유형을 선택해주세요.",
  }),
  targetId: z.string().uuid("올바른 대상 ID를 입력해주세요."),
});

export type CreateBookmarkInput = z.infer<typeof createBookmarkSchema>;
