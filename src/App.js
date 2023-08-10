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
import { Container } from "react-bootstrap";

import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <TopBar />
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage className="home-page"/>} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/tip-openings" element={<TipOpenings />} />
            <Route path="/dealers" element={<DealersPage />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQs />} />
            <Route path="/commitment" element={<OurCommitment />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}
