import React from "react";

function HighlightSection() {
  return (
    <section className="highlight-section">
      <div className="highlight-container">
        <h2>Visit Us</h2>
        <p>Open Daily · 11:00 AM – 9:30 PM</p>
        <p>123 Bloor St. W, Toronto, ON</p>
        <a
          href="https://forms.gle/your-reservation-form"
          target="_blank"
          rel="noopener noreferrer"
          className="reserve-button"
        >
          Make a Reservation
        </a>
      </div>
    </section>
  );
}

export default HighlightSection;
