"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileTabs } from "@/components/profile/ProfileTabs";
import { useAuth } from "@/hooks/use-auth";
import { useProfile } from "@/hooks/use-profile";

function OwnProfileContent() {
  const router = useRouter();
  const { user, isLoading: authLoading } = useAuth();
  const { data: profile, isLoading: profileLoading } = useProfile(user?.id ?? "");

  useEffect(() => {
    if (!authLoading && !user) {
      router.replace("/auth/login?next=/profile");
    }
  }, [user, authLoading, router]);

  if (authLoading || profileLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!user || !profile) return null;

  return (
    <div className="flex flex-col gap-6">
      <ProfileHeader profile={profile} isOwn />
      <ProfileTabs userId={user.id} isOwn />
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <OwnProfileContent />
    </div>
  );
}
