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
        <h2>
          Experience <span class="highlight">Authentic Korean Dining</span>
        </h2>
        <p>
          Since <span class="highlight-red">1978</span>, Korean Village has
          brought the soul of
          <span class="highlight"> Korean cuisine</span> to Toronto.
        </p>
        <p>
          <span class="highlight">Family-owned</span> and rooted in tradition,
          we serve
          <span class="highlight"> comforting classics</span> and{" "}
          <span class="highlight"> bold flavors</span>.
        </p>
        <p>
          Come for the food, <span class="highlight">stay for the warmth</span>.
        </p>
      </div>
    </section>
  );
}

export default IntroductionSection;
