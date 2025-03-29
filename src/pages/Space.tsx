import React from 'react';
import './Space.css';

const Space: React.FC = () => {
  return (
    <div className="space-container">
      <section className="space-hero">
        <h1>Space</h1>
        <p className="space-description">
          블록체인 상에서 현실 세계와 동기화되는 시공간 데이터 플랫폼
        </p>
      </section>

      <section className="space-overview">
        <div className="overview-grid">
          <div className="overview-card">
            <div className="card-icon">🌐</div>
            <h3>디지털 트윈</h3>
            <p>실제 공간과 1:1로 매칭되는 디지털 공간 구현</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">⏱️</div>
            <h3>시간 동기화</h3>
            <p>실시간 데이터 업데이트 및 이력 관리</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">📍</div>
            <h3>공간 매핑</h3>
            <p>정확한 위치 기반 데이터 구조화</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">🔄</div>
            <h3>실시간 연동</h3>
            <p>IoT 센서 및 외부 데이터 통합</p>
          </div>
        </div>
      </section>

      <section className="space-features">
        <h2>주요 기능</h2>
        <div className="features-container">
          <div className="feature-item">
            <h3>데이터 수집</h3>
            <ul>
              <li>IoT 센서 데이터 실시간 수집</li>
              <li>환경 데이터 모니터링</li>
              <li>위치 기반 정보 통합</li>
              <li>외부 API 연동</li>
            </ul>
          </div>
          <div className="feature-item">
            <h3>데이터 가공</h3>
            <ul>
              <li>시계열 데이터 정규화</li>
              <li>공간 데이터 구조화</li>
              <li>데이터 검증 및 보정</li>
              <li>메타데이터 생성</li>
            </ul>
          </div>
          <div className="feature-item">
            <h3>데이터 활용</h3>
            <ul>
              <li>실시간 모니터링</li>
              <li>예측 분석</li>
              <li>이상 감지</li>
              <li>의사결정 지원</li>
            </ul>
          </div>
          <div className="feature-item">
            <h3>데이터 관리</h3>
            <ul>
              <li>블록체인 기반 데이터 저장</li>
              <li>접근 권한 관리</li>
              <li>데이터 무결성 검증</li>
              <li>이력 추적</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-applications">
        <h2>활용 분야</h2>
        <div className="applications-grid">
          <div className="application-card">
            <div className="app-icon">🏢</div>
            <h3>스마트 빌딩</h3>
            <p>건물 관리 및 에너지 효율화</p>
          </div>
          <div className="application-card">
            <div className="app-icon">🏭</div>
            <h3>산업 현장</h3>
            <p>생산 공정 최적화 및 안전 관리</p>
          </div>
          <div className="application-card">
            <div className="app-icon">🌆</div>
            <h3>스마트 시티</h3>
            <p>도시 인프라 통합 관제</p>
          </div>
          <div className="application-card">
            <div className="app-icon">🌳</div>
            <h3>환경 모니터링</h3>
            <p>환경 데이터 수집 및 분석</p>
          </div>
        </div>
      </section>

      <section className="space-workflow">
        <h2>Space 구축 프로세스</h2>
        <div className="workflow-steps">
          <div className="workflow-step">
            <div className="step-number">1</div>
            <h3>공간 정의</h3>
            <p>대상 공간 선정 및 경계 설정</p>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <div className="step-number">2</div>
            <h3>센서 설치</h3>
            <p>데이터 수집 인프라 구축</p>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <div className="step-number">3</div>
            <h3>데이터 연동</h3>
            <p>실시간 데이터 수집 및 동기화</p>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <div className="step-number">4</div>
            <h3>서비스 운영</h3>
            <p>모니터링 및 데이터 활용</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Space;