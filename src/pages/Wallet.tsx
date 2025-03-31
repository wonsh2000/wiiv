import React from 'react';
import './Wallet.css';

const Wallet: React.FC = () => {
  return (
    <div className="wallet-container">
      <section className="wallet-hero">
        <h1>Wallet</h1>
        <p className="wallet-description">
          블록체인 자산 관리 및 거래 플랫폼
        </p>
      </section>

      <section className="wallet-overview">
        <div className="overview-grid">
          <div className="overview-card">
            <div className="card-icon">💰</div>
            <h3>자산 관리</h3>
            <p>디지털 자산 포트폴리오 관리</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">🔄</div>
            <h3>거래</h3>
            <p>안전하고 빠른 자산 거래</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">📊</div>
            <h3>분석</h3>
            <p>자산 현황 및 거래 분석</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">🔐</div>
            <h3>보안</h3>
            <p>안전한 자산 보관 및 관리</p>
          </div>
        </div>
      </section>

      <section className="wallet-features">
        <h2>주요 기능</h2>
        <div className="features-container">
          <div className="feature-item">
            <h3>자산 관리</h3>
            <ul>
              <li>토큰 잔액 확인</li>
              <li>NFT 관리</li>
              <li>거래 내역</li>
              <li>포트폴리오 분석</li>
            </ul>
          </div>
          <div className="feature-item">
            <h3>거래 기능</h3>
            <ul>
              <li>토큰 전송</li>
              <li>NFT 거래</li>
              <li>스왑</li>
              <li>크로스체인 브릿지</li>
            </ul>
          </div>
          <div className="feature-item">
            <h3>보안 기능</h3>
            <ul>
              <li>다중 서명</li>
              <li>거래 확인</li>
              <li>백업 및 복구</li>
              <li>접근 제어</li>
            </ul>
          </div>
          <div className="feature-item">
            <h3>부가 기능</h3>
            <ul>
              <li>가스비 최적화</li>
              <li>알림 설정</li>
              <li>리포트 생성</li>
              <li>API 연동</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wallet; 