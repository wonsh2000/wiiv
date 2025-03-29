import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Share from './pages/Share';
import Tag from './pages/Tag';
import Place from './pages/Place';
import Space from './pages/Space';
import Gnb from './components/Gnb';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { arbitrum, mainnet } from 'viem/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Me from './pages/Me';
import Wallet from './pages/Wallet';

const projectId = 'c844651d96959d2b5108f5947185b231';
const queryClient = new QueryClient();

const metadata = {
  name: 'Wiiv',
  description: 'Wiiv Platform',
  url: 'https://wiiv.xyz',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [mainnet, arbitrum] as const;
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({
  wagmiConfig,
  projectId,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-font-family': 'inherit',
    '--w3m-accent': '#03c75a'
  }
});

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="app-layout">
            <header>
              <Gnb />
            </header>
            <main>
              <div className="container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Navigate to="/" replace />} />
                  <Route path="/share" element={<Share />} />
                  <Route path="/tag" element={<Tag />} />
                  <Route path="/place" element={<Place />} />
                  <Route path="/space" element={<Space />} />
                  <Route path="/wallet" element={<Wallet />} />
                  <Route path="/me" element={<Me />} />
                </Routes>
              </div>
            </main>
          </div>
        </Router>
      </QueryClientProvider>
    </WagmiConfig>
  );
}

export default App;
