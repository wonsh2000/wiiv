import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="gradient-text">WIIV</span> 
            <span className="highlight">Digital Twin Platform</span>
          </h1>
          <p className="subtitle">
            현실과 데이터를 연결하여 새로운 가치를 창출합니다
          </p>
          <div className="cta-buttons">
            <button className="primary-btn">시작하기</button>
            <button className="secondary-btn">더 알아보기</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🌍</div>
          <h3>실시간 연동</h3>
          <p>실제 세계의 데이터를 실시간으로 수집하고 분석합니다</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔄</div>
          <h3>디지털 트윈</h3>
          <p>현실과 디지털 세계를 완벽하게 동기화합니다</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>데이터 분석</h3>
          <p>수집된 데이터를 통해 인사이트를 도출합니다</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💡</div>
          <h3>가치 창출</h3>
          <p>분석된 데이터로 새로운 비즈니스 가치를 만듭니다</p>
        </div>
      </section>
    </div>
  );
};

export default Home;