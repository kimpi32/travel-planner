import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/auth/supabase-server";
import { getCurrentUser } from "@/lib/auth/get-user";
import { BUCKET_NAME } from "@/lib/storage/upload";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

// POST /api/upload
export async function POST(request: NextRequest) {
  // Supabase 미설정 시 graceful fallback
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { error: "스토리지가 설정되지 않았습니다. 이미지 업로드를 사용할 수 없습니다." },
      { status: 503 },
    );
  }

  // 인증 확인
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json(
      { error: "로그인이 필요합니다." },
      { status: 401 },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "요청 형식이 올바르지 않습니다." },
      { status: 400 },
    );
  }

  const file = formData.get("file");
  if (!file || !(file instanceof File)) {
    return NextResponse.json(
      { error: "파일이 없습니다." },
      { status: 400 },
    );
  }

  // 파일 유형 검증
  if (!file.type.startsWith("image/")) {
    return NextResponse.json(
      { error: "이미지 파일만 업로드할 수 있습니다." },
      { status: 400 },
    );
  }

  // 파일 크기 검증
  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      { error: "파일 크기는 5MB 이하여야 합니다." },
      { status: 400 },
    );
  }

  // 고유 파일명 생성: {userId}/{timestamp}-{originalName}
  const sanitizedFilename = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const uniquePath = `${currentUser.id}/${Date.now()}-${sanitizedFilename}`;

  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "스토리지 클라이언트 초기화에 실패했습니다." },
      { status: 500 },
    );
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const { error: uploadError } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(uniquePath, buffer, {
      contentType: file.type,
      cacheControl: "3600",
      upsert: false,
    });

  if (uploadError) {
    console.error("[POST /api/upload] 업로드 오류:", uploadError);
    return NextResponse.json(
      { error: `업로드 실패: ${uploadError.message}` },
      { status: 500 },
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const publicUrl = `${supabaseUrl}/storage/v1/object/public/${BUCKET_NAME}/${uniquePath}`;

  return NextResponse.json({ url: publicUrl }, { status: 201 });
}
