"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Star, Search, X, Loader2, Users, Phone, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCreatePost, type CreatePostInput } from "@/hooks/use-posts";
import { searchItems } from "@/lib/search-index";
import { cn } from "@/lib/utils";
import type { PostType, BuddyMeta, TravelStyle, GenderPreference } from "@/types/community";
import { ImageUploader } from "./ImageUploader";

const POST_TYPES: { value: Exclude<PostType, "all">; label: string; desc: string }[] = [
  { value: "review", label: "여행 후기", desc: "다녀온 여행지의 생생한 이야기를 나눠보세요" },
  { value: "tip", label: "여행 팁", desc: "유용한 여행 정보와 노하우를 공유해보세요" },
  { value: "itinerary", label: "여행 일정", desc: "계획하거나 다녀온 여행 일정을 공유해보세요" },
  { value: "buddy", label: "동행 구함", desc: "함께 여행할 동행을 구해보세요" },
  { value: "question", label: "Q&A", desc: "여행에 대한 궁금한 점을 물어보세요" },
  { value: "general", label: "일반", desc: "여행과 관련된 자유로운 이야기를 나눠보세요" },
];

const TRAVEL_STYLE_OPTIONS: { value: TravelStyle; label: string; desc: string }[] = [
  { value: "budget", label: "알뜰", desc: "최대한 절약" },
  { value: "balanced", label: "균형", desc: "가성비 중시" },
  { value: "comfort", label: "편안", desc: "여유로운 여행" },
  { value: "luxury", label: "럭셔리", desc: "고급스럽게" },
];

const GENDER_PREF_OPTIONS: { value: GenderPreference; label: string }[] = [
  { value: "any", label: "무관" },
  { value: "same", label: "동성만" },
];

export function PostCreateForm() {
  const router = useRouter();
  const createMutation = useCreatePost();

  const [type, setType] = useState<Exclude<PostType, "all">>("review");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [destination, setDestination] = useState("");
  const [destinationQuery, setDestinationQuery] = useState("");
  const [destinationResults, setDestinationResults] = useState<ReturnType<typeof searchItems>>([]);
  const [showDestResults, setShowDestResults] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const destRef = useRef<HTMLDivElement>(null);

  // 동행 구하기 전용 필드
  const [buddyStartDate, setBuddyStartDate] = useState("");
  const [buddyEndDate, setBuddyEndDate] = useState("");
  const [buddyHeadcount, setBuddyHeadcount] = useState(1);
  const [buddyTravelStyle, setBuddyTravelStyle] = useState<TravelStyle>("balanced");
  const [buddyGenderPref, setBuddyGenderPref] = useState<GenderPreference>("any");
  const [buddyContact, setBuddyContact] = useState("");

  function handleDestinationSearch(q: string) {
    setDestinationQuery(q);
    if (q.length >= 1) {
      const results = searchItems(q).slice(0, 6);
      setDestinationResults(results);
      setShowDestResults(results.length > 0);
    } else {
      setDestinationResults([]);
      setShowDestResults(false);
    }
  }

  function selectDestination(name: string) {
    setDestination(name);
    setDestinationQuery(name);
    setShowDestResults(false);
  }

  function clearDestination() {
    setDestination("");
    setDestinationQuery("");
    setDestinationResults([]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    if (type === "buddy" && (!buddyStartDate || !buddyEndDate || !buddyContact.trim())) return;

    let finalBody = body.trim();
    if (type === "buddy") {
      const buddyMeta: BuddyMeta = {
        startDate: buddyStartDate,
        endDate: buddyEndDate,
        headcount: buddyHeadcount,
        travelStyle: buddyTravelStyle,
        genderPreference: buddyGenderPref,
        contact: buddyContact.trim(),
      };
      finalBody = JSON.stringify({ __buddy__: buddyMeta, text: body.trim() });
    }

    const data: CreatePostInput = {
      type,
      title: title.trim(),
      body: finalBody,
      authorId: "",
      ...(destination ? { destination } : {}),
      ...(type === "review" && rating > 0 ? { rating } : {}),
      ...(imageUrls.length > 0 ? { images: imageUrls } : {}),
    };

    await createMutation.mutateAsync(data);
    router.push("/community");
  }

  const isBuddyValid =
    type !== "buddy" ||
    (!!buddyStartDate && !!buddyEndDate && !!buddyContact.trim());

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">게시글 유형</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {POST_TYPES.map((pt) => (
              <button
                key={pt.value}
                type="button"
                onClick={() => setType(pt.value)}
                className={cn(
                  "text-left rounded-xl border p-3 transition-all",
                  type === pt.value
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "hover:border-muted-foreground/30"
                )}
              >
                <div className="font-semibold text-sm">{pt.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{pt.desc}</div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">제목 *</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              maxLength={100}
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">여행지</label>
            <div className="relative" ref={destRef}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                value={destinationQuery}
                onChange={(e) => handleDestinationSearch(e.target.value)}
                onFocus={() => destinationResults.length > 0 && setShowDestResults(true)}
                placeholder="도시 또는 국가 검색..."
                className="pl-9 pr-9"
              />
              {destinationQuery && (
                <button
                  type="button"
                  onClick={clearDestination}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
              {showDestResults && (
                <div className="absolute top-full left-0 right-0 mt-1 z-20 rounded-xl border bg-popover shadow-lg overflow-hidden">
                  {destinationResults.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => selectDestination(item.name)}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-accent flex items-center gap-2"
                    >
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-muted-foreground">{item.type}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {type === "review" && (
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">평점</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onMouseEnter={() => setHoverRating(n)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(n)}
                    className="p-0.5"
                  >
                    <Star
                      className={cn(
                        "h-6 w-6 transition-colors",
                        n <= (hoverRating || rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-muted-foreground"
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 동행 구하기 전용 필드 */}
          {type === "buddy" && (
            <div className="flex flex-col gap-4 rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50/50 dark:bg-violet-950/20 p-4">
              <p className="text-xs font-semibold text-violet-700 dark:text-violet-400 uppercase tracking-wide">
                동행 모집 정보
              </p>

              {/* 여행 날짜 */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  여행 날짜 *
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    type="date"
                    value={buddyStartDate}
                    onChange={(e) => setBuddyStartDate(e.target.value)}
                    className="flex-1"
                  />
                  <span className="text-muted-foreground text-sm shrink-0">~</span>
                  <Input
                    type="date"
                    value={buddyEndDate}
                    min={buddyStartDate}
                    onChange={(e) => setBuddyEndDate(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              {/* 모집 인원 */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" />
                  모집 인원
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setBuddyHeadcount(Math.max(1, buddyHeadcount - 1))}
                    className="h-8 w-8 rounded-full border flex items-center justify-center text-sm font-medium hover:bg-accent transition-colors"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold w-8 text-center">{buddyHeadcount}명</span>
                  <button
                    type="button"
                    onClick={() => setBuddyHeadcount(Math.min(20, buddyHeadcount + 1))}
                    className="h-8 w-8 rounded-full border flex items-center justify-center text-sm font-medium hover:bg-accent transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* 여행 스타일 */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">여행 스타일</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TRAVEL_STYLE_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setBuddyTravelStyle(opt.value)}
                      className={cn(
                        "rounded-lg border px-3 py-2 text-xs text-left transition-all",
                        buddyTravelStyle === opt.value
                          ? "border-violet-500 bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"
                          : "hover:border-muted-foreground/40"
                      )}
                    >
                      <div className="font-semibold">{opt.label}</div>
                      <div className="text-muted-foreground mt-0.5">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 성별 선호 */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">성별 선호</label>
                <div className="flex gap-2">
                  {GENDER_PREF_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setBuddyGenderPref(opt.value)}
                      className={cn(
                        "flex-1 rounded-lg border py-2 text-sm font-medium transition-all",
                        buddyGenderPref === opt.value
                          ? "border-violet-500 bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"
                          : "hover:border-muted-foreground/40"
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 연락 방법 */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5" />
                  연락 방법 *
                </label>
                <Input
                  value={buddyContact}
                  onChange={(e) => setBuddyContact(e.target.value)}
                  placeholder="카카오ID, 오픈채팅 링크, 인스타그램 등"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">
              {type === "buddy" ? "자기소개 및 동행 소개 *" : "내용 *"}
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder={
                type === "buddy"
                  ? "자기소개, 여행 계획, 원하는 동행 스타일 등을 자유롭게 작성해보세요..."
                  : "여행 이야기를 자유롭게 작성해보세요..."
              }
              rows={type === "buddy" ? 6 : 10}
              required
              className={cn(
                "w-full rounded-md border bg-background px-3 py-2 text-sm",
                "placeholder:text-muted-foreground resize-none",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">이미지 첨부</label>
            <ImageUploader
              images={imageUrls}
              onChange={setImageUrls}
              maxImages={10}
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              취소
            </Button>
            <Button
              type="submit"
              disabled={!title.trim() || !body.trim() || !isBuddyValid || createMutation.isPending}
            >
              {createMutation.isPending && (
                <Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" />
              )}
              게시하기
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
