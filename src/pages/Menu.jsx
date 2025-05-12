import React, { useState } from "react";
import { menuData } from "./MenuSections/menuData";
import MenuSection from "./MenuSections/MenuSection";
import "./Menu.css";

function Menu() {
  const [activeTab, setActiveTab] = useState(menuData[0].category);

  return (
    <section className="menu-section" id="top">
      <h1 className="menu-title">Our Menu</h1>

      <div className="menu-nav">
        {menuData.map((section, i) => (
          <button
            key={i}
            className={`menu-button ${
              activeTab === section.category ? "active" : ""
            }`}
            onClick={() => setActiveTab(section.category)}
          >
            {section.category}
          </button>
        ))}
      </div>

      {/* ✅ 선택된 탭만 보여줌 */}
      {menuData
        .filter((section) => section.category === activeTab)
        .map((section, i) => (
          <MenuSection
            key={activeTab}
            title={section.category}
            items={section.items}
          />
        ))}

      {/* 위로 가는 버튼 (모바일 전용) */}
      <a href="#top" className="scroll-top-button">
        ⬆ Back to Top
      </a>
    </section>
  );
}

export default Menu;
