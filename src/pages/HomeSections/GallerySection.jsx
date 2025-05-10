import React, { useEffect } from "react";

function GallerySection() {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Popular Dishes</h2>

      <div className="gallery-item fade-in">
        <p className="caption">Tteokbokki (Spicy Rice Cakes)</p>
        <img src="/tbk.avif" alt="Tteokbokki" />
      </div>

      <div className="gallery-item fade-in">
        <p className="caption">Grilled Galbi (Beef Short Ribs)</p>
        <img src="/kalbi.avif" alt="Grilled Galbi" />
      </div>

      <div className="gallery-item fade-in">
        <p className="caption">Bibimbap</p>
        <img src="/bibimbap.avif" alt="bibimbap" />
      </div>
    </section>
  );
}

export default GallerySection;
