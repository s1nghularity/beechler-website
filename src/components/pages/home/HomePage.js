import React from "react";
import { useEffect } from "react";

import HomeCarousel from "../home/HomeCarousel.js";
import HomeCategories from "../home/HomeCategories.js";
import HomeAbout from "../home/HomeAbout.js";
import HomeBottomCarousel from "./HomeBottomCarousel.js";
import HomeDealer from "../home/HomeDealer.js";
import HomeTestimonials from "../home/HomeTestimonials.js";
import HomeContact from "../home/HomeContact.js";
import ScrollToTop from "../../ScrollToTop.js";

function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#contact", "");
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 0);
    }
  }, []);

  return (
    <div>
      <ScrollToTop />
      <HomeCarousel />
      <HomeAbout />
      <HomeCategories />
      <HomeDealer />
      <HomeBottomCarousel />
      <HomeTestimonials />
      <HomeContact />
    </div>
  );
}

export default HomePage;
