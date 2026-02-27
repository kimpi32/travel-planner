import { createClient } from "@/lib/auth/supabase-browser";

export const BUCKET_NAME = "community-images";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

/**
 * 파일 유형 검사 (image/* 만 허용)
 */
export function validateImageFile(file: File): string | null {
  if (!file.type.startsWith("image/")) {
    return "이미지 파일만 업로드할 수 있습니다.";
  }
  if (file.size > MAX_FILE_SIZE) {
    return "파일 크기는 5MB 이하여야 합니다.";
  }
  return null;
}

/**
 * Supabase Storage에 이미지 업로드
 * Supabase 미설정 시 null 반환
 */
export async function uploadImage(
  file: File,
  bucket: string,
  path: string,
): Promise<string | null> {
  if (!isSupabaseConfigured()) {
    console.warn("[uploadImage] Supabase가 설정되지 않아 업로드를 건너뜁니다.");
    return null;
  }

  const validationError = validateImageFile(file);
  if (validationError) {
    throw new Error(validationError);
  }

  const supabase = createClient();

  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });

  if (error) {
    throw new Error(`업로드 실패: ${error.message}`);
  }

  return getPublicUrl(bucket, path);
}

/**
 * Supabase Storage에서 이미지 삭제
 * Supabase 미설정 시 skip
 */
export async function deleteImage(
  url: string,
  bucket: string,
): Promise<void> {
  if (!isSupabaseConfigured()) {
    console.warn("[deleteImage] Supabase가 설정되지 않아 삭제를 건너뜁니다.");
    return;
  }

  // URL에서 파일 경로 추출
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const prefix = `${supabaseUrl}/storage/v1/object/public/${bucket}/`;

  if (!url.startsWith(prefix)) {
    console.warn("[deleteImage] URL 형식이 올바르지 않습니다:", url);
    return;
  }

  const path = url.slice(prefix.length);
  const supabase = createClient();

  const { error } = await supabase.storage.from(bucket).remove([path]);

  if (error) {
    throw new Error(`삭제 실패: ${error.message}`);
  }
}

/**
 * Supabase Storage 공개 URL 반환
 */
export function getPublicUrl(bucket: string, path: string): string {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl) {
    return "";
  }
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${path}`;
}
