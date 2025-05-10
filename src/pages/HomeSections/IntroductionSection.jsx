import React from "react";

function IntroductionSection() {
  return (
    <section className="intro-section">
      <img
        src="/outside.avif"
        alt="Korean Village Restaurant Exterior"
        className="intro-banner"
      />

      <div className="intro-text">
        <h2>Experience Authentic Korean Dining</h2>
        <p>
          Since 1978, Korean Village has brought the soul of Korean cuisine to
          Toronto.
        </p>
        <p>
          Family-owned and rooted in tradition, we serve comforting classics and
          bold flavors.
        </p>
        <p>Come for the food, stay for the warmth.</p>
      </div>
    </section>
  );
}

export default IntroductionSection;
