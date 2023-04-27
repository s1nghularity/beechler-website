// ProductsPage.js
import React, { useState } from "react";
import ProductsPageNav from "../products/ProductsPageNav.js";
import ProductsGrid from "../products/ProductsGrid.js";
import { products } from "./ProductsData.js";
import "../../../styles/ProductsPage.css";
import { Container, Row, Col } from "react-bootstrap";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [selectedSubtype, setSelectedSubtype] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleInstrumentSelect = (instrument) => {
    setSelectedInstrument(instrument);
  };

  const handleSubtypeSelect = (subtype) => {
    setSelectedSubtype(subtype);
  };

  const filteredProducts = products.filter(
    (product) =>
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedInstrument || product.instrument === selectedInstrument) &&
      (!selectedSubtype || product.subtype === selectedSubtype)
  );

  return (
    <Container fluid>
        <Row>
        
        <Col>
          <div className="products-grid">
            <ProductsGrid products={filteredProducts} />
          </div>
        </Col>


          <div className="products-container">
            <ProductsPageNav
              handleCategorySelect={handleCategorySelect}
              handleInstrumentSelect={handleInstrumentSelect}
              handleSubtypeSelect={handleSubtypeSelect}
              infoContent={selectedCategory}
            />
          </div>


      </Row>
    </Container>
  );
};

export default ProductsPage;
