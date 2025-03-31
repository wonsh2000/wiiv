import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Gnb.css';

const Gnb = () => {
  return (
    <div className="gnb">
      <Link to="/" className="logo">Wiiv</Link>
      <div className="gnb-left">
        <nav>
          <NavLink to="/share">Share</NavLink>
          <NavLink to="/tag">Tag</NavLink>
          <NavLink to="/place">Place</NavLink>
          <NavLink to="/space">Space</NavLink>
          <NavLink to="/me">Me</NavLink>
        </nav>
      </div>
      <div className="gnb-right">
        <ul>
          <li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gnb;
