import React from 'react';
import { useAccount } from 'wagmi';
import './Me.css';

const Me: React.FC = () => {
  const { address, isConnected } = useAccount();

  if (!isConnected) {
    return (
      <div className="me-container">
        <div className="connect-prompt">
          <h2>지갑을 연결해주세요</h2>
          <p>프로필을 보려면 지갑 연결이 필요합니다</p>
        </div>
      </div>
    );
  }

  return (
    <div className="me-container">
      <div className="profile-header">
        <div className="profile-cover"></div>
        <div className="profile-info">
          <div className="profile-avatar">
            <img src={`https://avatars.dicebear.com/api/identicon/${address}.svg`} alt="Profile" />
          </div>
          <div className="profile-details">
            <h2>{address?.slice(0, 6)}...{address?.slice(-4)}</h2>
            <p className="wallet-address">{address}</p>
          </div>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <h3>Share</h3>
          <p>23</p>
        </div>
        <div className="stat-card">
          <h3>Tag</h3>
          <p>45</p>
        </div>
        <div className="stat-card">
          <h3>Place</h3>
          <p>12</p>
        </div>
        <div className="stat-card">
          <h3>Space</h3>
          <p>5</p>
        </div>
      </div>

      <div className="activity-feed">
        <h3>최근 활동</h3>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">🌟</div>
            <div className="activity-content">
              <p>새로운 Share를 생성했습니다</p>
              <span className="activity-time">2시간 전</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">🏷️</div>
            <div className="activity-content">
              <p>새로운 Tag를 생성했습니다</p>
              <span className="activity-time">5시간 전</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me; 