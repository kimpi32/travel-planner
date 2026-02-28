export const BUCKET_NAME = "community-images";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

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
 * 이미지 업로드 (현재 미구현 — 추후 S3 연동)
 */
export async function uploadImage(
  _file: File,
  _bucket: string,
  _path: string,
): Promise<string | null> {
  console.warn("[uploadImage] 스토리지가 설정되지 않아 업로드를 건너뜁니다.");
  return null;
}

/**
 * 이미지 삭제 (현재 미구현)
 */
export async function deleteImage(
  _url: string,
  _bucket: string,
): Promise<void> {
  console.warn("[deleteImage] 스토리지가 설정되지 않아 삭제를 건너뜁니다.");
}
