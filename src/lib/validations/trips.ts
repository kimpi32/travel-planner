import { z } from "zod";

export const createTripSchema = z.object({
  title: z.string().min(1, "여행 제목을 입력해주세요.").max(100, "제목은 100자 이내로 입력해주세요."),
  description: z.string().max(500, "설명은 500자 이내로 입력해주세요.").optional(),
  destination: z.string().min(1, "목적지를 입력해주세요."),
  startDate: z.string().refine((val) => !isNaN(Date.parse(val)), "올바른 날짜 형식을 입력해주세요."),
  endDate: z.string().refine((val) => !isNaN(Date.parse(val)), "올바른 날짜 형식을 입력해주세요."),
  coverImage: z.string().url("올바른 이미지 URL을 입력해주세요.").optional(),
  isPublic: z.boolean().default(false),
});

export const updateTripSchema = createTripSchema.partial();

export const createTripItemSchema = z.object({
  tripId: z.string().uuid("올바른 여행 ID를 입력해주세요."),
  day: z.number().int().min(1, "일차는 1 이상이어야 합니다."),
  order: z.number().int().min(0, "순서는 0 이상이어야 합니다.").default(0),
  type: z.enum(
    ["place", "accommodation", "restaurant", "transport", "activity", "note"] as const,
  ),
  title: z.string().min(1, "항목 제목을 입력해주세요.").max(200),
  description: z.string().max(500).optional(),
  placeId: z.string().optional(),
  address: z.string().optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  duration: z.number().int().min(0).optional(),
  cost: z.number().min(0).optional(),
  currency: z.string().length(3, "통화 코드는 3자리여야 합니다.").default("KRW"),
  notes: z.string().max(500).optional(),
  imageUrl: z.string().url().optional(),
});

export type CreateTripInput = z.infer<typeof createTripSchema>;
export type UpdateTripInput = z.infer<typeof updateTripSchema>;
export type CreateTripItemInput = z.infer<typeof createTripItemSchema>;
