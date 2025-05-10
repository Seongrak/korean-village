import React from "react";
import "./Home.css";
import IntroductionSection from "./HomeSections/IntroductionSection";
import GallerySection from "./HomeSections/GallerySection";
import HighlightSection from "./HomeSections/HighlightSection";

function Home() {
  return (
    <main>
      <IntroductionSection />
      <GallerySection />
      <HighlightSection />
    </main>
  );
}

export default Home;
