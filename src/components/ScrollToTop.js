// ScrollToTop.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/NavBar.css';
import '../styles/theme.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    // ARIA role for a button
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} role="button" tabIndex="0">
      <button
        onClick={scrollToTop}
        className="scroll-to-top-button"
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon
          icon={faChevronUp}
          className="scroll-to-top-chevron"
          style={{ color: 'gold' }}
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default ScrollToTop;
