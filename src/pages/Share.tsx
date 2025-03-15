import React from 'react';

const Share = () => {
  return (
    <div className="page-container">
      <h1>Wiiv Token Economics</h1>
      
      <div className="tokenomics-overview">
        <div className="token-stats">
          <div className="stat-item">
            <h3>총 발행량</h3>
            <div className="value">1,000,000,000 WIIV</div>
          </div>
          <div className="stat-item">
            <h3>현재 유통량</h3>
            <div className="value">450,000,000 WIIV</div>
          </div>
          <div className="stat-item">
            <h3>현재 가격</h3>
            <div className="value">$0.85 USD</div>
          </div>
        </div>

        <div className="token-distribution">
          <h2>토큰 분배 현황</h2>
          <div className="distribution-chart">
            <div className="chart-item ecosystem" style={{width: '30%'}}>
              <span className="label">생태계 리워드</span>
              <span className="percentage">30%</span>
            </div>
            <div className="chart-item team" style={{width: '20%'}}>
              <span className="label">팀 & 어드바이저</span>
              <span className="percentage">20%</span>
            </div>
            <div className="chart-item reserve" style={{width: '25%'}}>
              <span className="label">예비 물량</span>
              <span className="percentage">25%</span>
            </div>
            <div className="chart-item public" style={{width: '25%'}}>
              <span className="label">퍼블릭 세일</span>
              <span className="percentage">25%</span>
            </div>
          </div>
        </div>

        <div className="token-flow">
          <h2>토큰 순환 구조</h2>
          <div className="flow-diagram">
            <div className="flow-item">
              <div className="flow-icon">🌱</div>
              <h3>스테이킹</h3>
              <p>연 12% 수익률</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-item">
              <div className="flow-icon">💰</div>
              <h3>리워드 풀</h3>
              <p>일일 분배</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-item">
              <div className="flow-icon">🔄</div>
              <h3>재순환</h3>
              <p>생태계 환원</p>
            </div>
          </div>
        </div>

        <div className="token-utility">
          <h2>토큰 활용</h2>
          <div className="utility-grid">
            <div className="utility-item">
              <h3>거버넌스</h3>
              <p>프로토콜 의사결정 참여</p>
            </div>
            <div className="utility-item">
              <h3>수수료 할인</h3>
              <p>플랫폼 이용 수수료 절감</p>
            </div>
            <div className="utility-item">
              <h3>스테이킹 보상</h3>
              <p>네트워크 기여도에 따른 보상</p>
            </div>
            <div className="utility-item">
              <h3>생태계 확장</h3>
              <p>파트너십 및 신규 서비스 접근</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share; 