/**
 * 스팸 감지 모듈
 * URL 과다 포함, 반복 문자, 너무 짧은 내용 등을 검사합니다.
 */

/** URL 패턴 (http/https/ftp 포함) */
const URL_REGEX = /https?:\/\/[^\s]+|ftp:\/\/[^\s]+/gi;

/** 한국어/영어 반복 문자 패턴: 동일 문자가 10회 초과 연속 */
const REPEATED_CHAR_REGEX = /(.)\1{10,}/u;

const MAX_URL_COUNT = 3;
const MIN_POST_LENGTH = 5;

export interface SpamCheckResult {
  isSpam: boolean;
  reasons: string[];
}

/**
 * 텍스트가 스팸인지 확인합니다.
 * @param text 검사할 텍스트
 * @param isPost true이면 게시글(최소 길이 적용), false이면 댓글
 */
export function checkSpam(text: string, isPost = true): SpamCheckResult {
  const reasons: string[] = [];

  // 1. 과도한 URL 포함 여부
  URL_REGEX.lastIndex = 0;
  const urls = text.match(URL_REGEX) ?? [];
  if (urls.length > MAX_URL_COUNT) {
    reasons.push(`URL이 ${urls.length}개 포함되어 있습니다. (최대 ${MAX_URL_COUNT}개)`);
  }

  // 2. 반복 문자 (ㅋㅋㅋㅋ, aaaaaa 등 10회 초과)
  if (REPEATED_CHAR_REGEX.test(text)) {
    reasons.push("같은 문자가 10회 이상 반복되고 있습니다.");
  }

  // 3. 너무 짧은 내용 (게시글만 적용)
  if (isPost && text.trim().length < MIN_POST_LENGTH) {
    reasons.push(`내용이 너무 짧습니다. (최소 ${MIN_POST_LENGTH}자 이상)`);
  }

  return {
    isSpam: reasons.length > 0,
    reasons,
  };
}

/**
 * 간단한 boolean 반환 래퍼 (기존 코드 호환용)
 */
export function isSpam(text: string, isPost = true): boolean {
  return checkSpam(text, isPost).isSpam;
}
