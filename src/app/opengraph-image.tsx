import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '여행 플래너 - AI와 함께하는 스마트 여행 계획';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '40px',
        }}
      >
        {/* 배경 장식 */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(15, 52, 96, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* 메인 콘텐츠 */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          {/* 제목 */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              margin: '0 0 30px 0',
              background: 'linear-gradient(90deg, #00d4ff 0%, #7b68ee 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-2px',
            }}
          >
            여행 플래너
          </h1>

          {/* 부제목 */}
          <p
            style={{
              fontSize: '36px',
              fontWeight: '500',
              margin: '0',
              color: '#e0e0e0',
              letterSpacing: '-0.5px',
            }}
          >
            AI와 함께하는 스마트 여행 계획
          </p>

          {/* 배경 텍스트 이펙트 */}
          <div
            style={{
              marginTop: '50px',
              display: 'flex',
              gap: '20px',
              fontSize: '24px',
              opacity: 0.7,
              justifyContent: 'center',
            }}
          >
            <span>🌍</span>
            <span>✈️</span>
            <span>🗺️</span>
            <span>📸</span>
            <span>🏖️</span>
          </div>
        </div>

        {/* 하단 텍스트 */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '16px',
            color: '#a0a0a0',
            letterSpacing: '1px',
          }}
        >
          세계 50개국의 여행지를 한눈에 만나보세요
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
