import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="content-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Company Overview</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/commitment">Our Commitment</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>FAQ</h4>
            <ul>
              <li><a href="/faq">Frequently Asked Questions</a></li>
            </ul>
          </div>
          <div className="footer-section">
          <h4>Follow us</h4>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/beechlermouthpieces/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/beechler_mouthpieces/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </li>
        </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="/data-rights-request">Data Rights Request</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Your Privacy Rights</a></li>
              <li><a href="/ca-transparency">CA Transparency Act</a></li>
              <li><a href="/sitemap">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Accessibility Statement</p>
          <p>©2023 All rights reserved. | beechler.com | Saxophone Mouthpieces, Clarinet Mouthpieces | Crafted with care by S1nghularity</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
