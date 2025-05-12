import React, { useEffect, useRef } from "react";

function GallerySection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll('.zoom-in');
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("zoom-in-visible");
          } else {
            entry.target.classList.remove("zoom-in-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <section className="gallery-section" ref={sectionRef}>
      <h2 className="gallery-title zoom-in">Popular Dishes</h2>
      <div className="gallery-grid">
        <div className="gallery-item zoom-in">
          <img src="/tbk.avif" alt="Tteokbokki" />
          <p className="caption">Tteokbokki (Spicy Rice Cakes)</p>
        </div>
        <div className="gallery-item zoom-in">
          <img src="/kalbi.avif" alt="Grilled Galbi" />
          <p className="caption">Grilled Galbi (Beef Short Ribs)</p>
        </div>
        <div className="gallery-item zoom-in">
          <img src="/bibimbap.avif" alt="Bibimbap" />
          <p className="caption">Bibimbap</p>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
