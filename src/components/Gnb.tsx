import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import WalletConnect from './WalletConnect';
import './Gnb.css';

const Gnb = () => {
  return (
    <div className="gnb">
      <Link to="/" className="logo">Wiiv</Link>
      <div className="gnb-left">
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/share">Share</NavLink>
          <NavLink to="/tag">Tag</NavLink>
          <NavLink to="/me">Me</NavLink>
          <NavLink to="/place">Place</NavLink>
          <NavLink to="/space">Space</NavLink>
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
  );
};

export default Gnb; 