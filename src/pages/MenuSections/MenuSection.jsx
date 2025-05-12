import React from "react";

function MenuSection({ title, items }) {
  return (
    <div
      className="menu-category fade-in"
      id={title.toLowerCase().replaceAll(" ", "-")}
    >
      <h2 className="category-title">{title}</h2>
      {items.map((item, index) => (
        <div className="menu-item" key={index}>
          {item.image && (
            <img src={item.image} alt={item.name} className="menu-img" />
          )}
          <div className="item-info">
            <h3>{item.name}</h3>
            <p className="item-desc">{item.desc}</p>
          </div>
          <span className="item-price">{item.price}</span>
        </div>
      ))}
    </div>
  );
}

export default MenuSection;
