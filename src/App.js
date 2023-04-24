import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as React from 'react'

import NavBar  from './components/NavBar.js';
import HomePage from './components/pages/home/HomePage.js';
import ProductsPage from './components/pages/products/ProductsPage.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <Routes>
          <Route path="/"               element={<HomePage/>} />
          <Route path="/products"       element={<ProductsPage/>} />
        </Routes>
      </Router>

    </div>
  );
}




