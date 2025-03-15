import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';
import Link from 'next/link';

export default function GNB() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  const handleConnect = async () => {
    try {
      await open();
    } catch (error) {
      console.error('지갑 연결 중 오류 발생:', error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Wiiv</Link>
        <div className="flex items-center gap-4">
          {isConnected ? (
            <button 
              className="px-4 py-2 bg-gray-100 rounded-full text-sm"
              onClick={handleConnect}
            >
              {`${address?.slice(0, 6)}...${address?.slice(-4)}`}
            </button>
          ) : (
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition-colors"
              onClick={handleConnect}
            >
              지갑 연결
            </button>
          )}
        </div>
      </div>
    </nav>
  );
} 