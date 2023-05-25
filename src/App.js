import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as React from 'react';

import NavBar from './components/NavBar.js';
import HomePage from './components/pages/home/HomePage.js';
import ProductsPage from './components/pages/products/ProductsPage.js';
import TipOpenings from './components/pages/tipopenings/TipOpenings.js';
import DealersPage from "./components/pages/dealers/DealersPage.js";
import ArtistsPage from "./components/pages/artists/ArtistsPage.js";
import AboutPage from "./components/pages/about/AboutPage.js";
import Footer from "./components/Footer.js";
import "leaflet/dist/leaflet.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Router>

        <div className="header-container">
        <NavBar />
        </div>
        
        <div className="main-content">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/tip-openings" element={<TipOpenings />} />
            <Route path="/dealers" element={<DealersPage />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          </div>

        <Footer />
      </Router>
    </div>
  );
}
