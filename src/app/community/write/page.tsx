"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { PostCreateForm } from "@/components/community/PostCreateForm";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { useAuth } from "@/hooks/use-auth";

function WritePageContent() {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/auth/login?next=/community/write");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!user) return null;

  return <PostCreateForm />;
}

export default function WritePage() {
  return (
    <QueryProvider>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">게시글 작성</h1>
          <p className="text-muted-foreground text-sm mt-1">
            여행 이야기를 커뮤니티와 나눠보세요
          </p>
        </div>
        <WritePageContent />
      </div>
    </QueryProvider>
  );
}
