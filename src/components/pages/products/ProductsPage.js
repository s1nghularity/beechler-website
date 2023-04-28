import React, { useState, useEffect } from "react";
import ProductsPageSidebar from "../products/ProductsPageSidebar.js";
import ProductsGrid from "../products/ProductsGrid.js";
import { products } from "./ProductsData.js";
import "../../../styles/ProductsPage.css";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [selectedSubtype, setSelectedSubtype] = useState(null);
  const [previousProducts, setPreviousProducts] = useState(products);
  const [filterApplied, setFilterApplied] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFilterApplied(true);
  };

  const handleInstrumentSelect = (instrument) => {
    setSelectedInstrument(instrument);
    setFilterApplied(true);
  };

  const handleSubtypeSelect = (subtype) => {
    setSelectedSubtype(subtype);
    setFilterApplied(true);
  };

  const showToast = () => {
    toast.error("No products available for the selected filters.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const filteredProducts = products.filter(
    (product) =>
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedInstrument || product.instrument === selectedInstrument) &&
      (!selectedSubtype || product.subtype === selectedSubtype)
  );

  useEffect(() => {
    if (filterApplied && filteredProducts.length === 0) {
      showToast();
    } else {
      setPreviousProducts(filteredProducts);
    }
  }, [filteredProducts, filterApplied]);

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(decodeURIComponent(categoryParam));
    }
  }, [location.search]);


  return (
    <Container fluid className="products-page">
      <Row>
        <Col lg={9}>
          <ProductsGrid products={previousProducts} />
        </Col>
        <Col lg={3} className="col-sidebar px-lg-0">
          <ProductsPageSidebar
            handleCategorySelect={handleCategorySelect}
            handleInstrumentSelect={handleInstrumentSelect}
            handleSubtypeSelect={handleSubtypeSelect}
            infoContent={selectedCategory}
            className="products-page-sidebar"
          />
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default ProductsPage;
