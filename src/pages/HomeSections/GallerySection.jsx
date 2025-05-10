import React from "react";

function GallerySection() {
  return (
    <section className="gallery-section">
      <h2>Popular Dishes</h2>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="/tbk.avif" alt="Tteokbokki" />
        </div>
        <div className="gallery-item">
          <img src="/kalbi.avif" alt="Galbi" />
        </div>
        <div className="gallery-item">
          <img src="/bbq.avif" alt="bbq" />
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
