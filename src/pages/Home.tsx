import React from 'react';
import TVLCirclePacking from '../components/TVLCirclePacking';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="gradient-text">Web3</span> 
            <span className="highlight">Social Platform</span>
          </h1>
          <p className="subtitle">
            Share your moments, Tag your memories, Create your space
          </p>
          <div className="cta-buttons">
            <button className="primary-btn">Start Exploring</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </section>

      <section className="tvl-section">
        <h2>Total Value Locked</h2>
        <TVLCirclePacking />
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🌟</div>
          <h3>Share</h3>
          <p>Share your moments with the community</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🏷️</div>
          <h3>Tag</h3>
          <p>Tag and categorize your content</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Place</h3>
          <p>Create and discover unique places</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Space</h3>
          <p>Build your own digital space</p>
        </div>
      </section>
    </div>
  );
};

export default Home; 