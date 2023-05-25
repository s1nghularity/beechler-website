import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

import ProductNav from "./ProductNav";
import ProductNavInfo from "./ProductNavInfo";
import ProductsGrid from "./ProductsGrid.js";
import { products } from "./ProductsData.js";
import EmailSignup from "./EmailSignup.js";
import ScrollToTop from "../../ScrollToTop.js";
import "../../../styles/ProductsPage.css";
import "../../../styles/ProductNav.css";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [selectedSubtype, setSelectedSubtype] = useState(null);
  const [previousProducts, setPreviousProducts] = useState(products);
  const [filterApplied, setFilterApplied] = useState(false);

  //HANDLES PRODUCTNAV FILTERS//
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
      draggable: false,
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
        setSelectedCategory(null); // reset selectedCategory
        setFilterApplied(false);
      } else {
        console.log(`Filtered products: ${JSON.stringify(filteredProducts)}`);
        setPreviousProducts(filteredProducts);
        setFilterApplied(false);
      }
    }
  }, [filteredProducts, filterApplied]);
  

  //HOMEPAGE CATEGORY SELECTION FILTER INTO PRODUCT CATEEGORY//
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
  }, [location.search]);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container fluid className="products-page">
      <Row>
        <Col sm={12} md={12} lg={4} xl={4} className="sticky-column">
          <ProductNav
            handleCategorySelect={handleCategorySelect}
            handleInstrumentSelect={handleInstrumentSelect}
            handleSubtypeSelect={handleSubtypeSelect}
            resetFilters={resetFilters}
          />
          <ProductNavInfo infoContent={selectedCategory} selectedInstrument={selectedInstrument} />

            <Button href="/dealers" className="find-dealer">
              Find a store near you!
            </Button>

        </Col>
        <Col sm={12} md={12} lg={8} xl={8}>
          <ProductsGrid products={previousProducts} />
        </Col>

        <Row sm={12} md={12} lg={12} xl={12}>
          <div className="product-email-signup">
            <h2>EXPERT ADVICE ON THE BEST VALUE</h2>
            <p>
              Serving musicians since 1942, Remle Musical Products is honored to
              be part of your musical journey.
            </p>
            <Col sm={6} md={6} lg={6} xl={6}>
              <div className="email-signup-form">
                <EmailSignup />
              </div>
            </Col>
          </div>
        </Row>
      </Row>

      <ScrollToTop />
      <ToastContainer />
    </Container>
  );
};
export default ProductsPage;
