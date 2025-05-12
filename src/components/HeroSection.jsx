import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to Korean Village</h1>
        <p className="hero-subtitle">
          Family-owned since 1978. Authentic Korean flavors, right in the heart
          of Toronto.
        </p>
        <a href="/menu" className="hero-button">
          Explore Menu
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
