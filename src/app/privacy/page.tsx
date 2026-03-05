import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 여행 플래너",
  description: "여행 플래너 서비스의 개인정보처리방침입니다.",
};

const sections = [
  {
    title: "1. 수집하는 개인정보 항목",
    content: [
      "회원가입 시: 이메일 주소, 비밀번호, 닉네임",
      "서비스 이용 시: 여행 계획 정보, 견적 요청 내역, 커뮤니티 게시글 및 댓글",
      "자동 수집: 접속 IP, 브라우저 정보, 접속 일시, 서비스 이용 기록",
    ],
  },
  {
    title: "2. 개인정보 이용 목적",
    content: [
      "회원 관리: 회원 식별, 본인 확인, 서비스 부정 이용 방지",
      "서비스 제공: AI 여행 견적, 여행 플래너, 커뮤니티 기능 제공",
      "서비스 개선: 이용 통계 분석, 서비스 품질 향상",
      "고객 지원: 문의 응대, 공지사항 전달",
    ],
  },
  {
    title: "3. 개인정보 보관 기간",
    content: [
      "회원 탈퇴 시까지 보관하며, 탈퇴 후 지체 없이 파기합니다.",
      "관련 법령에 의해 보존이 필요한 경우 해당 기간 동안 보관합니다.",
      "전자상거래법에 따른 계약 및 청약철회 기록: 5년",
      "전자상거래법에 따른 소비자 불만 처리 기록: 3년",
      "통신비밀보호법에 따른 접속 기록: 3개월",
    ],
  },
  {
    title: "4. 개인정보의 제3자 제공",
    content: [
      "여행 플래너는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다.",
      "다만, 이용자가 사전에 동의한 경우 또는 법령에 의해 요구되는 경우에 한하여 제공할 수 있습니다.",
    ],
  },
  {
    title: "5. 이용자의 권리와 행사 방법",
    content: [
      "이용자는 언제든지 자신의 개인정보를 조회하거나 수정할 수 있습니다.",
      "회원 탈퇴를 통해 개인정보 처리 정지를 요청할 수 있습니다.",
      "개인정보 관련 문의는 support@travel.supports.work 으로 연락해 주세요.",
    ],
  },
  {
    title: "6. 개인정보 보호를 위한 조치",
    content: [
      "비밀번호 암호화 저장",
      "SSL/TLS를 통한 데이터 전송 암호화",
      "개인정보 접근 권한 최소화",
      "정기적인 보안 점검 실시",
    ],
  },
  {
    title: "7. 개인정보 처리방침 변경",
    content: [
      "본 개인정보처리방침은 시행일로부터 적용되며, 법령 및 정책에 따라 변경될 수 있습니다.",
      "변경 사항은 서비스 내 공지를 통해 안내드립니다.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
        개인정보처리방침
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">
        시행일: 2025년 1월 1일
      </p>

      <p className="mb-8 text-muted-foreground leading-relaxed">
        여행 플래너(이하 &quot;서비스&quot;)는 이용자의 개인정보를 중요시하며,
        「개인정보 보호법」을 준수하고 있습니다. 본 개인정보처리방침을 통해
        이용자의 개인정보가 어떻게 수집, 이용, 관리되는지 안내드립니다.
      </p>

      <div className="space-y-8">
        {sections.map(({ title, content }) => (
          <section key={title}>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              {title}
            </h2>
            <ul className="space-y-2">
              {content.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
