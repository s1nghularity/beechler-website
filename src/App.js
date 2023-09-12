import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as React from "react";
import TopBar from "./components/TopBar.js";
import NavBar from "./components/NavBar.js";
import HomePage from "./components/pages/home/HomePage.js";
import ProductsPage from "./components/pages/products/ProductsPage.js";
import TipOpenings from "./components/pages/tipopenings/TipOpenings.js";
import DealersPage from "./components/pages/dealers/DealersPage.js";
import ArtistsPage from "./components/pages/artists/ArtistsPage.js";
import Gallery from "./components/pages/gallery/Gallery.js";
import AboutPage from "./components/pages/about/AboutPage.js";
import FAQs from "./components/pages/faq/FAQs.js";
import OurCommitment from "./components/pages/commitment/OurCommitment.js";
import Footer from "./components/Footer.js";
import ScrollToTop from "./components/ScrollToTop.js";
import AutoScrollToTop from "./components/AutoScrollToTop.js";
import { Container } from "react-bootstrap";

import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="App" itemScope itemType="https://schema.org/WebPage">
      <Router>
        <AutoScrollToTop />
        <ScrollToTop />
        <TopBar itemScope itemType="https://schema.org/SiteNavigationElement" />
        <NavBar itemScope itemType="https://schema.org/SiteNavigationElement" />
        <Container itemScope itemType="https://schema.org/ItemList">
          <Routes>
            <Route path="/" element={<HomePage className="home-page" itemScope itemType="https://schema.org/WebPageElement" />} />
            <Route path="/products" element={<ProductsPage itemScope itemType="https://schema.org/WebPageElement" />} />
            <Route path="/tip-openings" element={<TipOpenings itemScope itemType="https://schema.org/WebPageElement" />} />
            <Route path="/dealers" element={<DealersPage itemScope itemType="https://schema.org/WebPageElement" />} />
            <Route path="/artists" element={<ArtistsPage itemScope itemType="https://schema.org/WebPageElement" />} />
            <Route path="/about" element={<AboutPage itemScope itemType="https://schema.org/WebPageElement" />} />
            <Route path="/gallery" element={<Gallery itemScope itemType="https://schema.org/WebPageElement" />} />
            <Route path="/faq" element={<FAQs itemScope itemType="https://schema.org/WebPageElement" />} />
            <Route path="/commitment" element={<OurCommitment itemScope itemType="https://schema.org/WebPageElement" />} />
          </Routes>
        </Container>
        <Footer itemScope itemType="https://schema.org/WPFooter" />
      </Router>
    </div>
  );
}