"use client";

import React from "react";
import Carousel from "../components/Carousel";
import WhoWeAre from "../components/WhoWeAre";
import Products from "../components/Products";
import { useDarkMode } from "./layout";

export default function Home() {
  const { darkMode } = useDarkMode();

  return (
    <div>
      <section id="home">
        <Carousel darkMode={darkMode} />
      </section>
      <WhoWeAre darkMode={darkMode} />
      <Products darkMode={darkMode} />
    </div>
  );
}
