"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUpdateProfile } from "@/hooks/use-profile";
import { Loader2 } from "lucide-react";
import type { UserProfile } from "@/types/community";

interface ProfileEditProps {
  open: boolean;
  onClose: () => void;
  profile: UserProfile;
}

export function ProfileEdit({ open, onClose, profile }: ProfileEditProps) {
  const [displayName, setDisplayName] = useState(profile.displayName);
  const [bio, setBio] = useState(profile.bio ?? "");
  const [avatarUrl, setAvatarUrl] = useState(profile.avatarUrl ?? "");
  const updateMutation = useUpdateProfile(profile.id);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!displayName.trim()) return;

    await updateMutation.mutateAsync({
      displayName: displayName.trim(),
      bio: bio.trim() || undefined,
      avatarUrl: avatarUrl.trim() || undefined,
    });
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>프로필 편집</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">이름 *</label>
            <Input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="표시 이름"
              maxLength={30}
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">소개</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="자신을 소개해보세요..."
              rows={3}
              maxLength={200}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">프로필 이미지 URL</label>
            <Input
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              placeholder="https://..."
              type="url"
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              취소
            </Button>
            <Button
              type="submit"
              disabled={!displayName.trim() || updateMutation.isPending}
            >
              {updateMutation.isPending && (
                <Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" />
              )}
              저장
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
