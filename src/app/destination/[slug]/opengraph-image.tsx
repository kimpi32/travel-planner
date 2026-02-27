import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = '여행지 상세 정보';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  // 데이터 동적 로드
  const { countryDetails: countryDetailsData } = await import('@/data/country-details');
  const { geoNodes } = await import('@/data/geography');

  const countryDetail = countryDetailsData[slug];
  const geoNode = geoNodes.find(node => node.slug === slug && node.level === 'country');

  if (!geoNode || !countryDetail) {
    // 기본 이미지 반환
    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '48px',
            fontWeight: 'bold',
          }}
        >
          {slug}
        </div>
      ),
      { ...size }
    );
  }

  const countryName = geoNode.name;
  const emoji = geoNode.icon || '🌍';
  const intro = (countryDetail as any).intro || '여행지 정보';

  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)`,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '60px 40px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* 배경 장식 */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* 메인 콘텐츠 */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '90%' }}>
          {/* 이모지 */}
          <div style={{ fontSize: '120px', marginBottom: '20px', lineHeight: '1' }}>
            {emoji}
          </div>

          {/* 국가명 */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              margin: '0 0 30px 0',
              background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {countryName}
          </h1>

          {/* 소개 텍스트 */}
          <p
            style={{
              fontSize: '18px',
              color: '#cbd5e1',
              margin: '0',
              lineHeight: '1.4',
              maxHeight: '100px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {intro.substring(0, 120)}...
          </p>
        </div>

        {/* 하단 텍스트 */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            fontSize: '14px',
            color: '#94a3b8',
            letterSpacing: '0.5px',
          }}
        >
          여행 플래너 - AI와 함께하는 스마트 여행 계획
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
