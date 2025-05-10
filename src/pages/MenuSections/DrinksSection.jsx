import React from "react";

function DrinksSection() {
  return (
    <div id="drinks" className="menu-category">
      <h2 className="category-title">Drinks</h2>

      <div className="menu-item">
        <div className="item-info">
          <h3>Sikhye</h3>
          <p className="item-desc">Traditional sweet rice drink</p>
        </div>
        <span className="item-price">$4</span>
      </div>

      <div className="menu-item">
        <div className="item-info">
          <h3>Soju</h3>
          <p className="item-desc">Popular Korean distilled beverage</p>
        </div>
        <span className="item-price">$10</span>
      </div>

      <div className="menu-item">
        <div className="item-info">
          <h3>Makgeolli</h3>
          <p className="item-desc">
            Korean rice wine with smooth and sweet flavor
          </p>
        </div>
        <span className="item-price">$9</span>
      </div>
    </div>
  );
}

export default DrinksSection;
