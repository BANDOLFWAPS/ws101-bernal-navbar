import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from './ramon.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <img 
        src={logo} 
        alt="Bandolf Programming Logo" 
        className="logo" 
        onClick={() => { window.location.href = '/home'; }} 
      />
      <span className="header-title">BANDOLF</span>
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink exact to="/home" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
