/**
 * 비속어 필터링 모듈
 * 한국어/영어 기본 비속어 목록과 치환 유틸리티를 제공합니다.
 */

// ─── 비속어 목록 ─────────────────────────────────────────────────────────────

const PROFANITY_LIST_KO: string[] = [
  "씨발",
  "씨발놈",
  "씨발년",
  "시발",
  "시발놈",
  "시발년",
  "병신",
  "개새끼",
  "개새기",
  "새끼",
  "새기",
  "미친놈",
  "미친년",
  "미친새끼",
  "지랄",
  "좆",
  "보지",
  "창녀",
  "걸레년",
  "쓰레기",
  "찐따",
  "찐빠",
  "후레자식",
  "개쓰레기",
  "개같은",
  "개같이",
  "꺼져",
  "죽어",
  "닥쳐",
  "ㅅㅂ",
  "ㅂㅅ",
  "ㅈㄹ",
];

const PROFANITY_LIST_EN: string[] = [
  "fuck",
  "fucker",
  "fucking",
  "fucked",
  "shit",
  "shitty",
  "bitch",
  "bitches",
  "asshole",
  "ass",
  "bastard",
  "cunt",
  "dick",
  "cock",
  "pussy",
  "whore",
  "slut",
  "retard",
  "nigger",
  "nigga",
  "faggot",
  "motherfucker",
  "motherfucking",
  "damn",
  "crap",
  "piss",
  "hell",
];

const ALL_PROFANITY = [...PROFANITY_LIST_KO, ...PROFANITY_LIST_EN];

// 대소문자 무시 정규식 패턴 생성 (영문), 한국어는 exact match
function buildProfanityRegex(): RegExp {
  const escaped = ALL_PROFANITY.map((word) =>
    word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  return new RegExp(`(${escaped.join("|")})`, "gi");
}

const PROFANITY_REGEX = buildProfanityRegex();

/**
 * 텍스트에 비속어가 포함되어 있는지 확인합니다.
 */
export function containsProfanity(text: string): boolean {
  PROFANITY_REGEX.lastIndex = 0;
  return PROFANITY_REGEX.test(text);
}

/**
 * 텍스트에서 비속어를 ***로 치환합니다.
 */
export function sanitizeContent(text: string): string {
  PROFANITY_REGEX.lastIndex = 0;
  return text.replace(PROFANITY_REGEX, (match) => "*".repeat(match.length));
}
