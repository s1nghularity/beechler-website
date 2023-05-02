import "../styles/NavBar.css";
import "../styles/theme.css";
import React, { useState, useEffect } from "react";


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
  

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }, []);
  
    return (
      <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
        <button onClick={scrollToTop} className="scroll-to-top-button">
          &#x2191;
        </button>
      </div>
    );
  };
  
  export default ScrollToTop;