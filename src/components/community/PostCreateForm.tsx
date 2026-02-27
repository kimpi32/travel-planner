"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Star, Search, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCreatePost, type CreatePostInput } from "@/hooks/use-posts";
import { searchItems } from "@/lib/search-index";
import { cn } from "@/lib/utils";
import type { PostType } from "@/types/community";

const POST_TYPES: { value: Exclude<PostType, "all">; label: string; desc: string }[] = [
  { value: "review", label: "여행 후기", desc: "다녀온 여행지의 생생한 이야기를 나눠보세요" },
  { value: "tip", label: "여행 팁", desc: "유용한 여행 정보와 노하우를 공유해보세요" },
  { value: "qna", label: "Q&A", desc: "여행에 대한 궁금한 점을 물어보세요" },
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
  const destRef = useRef<HTMLDivElement>(null);

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

    const data: CreatePostInput = {
      type,
      title: title.trim(),
      body: body.trim(),
      authorId: "",
      ...(destination ? { destination } : {}),
      ...(type === "review" && rating > 0 ? { rating } : {}),
    };

    await createMutation.mutateAsync(data);
    router.push("/community");
  }

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

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">내용 *</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="여행 이야기를 자유롭게 작성해보세요..."
              rows={10}
              required
              className={cn(
                "w-full rounded-md border bg-background px-3 py-2 text-sm",
                "placeholder:text-muted-foreground resize-none",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
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
              disabled={!title.trim() || !body.trim() || createMutation.isPending}
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
