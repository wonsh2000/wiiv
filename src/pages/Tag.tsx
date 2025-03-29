import React from 'react';
import './Tag.css';

const Tag: React.FC = () => {
  return (
    <div className="tag-container">
      <section className="tag-hero">
        <h1>Tag</h1>
        <p className="tag-description">
          블록체인 기반의 스마트 자산 태깅 시스템
        </p>
      </section>

      <section className="tag-overview">
        <div className="overview-grid">
          <div className="overview-card">
            <div className="card-icon">🏷️</div>
            <h3>스마트 태깅</h3>
            <p>블록체인 기반 디지털 자산 식별</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">🔍</div>
            <h3>자산 추적</h3>
            <p>실시간 위치 및 상태 모니터링</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">🔐</div>
            <h3>보안 인증</h3>
            <p>암호화 기반 위변조 방지</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">📱</div>
            <h3>모바일 연동</h3>
            <p>스마트폰 기반 태그 스캔</p>
          </div>
        </div>
      </section>

      <section className="tag-features">
        <h2>주요 기능</h2>
        <div className="features-container">
          <div className="feature-item">
            <h3>태그 생성</h3>
            <ul>
              <li>고유 식별자 생성</li>
              <li>메타데이터 설정</li>
              <li>소유권 등록</li>
              <li>권한 설정</li>
            </ul>
          </div>
          <div className="feature-item">
            <h3>자산 관리</h3>
            <ul>
              <li>위치 추적</li>
              <li>상태 모니터링</li>
              <li>이력 관리</li>
              <li>소유권 이전</li>
            </ul>
          </div>
          <div className="feature-item">
            <h3>데이터 연동</h3>
            <ul>
              <li>IoT 센서 통합</li>
              <li>실시간 데이터 수집</li>
              <li>API 연동</li>
              <li>데이터 분석</li>
            </ul>
          </div>
          <div className="feature-item">
            <h3>보안 기능</h3>
            <ul>
              <li>암호화 인증</li>
              <li>접근 제어</li>
              <li>변조 감지</li>
              <li>이력 추적</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tag-applications">
        <h2>활용 분야</h2>
        <div className="applications-grid">
          <div className="application-card">
            <div className="app-icon">📦</div>
            <h3>물류 관리</h3>
            <p>실시간 배송 추적 및 관리</p>
          </div>
          <div className="application-card">
            <div className="app-icon">🏭</div>
            <h3>제조 공정</h3>
            <p>생산품 이력 관리</p>
          </div>
          <div className="application-card">
            <div className="app-icon">🏪</div>
            <h3>유통 관리</h3>
            <p>상품 진위 여부 확인</p>
          </div>
          <div className="application-card">
            <div className="app-icon">🎨</div>
            <h3>예술품</h3>
            <p>작품 인증 및 소유권 관리</p>
          </div>
        </div>
      </section>

      <section className="tag-process">
        <h2>태그 사용 프로세스</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>태그 생성</h3>
            <p>디지털 태그 발급</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>자산 연결</h3>
            <p>실물 자산과 태그 연동</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>데이터 등록</h3>
            <p>자산 정보 입력</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>추적 관리</h3>
            <p>실시간 모니터링</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tag; 