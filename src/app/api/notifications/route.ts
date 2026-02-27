import { NextRequest } from "next/server";
import { db } from "@/lib/db/drizzle";
import { notifications, users, posts } from "@/lib/db/schema";
import { getCurrentUser } from "@/lib/auth/get-user";
import { eq, and, asc, desc, inArray } from "drizzle-orm";
import { ok, err } from "@/lib/api/response";

const PAGE_SIZE = 20;

// GET /api/notifications - List notifications (paginated, unread first)
export async function GET(req: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return err("로그인이 필요합니다.", 401);
  }

  try {
    const { searchParams } = req.nextUrl;
    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
    const offset = (page - 1) * PAGE_SIZE;

    // alias for actor
    const actors = db.$with("actors").as(
      db.select().from(users)
    );

    const rows = await db
      .select({
        id: notifications.id,
        type: notifications.type,
        read: notifications.read,
        createdAt: notifications.createdAt,
        postId: notifications.postId,
        commentId: notifications.commentId,
        actorId: users.id,
        actorName: users.name,
        actorImage: users.profileImage,
        postTitle: posts.title,
      })
      .from(notifications)
      .innerJoin(users, eq(users.id, notifications.actorId))
      .leftJoin(posts, eq(posts.id, notifications.postId))
      .where(eq(notifications.userId, currentUser.id))
      .orderBy(asc(notifications.read), desc(notifications.createdAt))
      .limit(PAGE_SIZE)
      .offset(offset);

    const unreadCount = rows.filter((r) => !r.read).length;

    return ok({
      items: rows.map((r) => ({
        id: r.id,
        type: r.type,
        read: r.read,
        createdAt: r.createdAt,
        postId: r.postId,
        commentId: r.commentId,
        postTitle: r.postTitle,
        actor: {
          id: r.actorId,
          displayName: r.actorName,
          avatarUrl: r.actorImage,
        },
      })),
      page,
      pageSize: PAGE_SIZE,
      unreadCount,
    });
  } catch (error) {
    console.error("[GET /api/notifications]", error);
    return err("알림을 불러오지 못했습니다.", 500);
  }
}

// PATCH /api/notifications - Mark as read (single or all)
export async function PATCH(req: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return err("로그인이 필요합니다.", 401);
  }

  try {
    const body = await req.json() as { id?: string; all?: boolean };

    if (body.all) {
      // 전체 읽음 처리
      await db
        .update(notifications)
        .set({ read: true })
        .where(
          and(
            eq(notifications.userId, currentUser.id),
            eq(notifications.read, false)
          )
        );
      return ok({ message: "모든 알림을 읽음 처리했습니다." });
    }

    if (body.id) {
      // 단일 읽음 처리
      await db
        .update(notifications)
        .set({ read: true })
        .where(
          and(
            eq(notifications.id, body.id),
            eq(notifications.userId, currentUser.id)
          )
        );
      return ok({ message: "알림을 읽음 처리했습니다." });
    }

    return err("id 또는 all 파라미터가 필요합니다.", 400);
  } catch (error) {
    console.error("[PATCH /api/notifications]", error);
    return err("알림 처리 중 오류가 발생했습니다.", 500);
  }
}
