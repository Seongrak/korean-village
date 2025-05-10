import React from "react";

function BBQSection() {
  return (
    <div id="bbq" className="menu-category">
      <h2 className="category-title">BBQ On The Table</h2>

      <div className="menu-item">
        <div className="item-info">
          <h3>LA Galbi</h3>
          <p className="item-desc">
            Grilled marinated beef short ribs sliced across the bone
          </p>
        </div>
        <span className="item-price">$28</span>
      </div>

      <div className="menu-item">
        <div className="item-info">
          <h3>Pork Belly</h3>
          <p className="item-desc">
            Thick slices of pork belly grilled at your table
          </p>
        </div>
        <span className="item-price">$24</span>
      </div>

      <div className="menu-item">
        <div className="item-info">
          <h3>Beef Bulgogi</h3>
          <p className="item-desc">
            Thinly sliced marinated beef, sweet and savory flavor
          </p>
        </div>
        <span className="item-price">$22</span>
      </div>
    </div>
  );
}

export default BBQSection;
