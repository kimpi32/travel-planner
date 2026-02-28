"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Trash2,
  Heart,
  MessageSquare,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface Post {
  id: string;
  title: string;
  authorName: string;
  type: string;
  likes: number;
  comments: number;
  createdAt: string;
}

interface PostsResponse {
  posts: Post[];
  total: number;
  page: number;
  limit: number;
}

const LIMIT = 20;

export default function AdminPostsPage() {
  const [data, setData] = useState<PostsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  // Delete dialog state
  const [deleteTarget, setDeleteTarget] = useState<Post | null>(null);
  const [deleting, setDeleting] = useState(false);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: String(LIMIT),
      });
      if (search) params.set("search", search);

      const res = await fetch(`/api/admin/posts?${params}`);
      if (!res.ok) throw new Error("게시글 목록을 불러오지 못했습니다.");
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : "오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }, [page, search]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    setSearch(searchInput);
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/posts/${deleteTarget.id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("게시글 삭제에 실패했습니다.");
      setDeleteTarget(null);
      fetchPosts();
    } catch (err) {
      alert(err instanceof Error ? err.message : "오류가 발생했습니다.");
    } finally {
      setDeleting(false);
    }
  };

  const totalPages = data ? Math.ceil(data.total / LIMIT) : 0;

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case "review":
        return "default";
      case "question":
        return "secondary";
      case "tip":
        return "outline";
      default:
        return "secondary";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "review":
        return "후기";
      case "question":
        return "질문";
      case "tip":
        return "팁";
      default:
        return type;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">게시글 관리</h1>
        <p className="text-muted-foreground mt-1">커뮤니티 게시글을 관리합니다.</p>
      </div>

      {/* Search */}
      <form onSubmit={handleSearch} className="flex gap-2 max-w-md">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="제목으로 검색..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button type="submit" variant="secondary">
          검색
        </Button>
      </form>

      {/* Content */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <p className="text-muted-foreground">로딩 중...</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center py-20">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <>
          {/* Table */}
          <div className="rounded-lg border bg-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left font-medium text-muted-foreground px-4 py-3">제목</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-3">작성자</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-3">유형</th>
                  <th className="text-center font-medium text-muted-foreground px-4 py-3">좋아요</th>
                  <th className="text-center font-medium text-muted-foreground px-4 py-3">댓글</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-3">작성일</th>
                  <th className="text-right font-medium text-muted-foreground px-4 py-3">작업</th>
                </tr>
              </thead>
              <tbody>
                {data?.posts.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center text-muted-foreground py-10">
                      게시글이 없습니다.
                    </td>
                  </tr>
                ) : (
                  data?.posts.map((post) => (
                    <tr
                      key={post.id}
                      className="border-b last:border-b-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-4 py-3 font-medium text-foreground max-w-xs truncate">
                        {post.title}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{post.authorName}</td>
                      <td className="px-4 py-3">
                        <Badge variant={getTypeBadgeVariant(post.type)}>
                          {getTypeLabel(post.type)}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="inline-flex items-center gap-1 text-muted-foreground">
                          <Heart className="size-3" />
                          {post.likes}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="inline-flex items-center gap-1 text-muted-foreground">
                          <MessageSquare className="size-3" />
                          {post.comments}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {new Date(post.createdAt).toLocaleDateString("ko-KR")}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="icon-xs" asChild>
                            <Link
                              href={`/community/post/${post.id}`}
                              target="_blank"
                              title="보기"
                            >
                              <ExternalLink className="size-4" />
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon-xs"
                            className="text-red-500 hover:text-red-600"
                            onClick={() => setDeleteTarget(post)}
                            title="삭제"
                          >
                            <Trash2 className="size-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                총 {data?.total.toLocaleString()}건 중 {(page - 1) * LIMIT + 1}-
                {Math.min(page * LIMIT, data?.total ?? 0)}건
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  <ChevronLeft className="size-4" />
                  이전
                </Button>
                <span className="text-sm text-muted-foreground px-2">
                  {page} / {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  다음
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>게시글 삭제</DialogTitle>
            <DialogDescription>
              정말 &quot;{deleteTarget?.title}&quot; 게시글을 삭제하시겠습니까? 이 작업은
              되돌릴 수 없습니다.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteTarget(null)}>
              취소
            </Button>
            <Button variant="destructive" onClick={handleDelete} disabled={deleting}>
              {deleting ? "삭제 중..." : "삭제"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
