import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import WalletConnect from './WalletConnect';
import './Gnb.css';

const Gnb = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`gnb ${isScrolled ? 'scrolled' : ''}`}>
      <div className="gnb-content">
        <Link to="/" className="logo">Wiiv</Link>
        <div className="gnb-left">
          <nav>
            <NavLink to="/share">Share</NavLink>
            <NavLink to="/tag">Tag</NavLink>
            <NavLink to="/place">Place</NavLink>
            <NavLink to="/space">Space</NavLink>
            <NavLink to="/wallet">Wallet</NavLink>
            <NavLink to="/me">Me</NavLink>
          </nav>
        </div>
        <div className="gnb-right">
          <ul>
            <li>
              <WalletConnect />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gnb;