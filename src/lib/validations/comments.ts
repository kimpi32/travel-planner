import { z } from "zod";

export const createCommentSchema = z.object({
  postId: z.string().uuid("올바른 게시글 ID를 입력해주세요."),
  content: z
    .string()
    .min(1, "댓글 내용을 입력해주세요.")
    .max(1000, "댓글은 1000자 이내로 입력해주세요."),
  parentId: z.string().uuid().optional(),
});

export type CreateCommentInput = z.infer<typeof createCommentSchema>;
