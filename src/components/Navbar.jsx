import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img
            src="/KVL.avif"
            alt="Korean Village Logo"
            className="navbar-logo"
          />
          <span className="navbar-title">Korean Village</span>
        </div>
        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservation">Reservation</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
