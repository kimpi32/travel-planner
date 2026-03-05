import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | 여행 플래너",
  description: "여행 플래너 서비스의 이용약관입니다.",
};

const sections = [
  {
    title: "제1조 (목적)",
    content:
      "본 약관은 여행 플래너(이하 \"서비스\")의 이용 조건 및 절차, 이용자와 서비스 제공자 간의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.",
  },
  {
    title: "제2조 (서비스 이용)",
    content:
      "서비스는 AI 여행 견적, 여행 플래너, 여행지 정보 제공, 커뮤니티 기능을 포함합니다. 서비스는 연중무휴 24시간 제공을 원칙으로 하나, 시스템 점검 등의 사유로 일시 중단될 수 있습니다. 서비스의 내용, 이용 방법, 이용 시간에 대하여 변경이 있는 경우 사전 공지합니다.",
  },
  {
    title: "제3조 (회원 가입 및 계정)",
    content:
      "회원 가입은 이메일 주소를 통해 가능합니다. 이용자는 정확한 정보를 제공해야 하며, 타인의 정보를 도용하여 가입할 수 없습니다. 계정 정보의 관리 책임은 이용자에게 있으며, 계정을 타인과 공유하거나 양도할 수 없습니다. 이용자는 언제든지 회원 탈퇴를 요청할 수 있습니다.",
  },
  {
    title: "제4조 (이용자의 의무)",
    content:
      "이용자는 서비스를 이용할 때 관련 법령을 준수해야 합니다. 타인의 권리를 침해하거나, 허위 정보를 유포하거나, 서비스의 정상적인 운영을 방해하는 행위를 해서는 안 됩니다. 커뮤니티에 게시하는 콘텐츠는 이용자 본인에게 책임이 있습니다.",
  },
  {
    title: "제5조 (콘텐츠 및 지적재산권)",
    content:
      "이용자가 서비스에 게시한 콘텐츠(게시글, 댓글, 여행 후기 등)의 저작권은 해당 이용자에게 귀속됩니다. 다만, 서비스 운영 목적으로 서비스 내에서 해당 콘텐츠를 사용할 수 있습니다. 서비스가 제공하는 AI 생성 콘텐츠, 디자인, 소프트웨어 등의 지적재산권은 서비스 제공자에게 귀속됩니다.",
  },
  {
    title: "제6조 (면책 조항)",
    content:
      "AI가 제공하는 여행 견적 및 정보는 참고 목적이며, 실제 비용과 차이가 발생할 수 있습니다. 서비스는 이용자 간 또는 이용자와 제3자 간의 분쟁에 대해 책임을 지지 않습니다. 천재지변, 시스템 장애 등 불가항력으로 인한 서비스 중단에 대해서는 책임을 지지 않습니다.",
  },
  {
    title: "제7조 (약관 변경)",
    content:
      "본 약관은 필요에 따라 변경될 수 있으며, 변경 시 서비스 내 공지를 통해 7일 전에 안내합니다. 변경된 약관에 동의하지 않는 이용자는 회원 탈퇴를 통해 이용 계약을 해지할 수 있습니다. 약관 변경 공지 후 계속 서비스를 이용하는 경우 변경된 약관에 동의한 것으로 간주합니다.",
  },
  {
    title: "제8조 (준거법 및 관할)",
    content:
      "본 약관은 대한민국 법령에 따라 해석되며, 서비스와 관련된 분쟁이 발생할 경우 민사소송법에 따른 관할 법원에서 해결합니다.",
  },
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
        이용약관
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">
        시행일: 2025년 1월 1일
      </p>

      <div className="space-y-8">
        {sections.map(({ title, content }) => (
          <section key={title}>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              {title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {content}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
