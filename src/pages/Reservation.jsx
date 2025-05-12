import React from "react";
import "./Reservation.css";
import HighlightSection from "../pages/HomeSections/HighlightSection";

function Reservation() {
  return (
    <>
      <section className="reservation-page">
        <h1>Make a Reservation</h1>
        <p>
          Please call us at <strong>(416) 536-8361</strong> to make a
          reservation, or use the form below.
        </p>
      </section>
      <HighlightSection />
    </>
  );
}

export default Reservation;
