import React from "react";

function DishesSection() {
  return (
    <div id="dishes" className="menu-category">
      <h2 className="category-title">Dishes</h2>

      <div className="menu-item">
        <div className="item-info">
          <h3>Bibimbap</h3>
          <p className="item-desc">
            Mixed rice with vegetables and fried egg (beef or tofu)
          </p>
        </div>
        <span className="item-price">$17</span>
      </div>

      <div className="menu-item">
        <div className="item-info">
          <h3>Kimchi Stew</h3>
          <p className="item-desc">
            Spicy stew with fermented kimchi, pork, and tofu
          </p>
        </div>
        <span className="item-price">$16</span>
      </div>

      <div className="menu-item">
        <div className="item-info">
          <h3>Seafood Pancake</h3>
          <p className="item-desc">
            Pan-fried Korean-style pancake with green onion and seafood
          </p>
        </div>
        <span className="item-price">$18</span>
      </div>
    </div>
  );
}

export default DishesSection;
