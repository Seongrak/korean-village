import React from "react";
import "./Menu.css";
import DrinksSection from "./MenuSections/DrinksSection";
import DishesSection from "./MenuSections/DishesSection";
import BBQSection from "./MenuSections/BBQSection";

function Menu() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="menu-section">
      <h1 className="menu-title">Our Menu</h1>

      <div className="menu-nav">
        <button onClick={() => scrollToSection("dishes")}>Dishes</button>
        <button onClick={() => scrollToSection("bbq")}>BBQ On The Table</button>
        <button onClick={() => scrollToSection("drinks")}>Drinks</button>
      </div>

      <DishesSection />
      <BBQSection />
      <DrinksSection />
    </section>
  );
}

export default Menu;
