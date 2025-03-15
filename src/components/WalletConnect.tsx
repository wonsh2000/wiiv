import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useWeb3Modal } from '@web3modal/react';

const WalletConnect: React.FC = () => {
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();

  const handleClick = async () => {
    if (isConnected) {
      await disconnect();
    } else {
      await open();
    }
  };

  return (
    <button 
      className="wallet-login-btn"
      onClick={handleClick}
    >
      <span className="wallet-icon">
        {isConnected ? '🟢' : '🦊'}
      </span>
      {isConnected 
        ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
        : '지갑 연결'
      }
    </button>
  );
};

export default WalletConnect; 