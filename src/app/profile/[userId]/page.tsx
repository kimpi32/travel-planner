"use client";

import { use } from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileTabs } from "@/components/profile/ProfileTabs";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { useProfile } from "@/hooks/use-profile";
import { useAuth } from "@/hooks/use-auth";

function UserProfileContent({ userId }: { userId: string }) {
  const { user } = useAuth();
  const { data: profile, isLoading, isError } = useProfile(userId);
  const isOwn = user?.id === userId;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError || !profile) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-muted-foreground">
        <AlertCircle className="h-10 w-10 opacity-30" />
        <p className="text-sm">사용자를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <ProfileHeader profile={profile} isOwn={isOwn} />
      <ProfileTabs userId={userId} isOwn={isOwn} />
    </div>
  );
}

export default function UserProfilePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = use(params);

  return (
    <QueryProvider>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <UserProfileContent userId={userId} />
      </div>
    </QueryProvider>
  );
}
