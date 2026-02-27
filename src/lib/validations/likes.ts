import { z } from "zod";

export const toggleLikeSchema = z.object({
  targetType: z.enum(["post", "comment"] as const, {
    error: "올바른 좋아요 대상 유형을 선택해주세요.",
  }),
  targetId: z.string().uuid("올바른 대상 ID를 입력해주세요."),
});

export type ToggleLikeInput = z.infer<typeof toggleLikeSchema>;
