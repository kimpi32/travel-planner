"use client";

import { useState } from "react";
import { Pencil, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileEdit } from "./ProfileEdit";
import type { UserProfile } from "@/types/community";
import { cn } from "@/lib/utils";

interface ProfileHeaderProps {
  profile: UserProfile;
  isOwn?: boolean;
}

export function ProfileHeader({ profile, isOwn }: ProfileHeaderProps) {
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <div className="rounded-xl border bg-card p-6 flex flex-col sm:flex-row gap-4 sm:items-start">
        <div className="h-20 w-20 rounded-full shrink-0 overflow-hidden bg-slate-200 flex items-center justify-center text-2xl font-bold text-slate-600">
          {profile.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={profile.avatarUrl} alt={profile.displayName} className="w-full h-full object-cover" />
          ) : (
            profile.displayName[0]?.toUpperCase()
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h1 className="text-xl font-bold">{profile.displayName}</h1>
              {profile.bio && (
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {profile.bio}
                </p>
              )}
            </div>
            {isOwn && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setEditOpen(true)}
                className="shrink-0"
              >
                <Pencil className="h-3.5 w-3.5 mr-1.5" />
                편집
              </Button>
            )}
          </div>

          <div className="flex items-center gap-4 mt-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-sm">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <span className="font-semibold">{profile.visitedCountries}</span>
              <span className="text-muted-foreground">방문 국가</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="font-semibold">{profile.tripCount}</span>
              <span className="text-muted-foreground">여행 횟수</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold">{profile.postCount}</span>
              <span className="text-muted-foreground ml-1.5">게시글</span>
            </div>
          </div>
        </div>
      </div>

      {isOwn && (
        <ProfileEdit
          open={editOpen}
          onClose={() => setEditOpen(false)}
          profile={profile}
        />
      )}
    </>
  );
}
