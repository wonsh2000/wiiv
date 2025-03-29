import React from 'react';
import './Share.css';

const Share: React.FC = () => {
  return (
    <div className="share-container">
      <section className="share-hero">
        <h1>Share</h1>
        <p className="share-description">
          블록체인 기반의 토큰 이코노믹스 공유 플랫폼
        </p>
      </section>

      <section className="share-overview">
        <div className="overview-grid">
          <div className="overview-card">
            <div className="card-icon">💰</div>
            <h3>토큰 이코노믹스</h3>
            <p>투명하고 효율적인 토큰 생태계 구축</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">🔄</div>
            <h3>토큰 순환</h3>
            <p>지속 가능한 토큰 순환 구조 설계</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">📊</div>
            <h3>데이터 분석</h3>
            <p>실시간 토큰 데이터 모니터링</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">🤝</div>
            <h3>커뮤니티</h3>
            <p>토큰 홀더 커뮤니티 활성화</p>
          </div>
        </div>
      </section>

      <section className="share-features">
        <h2>토큰 특징</h2>
        <div className="features-container">
          <div className="feature-item">
            <h3>토큰 분배</h3>
            <ul>
              <li>생태계 리워드 (30%)</li>
              <li>팀 & 어드바이저 (20%)</li>
              <li>예비 물량 (25%)</li>
              <li>퍼블릭 세일 (25%)</li>
            </ul>
          </div>
          <div className="feature-item">
            <h3>토큰 활용</h3>
            <ul>
              <li>거버넌스 참여</li>
              <li>플랫폼 수수료 할인</li>
              <li>스테이킹 보상</li>
              <li>생태계 확장</li>
            </ul>
          </div>
          <div className="feature-item">
            <h3>스테이킹</h3>
            <ul>
              <li>연 12% 수익률</li>
              <li>일일 리워드 분배</li>
              <li>락업 기간 선택</li>
              <li>복리 수익 실현</li>
            </ul>
          </div>
          <div className="feature-item">
            <h3>거버넌스</h3>
            <ul>
              <li>투표 권한 부여</li>
              <li>프로토콜 개선 제안</li>
              <li>파라미터 조정</li>
              <li>생태계 기여도 반영</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="share-stats">
        <h2>토큰 현황</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <h3>총 발행량</h3>
            <p>1,000,000,000 WIIV</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💫</div>
            <h3>현재 유통량</h3>
            <p>450,000,000 WIIV</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💎</div>
            <h3>현재 가격</h3>
            <p>$0.85 USD</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔒</div>
            <h3>스테이킹 수량</h3>
            <p>250,000,000 WIIV</p>
          </div>
        </div>
      </section>

      <section className="share-process">
        <h2>토큰 참여 프로세스</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>지갑 연결</h3>
            <p>Web3 지갑 연동</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>토큰 획득</h3>
            <p>WIIV 토큰 구매/획득</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>스테이킹</h3>
            <p>토큰 예치 및 보상</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>생태계 참여</h3>
            <p>거버넌스 및 서비스 이용</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Share; 