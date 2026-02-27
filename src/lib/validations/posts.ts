import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string().min(1, "제목을 입력해주세요.").max(200, "제목은 200자 이내로 입력해주세요."),
  content: z.string().min(1, "내용을 입력해주세요.").max(10000, "내용은 10000자 이내로 입력해주세요."),
  category: z.enum(["review", "tip", "question", "share"] as const, {
    error: "올바른 카테고리를 선택해주세요.",
  }),
  tags: z.array(z.string().max(30)).max(10, "태그는 최대 10개까지 입력할 수 있습니다.").default([]),
  thumbnail: z.string().url("올바른 이미지 URL을 입력해주세요.").optional(),
  destination: z.string().optional(),
  tripId: z.string().uuid().optional(),
  isPublic: z.boolean().default(true),
});

export const updatePostSchema = createPostSchema.partial();

export type CreatePostInput = z.infer<typeof createPostSchema>;
export type UpdatePostInput = z.infer<typeof updatePostSchema>;
