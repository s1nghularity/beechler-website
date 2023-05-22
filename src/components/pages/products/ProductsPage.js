import React, { useState, useEffect } from "react";
import ProductsPageSidebar from "../products/ProductsPageSidebar.js";
import ProductsGrid from "../products/ProductsGrid.js";
import { products } from "./ProductsData.js";
import "../../../styles/ProductsPage.css";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop.js";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [selectedSubtype, setSelectedSubtype] = useState(null);
  const [previousProducts, setPreviousProducts] = useState(products);
  const [filterApplied, setFilterApplied] = useState(false);

  const handleCategorySelect = (category) => {
    console.log(`Selected category: ${category}`);
    setSelectedCategory(category);
    setFilterApplied(true);
  };

  const handleInstrumentSelect = (instrument) => {
    console.log(`Selected instrument: ${instrument}`);
    setSelectedInstrument(instrument);
    setFilterApplied(true);
  };

  const handleSubtypeSelect = (subtype) => {
      console.log(`Selected subtype: ${subtype}`);
    setSelectedSubtype(subtype);
    setFilterApplied(true);
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedInstrument(null);
    setSelectedSubtype(null);
    setFilterApplied(false);
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
    if (filterApplied) {
      if (filteredProducts.length === 0) {
        console.log("No products available for the selected filters.");
        showToast();
        setFilterApplied(false); 
      } else {
        console.log(`Filtered products: ${JSON.stringify(filteredProducts)}`);
        setPreviousProducts(filteredProducts);
        setFilterApplied(false); 
      }
    }
  }, [filteredProducts, filterApplied]);
  
  useEffect(() => {
    console.log(`Selected category: ${selectedCategory}`);
    console.log(`Selected instrument: ${selectedInstrument}`);
    console.log(`Selected subtype: ${selectedSubtype}`);
  }, [selectedCategory, selectedInstrument, selectedSubtype]);


  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const decodedCategory = decodeURIComponent(categoryParam);
      if (decodedCategory !== selectedCategory) {
        setSelectedCategory(decodedCategory);
        handleCategorySelect(decodedCategory);
      }
    }
  }, [location.search, selectedCategory]);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  


  return (
    <Container fluid className="products-page">
      <Row>
      <Col sm={12} lg={3} className="col-sidebar px-lg-0">
          <ProductsPageSidebar
            handleCategorySelect={handleCategorySelect}
            handleInstrumentSelect={handleInstrumentSelect}
            handleSubtypeSelect={handleSubtypeSelect}
            resetFilters={resetFilters}
            infoContent={selectedCategory}
            className="products-page-sidebar"
          />
        </Col>

        <Col sm={12} lg={9}>

          <ProductsGrid products={previousProducts} />
          <ScrollToTop />
        </Col>

      </Row>
      <ToastContainer />
    </Container>
  );
};

export default ProductsPage;


