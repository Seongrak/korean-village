import React from "react";
import "./Home.css";
import IntroductionSection from "./HomeSections/IntroductionSection";
import GallerySection from "./HomeSections/GallerySection";
import HighlightSection from "./HomeSections/HighlightSection";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <main>
      <HeroSection />
      <GallerySection />
      <IntroductionSection />
      <HighlightSection />
    </main>
  );
}

export default Home;
