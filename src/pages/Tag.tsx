import React from 'react';

const Tag = () => {
  return (
    <div className="page-container">
      <h1>NFT Tagging Service</h1>
      
      <div className="tag-service">
        <section className="service-intro">
          <h2>오프체인 데이터를 NFT로 변환</h2>
          <p className="intro-text">
            실제 세상의 데이터를 블록체인에 기록하고 NFT로 만들어 
            신뢰할 수 있는 디지털 자산으로 변환하세요
          </p>
        </section>

        <section className="tag-features">
          <div className="feature-item">
            <div className="feature-icon">📝</div>
            <div className="feature-content">
              <h3>데이터 인증</h3>
              <p>오프체인 데이터의 진위여부를 검증하고 블록체인에 기록</p>
              <ul className="feature-list">
                <li>문서 인증</li>
                <li>이미지 인증</li>
                <li>실물 자산 인증</li>
              </ul>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">🏷️</div>
            <div className="feature-content">
              <h3>NFT 태깅</h3>
              <p>인증된 데이터를 NFT로 발행하고 메타데이터 추가</p>
              <ul className="feature-list">
                <li>고유 식별자 부여</li>
                <li>메타데이터 기록</li>
                <li>소유권 증명</li>
              </ul>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">🔄</div>
            <div className="feature-content">
              <h3>추적 관리</h3>
              <p>NFT의 이력을 추적하고 관리</p>
              <ul className="feature-list">
                <li>소유권 이전 기록</li>
                <li>변경 이력 관리</li>
                <li>실시간 추적</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="use-cases">
          <h2>활용 사례</h2>
          <div className="use-case-grid">
            <div className="use-case-item">
              <div className="use-case-icon">🏢</div>
              <h3>부동산</h3>
              <p>건물 소유권, 임대 계약, 시설물 이력 관리</p>
            </div>
            <div className="use-case-item">
              <div className="use-case-icon">🎨</div>
              <h3>예술품</h3>
              <p>작품 인증서, 소유권 증명, 거래 이력</p>
            </div>
            <div className="use-case-item">
              <div className="use-case-icon">📜</div>
              <h3>인증서</h3>
              <p>학위증명서, 자격증, 수료증 발급</p>
            </div>
            <div className="use-case-item">
              <div className="use-case-icon">📦</div>
              <h3>공급망</h3>
              <p>제품 이력 추적, 품질 인증, 유통 관리</p>
            </div>
          </div>
        </section>

        <section className="process-flow">
          <h2>서비스 프로세스</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>데이터 제출</h3>
              <p>오프체인 데이터 업로드</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>검증</h3>
              <p>데이터 진위여부 확인</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>NFT 발행</h3>
              <p>블록체인에 기록</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>관리</h3>
              <p>이력 추적 및 관리</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tag; 