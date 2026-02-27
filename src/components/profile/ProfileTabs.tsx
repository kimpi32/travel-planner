"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { UserPosts } from "./UserPosts";
import { BookmarkList } from "./BookmarkList";

interface ProfileTabsProps {
  userId: string;
  isOwn?: boolean;
}

export function ProfileTabs({ userId, isOwn }: ProfileTabsProps) {
  return (
    <Tabs defaultValue="posts">
      <TabsList>
        <TabsTrigger value="posts">게시글</TabsTrigger>
        {isOwn && <TabsTrigger value="bookmarks">북마크</TabsTrigger>}
      </TabsList>

      <TabsContent value="posts" className="mt-4">
        <UserPosts userId={userId} />
      </TabsContent>

      {isOwn && (
        <TabsContent value="bookmarks" className="mt-4">
          <BookmarkList />
        </TabsContent>
      )}
    </Tabs>
  );
}
