import React from 'react';
import './Place.css';

const Place: React.FC = () => {
  return (
    <div className="place-container">
      <section className="place-hero">
        <h1>Place</h1>
        <p className="place-description">
          실제 자산과 연결되는 블록체인 상의 추상 공간
        </p>
      </section>

      <section className="place-features">
        <div className="feature-grid">
          <div className="place-card">
            <div className="card-icon">🏢</div>
            <h3>자산 토큰화</h3>
            <p>실물 자산을 블록체인 상에서 디지털 자산으로 변환</p>
          </div>
          <div className="place-card">
            <div className="card-icon">🔗</div>
            <h3>스마트 컨트랙트</h3>
            <p>자동화된 자산 관리 및 거래 실행</p>
          </div>
          <div className="place-card">
            <div className="card-icon">📊</div>
            <h3>데이터 추적</h3>
            <p>실시간 자산 가치 및 거래 이력 모니터링</p>
          </div>
          <div className="place-card">
            <div className="card-icon">🔐</div>
            <h3>보안 인증</h3>
            <p>블록체인 기반 소유권 및 거래 검증</p>
          </div>
        </div>
      </section>

      <section className="place-benefits">
        <h2>Place의 장점</h2>
        <div className="benefits-container">
          <div className="benefit-item">
            <h3>투명성</h3>
            <p>모든 거래와 소유권 변경이 블록체인에 기록되어 투명하게 관리됩니다.</p>
          </div>
          <div className="benefit-item">
            <h3>유동성</h3>
            <p>실물 자산의 부분 소유가 가능하며, 손쉬운 거래가 가능합니다.</p>
          </div>
          <div className="benefit-item">
            <h3>효율성</h3>
            <p>스마트 컨트랙트를 통한 자동화된 관리로 비용과 시간을 절감합니다.</p>
          </div>
          <div className="benefit-item">
            <h3>접근성</h3>
            <p>언제 어디서나 자산 정보에 접근하고 관리할 수 있습니다.</p>
          </div>
        </div>
      </section>

      <section className="place-process">
        <h2>Place 생성 프로세스</h2>
        <div className="process-flow">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>자산 등록</h3>
            <p>실물 자산 정보 등록 및 검증</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>토큰화</h3>
            <p>블록체인 상의 디지털 자산 생성</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>스마트 컨트랙트</h3>
            <p>자산 관리 규칙 설정</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>운영</h3>
            <p>자산 관리 및 거래 실행</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Place;