import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/get-user";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// POST /api/upload
// 현재 외부 스토리지 미설정 → 503 반환
// 추후 S3 또는 로컬 스토리지 연동 시 구현
export async function POST(request: NextRequest) {
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

  if (!file.type.startsWith("image/")) {
    return NextResponse.json(
      { error: "이미지 파일만 업로드할 수 있습니다." },
      { status: 400 },
    );
  }

  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      { error: "파일 크기는 5MB 이하여야 합니다." },
      { status: 400 },
    );
  }

  // TODO: S3 또는 로컬 파일 스토리지 연동
  return NextResponse.json(
    { error: "이미지 스토리지가 아직 설정되지 않았습니다." },
    { status: 503 },
  );
}
