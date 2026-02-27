"use client";

import { useState, useEffect } from "react";
import { Pencil, Globe, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileEdit } from "./ProfileEdit";
import { BadgeGrid, type UserBadgeData } from "./BadgeGrid";
import { FollowButton } from "@/components/community/FollowButton";
import type { UserProfile } from "@/types/community";
import { cn } from "@/lib/utils";

interface ProfileHeaderProps {
  profile: UserProfile;
  isOwn?: boolean;
  followerCount?: number;
  followingCount?: number;
}

export function ProfileHeader({
  profile,
  isOwn,
  followerCount = 0,
  followingCount = 0,
}: ProfileHeaderProps) {
  const [editOpen, setEditOpen] = useState(false);
  const [badges, setBadges] = useState<UserBadgeData[]>([]);
  const [badgesLoading, setBadgesLoading] = useState(true);

  useEffect(() => {
    async function fetchBadges() {
      try {
        const res = await fetch(`/api/community/badges?userId=${profile.id}`);
        if (res.ok) {
          const json = await res.json();
          setBadges(json.data?.badges ?? []);
        }
      } catch {
        // 배지 로딩 실패는 무시 (비필수 기능)
      } finally {
        setBadgesLoading(false);
      }
    }
    fetchBadges();
  }, [profile.id]);

  const earnedBadges = badges.filter((b) => b.earned);

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
            {isOwn ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setEditOpen(true)}
                className="shrink-0"
              >
                <Pencil className="h-3.5 w-3.5 mr-1.5" />
                편집
              </Button>
            ) : (
              <FollowButton targetUserId={profile.id} size="sm" className="shrink-0" />
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
            <div className="flex items-center gap-1.5 text-sm">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="font-semibold">{followerCount}</span>
              <span className="text-muted-foreground">팔로워</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold">{followingCount}</span>
              <span className="text-muted-foreground ml-1.5">팔로잉</span>
            </div>
          </div>

          {/* 획득한 배지 미리보기 */}
          {!badgesLoading && earnedBadges.length > 0 && (
            <div className="mt-4 pt-4 border-t">
              <p className="text-xs font-medium text-muted-foreground mb-2">
                획득한 배지
              </p>
              <div className="flex flex-wrap gap-1.5">
                {earnedBadges.map((badge) => (
                  <span
                    key={badge.id}
                    title={`${badge.name}: ${badge.description}`}
                    className="text-xl leading-none cursor-default"
                  >
                    {badge.emoji}
                  </span>
                ))}
              </div>
            </div>
          )}
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
