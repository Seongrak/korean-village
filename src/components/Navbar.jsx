import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src="/KVL.avif" alt="Korean Village Logo" className="navbar-logo" />
          <span className="navbar-title">Korean Village</span>
        </div>
        <nav className="navbar-links">
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/reservation">Reservation</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;