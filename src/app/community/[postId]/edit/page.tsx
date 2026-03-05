"use client";

import { use, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2, AlertCircle, Star, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePost } from "@/hooks/use-posts";
import { useAuth } from "@/hooks/use-auth";
import { searchItems } from "@/lib/search-index";
import { cn } from "@/lib/utils";
import type { PostType } from "@/types/community";

const POST_TYPE_LABELS: Record<Exclude<PostType, "all">, string> = {
  review: "여행 후기",
  tip: "여행 팁",
  itinerary: "여행 일정",
  buddy: "동행 구함",
  question: "Q&A",
  general: "일반",
};

function EditPageContent({ postId }: { postId: string }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { user, isLoading: authLoading } = useAuth();
  const { data: post, isLoading: postLoading, isError } = usePost(postId);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [destination, setDestination] = useState("");
  const [destinationQuery, setDestinationQuery] = useState("");
  const [destinationResults, setDestinationResults] = useState<ReturnType<typeof searchItems>>([]);
  const [showDestResults, setShowDestResults] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const destRef = useRef<HTMLDivElement>(null);

  // 인증 체크 - 미로그인 시 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !user) {
      router.replace(`/auth/login?redirect=/community/${postId}/edit`);
    }
  }, [user, authLoading, router, postId]);

  // 게시글 데이터로 폼 초기화
  useEffect(() => {
    if (post && !initialized) {
      setTitle(post.title);
      setBody(post.body);
      setDestination(post.destination ?? "");
      setDestinationQuery(post.destination ?? "");
      setRating(post.rating ?? 0);
      setInitialized(true);
    }
  }, [post, initialized]);

  // 작성자 확인 - 로딩이 완료된 후 본인이 아니면 상세 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !postLoading && user && post) {
      if (user.id !== post.authorId) {
        alert("본인의 게시글만 수정할 수 있습니다.");
        router.replace(`/community/${postId}`);
      }
    }
  }, [authLoading, postLoading, user, post, postId, router]);

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
    if (!title.trim() || !body.trim() || isSaving) return;

    setIsSaving(true);
    try {
      // API의 updatePostSchema는 content 필드명을 사용
      const res = await fetch(`/api/community/posts/${postId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          content: body.trim(),
          ...(destination ? { destination } : {}),
          ...(post?.type === "review" && rating > 0 ? { rating } : {}),
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        alert(err.error ?? "게시글 수정에 실패했습니다.");
        return;
      }

      // 캐시 무효화
      await queryClient.invalidateQueries({ queryKey: ["post", postId] });
      await queryClient.invalidateQueries({ queryKey: ["posts"] });

      router.push(`/community/${postId}`);
    } catch {
      alert("게시글 수정 중 오류가 발생했습니다.");
    } finally {
      setIsSaving(false);
    }
  }

  // 로딩 상태
  if (authLoading || postLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  // 에러 또는 게시글 없음
  if (isError || !post) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-muted-foreground">
        <AlertCircle className="h-10 w-10 opacity-30" />
        <p className="text-sm">게시글을 찾을 수 없습니다.</p>
        <Button variant="outline" size="sm" onClick={() => router.push("/community")}>
          목록으로 돌아가기
        </Button>
      </div>
    );
  }

  // 미인증 또는 권한 없음 (리다이렉트 대기 중)
  if (!user || user.id !== post.authorId) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">게시글 유형</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl border bg-muted/50 px-4 py-3">
            <span className="text-sm font-medium">
              {POST_TYPE_LABELS[post.type]}
            </span>
            <span className="text-xs text-muted-foreground ml-2">
              (게시글 유형은 변경할 수 없습니다)
            </span>
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

          {post.type === "review" && (
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
              disabled={!title.trim() || !body.trim() || isSaving}
            >
              {isSaving && (
                <Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" />
              )}
              수정하기
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}

export default function EditPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = use(params);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">게시글 수정</h1>
        <p className="text-muted-foreground text-sm mt-1">
          게시글 내용을 수정합니다
        </p>
      </div>
      <EditPageContent postId={postId} />
    </div>
  );
}
