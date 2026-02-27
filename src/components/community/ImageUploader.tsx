"use client";

import { useRef, useState, useCallback } from "react";
import { ImageIcon, X, Upload, Loader2, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploaderProps {
  images: string[];
  onChange: (urls: string[]) => void;
  maxImages?: number;
}

interface UploadingFile {
  id: string;
  name: string;
  progress: number;
  error?: string;
}

const isSupabaseConfigured =
  typeof process !== "undefined" &&
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function ImageUploader({
  images,
  onChange,
  maxImages = 10,
}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState<UploadingFile[]>([]);

  const canAddMore = images.length < maxImages;

  async function uploadFile(file: File): Promise<string | null> {
    // 파일 유형 검증
    if (!file.type.startsWith("image/")) {
      throw new Error("이미지 파일만 업로드할 수 있습니다.");
    }
    // 파일 크기 검증 (5MB)
    if (file.size > 5 * 1024 * 1024) {
      throw new Error("파일 크기는 5MB 이하여야 합니다.");
    }

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body.error ?? "업로드에 실패했습니다.");
    }

    const { url } = await res.json();
    return url as string;
  }

  async function handleFiles(files: FileList | File[]) {
    const fileArray = Array.from(files);
    const remaining = maxImages - images.length;
    const toUpload = fileArray.slice(0, remaining);

    if (toUpload.length === 0) return;

    const newUploading: UploadingFile[] = toUpload.map((f) => ({
      id: `${Date.now()}-${f.name}`,
      name: f.name,
      progress: 0,
    }));

    setUploading((prev) => [...prev, ...newUploading]);

    const results = await Promise.allSettled(
      toUpload.map(async (file, idx) => {
        const uploadId = newUploading[idx].id;

        // 진행 중 표시 (시작)
        setUploading((prev) =>
          prev.map((u) => (u.id === uploadId ? { ...u, progress: 30 } : u)),
        );

        try {
          const url = await uploadFile(file);

          // 진행 완료 표시
          setUploading((prev) =>
            prev.map((u) => (u.id === uploadId ? { ...u, progress: 100 } : u)),
          );

          return { uploadId, url };
        } catch (err) {
          const message = err instanceof Error ? err.message : "업로드 실패";
          setUploading((prev) =>
            prev.map((u) =>
              u.id === uploadId ? { ...u, error: message, progress: 0 } : u,
            ),
          );
          throw err;
        }
      }),
    );

    // 성공한 URL만 추가
    const successUrls: string[] = [];
    results.forEach((result) => {
      if (result.status === "fulfilled" && result.value.url) {
        successUrls.push(result.value.url);
      }
    });

    if (successUrls.length > 0) {
      onChange([...images, ...successUrls]);
    }

    // 에러 없는 항목은 잠시 후 제거, 에러 항목은 3초 후 제거
    setTimeout(() => {
      setUploading((prev) =>
        prev.filter((u) => newUploading.some((n) => n.id === u.id && u.error)),
      );
      setTimeout(() => {
        setUploading((prev) =>
          prev.filter((u) => !newUploading.some((n) => n.id === u.id)),
        );
      }, 3000);
    }, 800);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    if (!canAddMore) return;
    handleFiles(e.dataTransfer.files);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
    // reset so same file can be re-selected
    e.target.value = "";
  }

  function removeImage(url: string) {
    onChange(images.filter((img) => img !== url));
  }

  const openFilePicker = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  // Supabase 미설정 시 안내 메시지
  if (!isSupabaseConfigured) {
    return (
      <div className="flex items-start gap-2 rounded-lg border border-dashed border-muted-foreground/30 bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
        <Info className="mt-0.5 h-4 w-4 shrink-0" />
        <span>
          스토리지가 설정되지 않아 이미지 업로드를 사용할 수 없습니다.
          Supabase Storage를 연결하면 이미지를 첨부할 수 있습니다.
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* 드래그 앤 드롭 존 */}
      {canAddMore && (
        <div
          role="button"
          tabIndex={0}
          aria-label="이미지 업로드 영역"
          onClick={openFilePicker}
          onKeyDown={(e) => e.key === "Enter" && openFilePicker()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "flex cursor-pointer flex-col items-center justify-center gap-2",
            "rounded-xl border-2 border-dashed px-4 py-6 text-center transition-colors",
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-primary/50 hover:bg-accent/30",
          )}
        >
          <Upload className="h-6 w-6 text-muted-foreground" />
          <div className="text-sm">
            <span className="font-medium text-foreground">클릭</span>
            <span className="text-muted-foreground">
              하거나 파일을 여기로 드래그하세요
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            이미지 파일 (최대 5MB, {images.length}/{maxImages}개)
          </p>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleInputChange}
      />

      {/* 업로드 중 파일 진행 상태 */}
      {uploading.length > 0 && (
        <div className="flex flex-col gap-2">
          {uploading.map((u) => (
            <div
              key={u.id}
              className={cn(
                "flex items-center gap-3 rounded-lg border px-3 py-2 text-sm",
                u.error
                  ? "border-destructive/30 bg-destructive/5 text-destructive"
                  : "border-border bg-muted/30",
              )}
            >
              {u.error ? (
                <X className="h-4 w-4 shrink-0 text-destructive" />
              ) : (
                <Loader2 className="h-4 w-4 shrink-0 animate-spin text-muted-foreground" />
              )}
              <div className="min-w-0 flex-1">
                <div className="truncate font-medium">{u.name}</div>
                {u.error ? (
                  <div className="text-xs">{u.error}</div>
                ) : (
                  <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${u.progress}%` }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 업로드된 이미지 미리보기 */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {images.map((url, idx) => (
            <div key={url} className="group relative aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={url}
                alt={`첨부 이미지 ${idx + 1}`}
                className="h-full w-full rounded-lg object-cover"
              />
              <button
                type="button"
                onClick={() => removeImage(url)}
                aria-label={`이미지 ${idx + 1} 삭제`}
                className={cn(
                  "absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center",
                  "rounded-full bg-black/60 text-white opacity-0 transition-opacity",
                  "hover:bg-black/80 group-hover:opacity-100",
                )}
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <div className="absolute bottom-1.5 right-1.5 flex items-center gap-1 rounded-full bg-black/50 px-1.5 py-0.5">
                <ImageIcon className="h-3 w-3 text-white" />
                <span className="text-[10px] text-white">{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {!canAddMore && (
        <p className="text-xs text-muted-foreground">
          최대 {maxImages}개의 이미지를 첨부할 수 있습니다.
        </p>
      )}
    </div>
  );
}
