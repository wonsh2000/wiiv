import React from 'react';
import { Link } from 'react-router-dom';
import roadmapData from '../metadata/roadmap.json';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="main-slogan">
            WEAVE THE WORLD
          </p>
          <p className="sub-slogan">
            Connecting Reality and Data to Create Infinite Value
          </p>
          <div className="cta-buttons">
            <button className="primary-btn">시작하기</button>
            <button className="secondary-btn">더 알아보기</button>
          </div>
        </div>
      </section>
      
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Share</h3>
            <p>실시간 데이터 공유 및 협업 플랫폼</p>
            <ul>
              <li>실시간 데이터 동기화</li>
              <li>협업 워크스페이스</li>
              <li>데이터 버전 관리</li>
            </ul>
            <Link to="/share" className="service-link">
              자세히 보기 <span className="arrow">→</span>
            </Link>
          </div>

          <div className="service-card">
            <h3>Tag</h3>
            <p>스마트 자산 태깅 시스템</p>
            <ul>
              <li>블록체인 기반 자산 추적</li>
              <li>스마트 태그 관리</li>
              <li>자산 이력 추적</li>
            </ul>
            <Link to="/tag" className="service-link">
              자세히 보기 <span className="arrow">→</span>
            </Link>
          </div>

          <div className="service-card">
            <h3>Place</h3>
            <p>위치 기반 디지털 트윈 서비스</p>
            <ul>
              <li>실시간 위치 모니터링</li>
              <li>공간 데이터 분석</li>
              <li>맞춤형 장소 최적화</li>
            </ul>
            <Link to="/place" className="service-link">
              자세히 보기 <span className="arrow">→</span>
            </Link>
          </div>

          <div className="service-card">
            <h3>Space</h3>
            <p>가상 공간 통합 플랫폼</p>
            <ul>
              <li>3D 공간 시각화</li>
              <li>가상 환경 시뮬레이션</li>
              <li>공간 데이터 통합 관리</li>
            </ul>
            <Link to="/space" className="service-link">
              자세히 보기 <span className="arrow">→</span>
            </Link>
          </div>

          <div className="service-card coming-soon">
            <h3>Coming Soon</h3>
            <p>더 많은 혁신적인 서비스가 준비중입니다</p>
            <ul>
              <li>AI 기반 데이터 분석</li>
              <li>IoT 디바이스 통합</li>
              <li>확장된 블록체인 서비스</li>
            </ul>
            <div className="service-link coming-soon-link">
              준비중 <span className="dots">...</span>
            </div>
          </div>
        </div>
      </section>

      <section className="roadmap">
        <h2>Roadmap</h2>
        <div className="roadmap-description">
          <p className="main-desc">{roadmapData.description.main}</p>
          <p className="sub-desc">{roadmapData.description.sub}</p>
        </div>
        <div className="timeline">
          {roadmapData.phases.map((phase, index) => (
            <div key={phase.date} className="timeline-item">
              <div className="timeline-date">{phase.date}</div>
              <div className="timeline-content">
                <h3>{phase.title}</h3>
                <ul>
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;