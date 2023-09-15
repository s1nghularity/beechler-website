import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import ProductsNav2 from "./ProductsNav2";
import DynamicInfo from "./DynamicInfo";
import { productInfo } from './DataDynamicInfo.js';

import ProductsGrid from "./ProductsGrid.js";
import { products } from "./ProductsData.js";
import EmailSignup from "./EmailSignup.js";
import ScrollToTop from "../../ScrollToTop.js";
import "../../../styles/ProductsPage.css";
import "../../../styles/ProductsNav2.css";


const ProductSchema = (product, productInfo) => {
 
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": `${product.category} - ${product.id}`,
    "description": productInfo[product.category].description,
    "sku": product.id,
    "gtin14": product.gtin14,
    "brand": {
      "@type": "Brand",
      "name": "Beechler"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": product.price,
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "image": {
      "@type": "ImageObject",
      "contentUrl": product.image
    },
  };
};


const ProductsPage = ({ product }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubtype, setSelectedSubtype] = useState(null);
  const [previousProducts, setPreviousProducts] = useState(products);
  const [filterApplied, setFilterApplied] = useState(false);
  const [productSchemas, setProductSchemas] = useState([]);

  useEffect(() => {
    const schemas = products.map(product => ProductSchema(product, productInfo));
    setProductSchemas(schemas);
  }, []);

  useEffect(() => {
    const jsonld = {
      "@context": "https://schema.org/",
      "@type": "ItemList",
      "itemListElement": productSchemas
    };
    let script = document.querySelector('script[type="application/ld+json"]');
    
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    
    script.innerHTML = JSON.stringify(jsonld);
  }, [productSchemas]);

  const filteredProducts = products.filter(
    (product) =>
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedSubtype || product.subtype === selectedSubtype)
  );

  

  // HANDLES PRODUCTNAV FILTERS//
  const handleCategorySelect = (category) => {
    console.log(`Selected category: ${category}`);
    setSelectedCategory(category);
    setFilterApplied(true);
  };

  const handleSubtypeSelect = (subtype) => {
    console.log(`Selected subtype: ${subtype}`);
    setSelectedSubtype(subtype);
    setFilterApplied(true);
  };

  const resetFilters = () => {
    if (selectedCategory || selectedSubtype) {
      setSelectedCategory(null);
      setSelectedSubtype(null);
      setFilterApplied({});
    }
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

  useEffect(() => {
    if (filterApplied) {
      if (filteredProducts.length === 0) {
        showToast();
        setSelectedCategory(null); // reset selectedCategory
        setFilterApplied(false);
      } else {
        setPreviousProducts(filteredProducts);
        setFilterApplied(false);
      }
    }
  }, [filteredProducts, filterApplied]);

  useEffect(() => {
    console.log("Current Products: ", products);
  }, [products]);

  // HOMEPAGE CATEGORY SELECTION FILTER INTO PRODUCT CATEGORY//
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
    <AnimatePresence>
      <Container fluid className="products-page">
        <Row>
          <Col sm={12} md={12} lg={4} xl={4}>
            <ProductsNav2
              handleCategorySelect={handleCategorySelect}
              handleSubtypeSelect={handleSubtypeSelect}
              resetFilters={resetFilters}
            />
          </Col>
          <Col sm={12} md={12} lg={8} xl={8}>
            <ProductsGrid
              products={previousProducts}
              selectedCategory={selectedCategory}
              selectedSubtype={selectedSubtype}
            />
          </Col>

          <DynamicInfo infoContent={selectedCategory} />

          <Row sm={12} md={12} lg={12} xl={12}>
            <div className="product-email-signup">
              <Button href="/dealers" className="find-dealer">
                Find a store near you!
              </Button>
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
    </AnimatePresence>
  );
};

export default ProductsPage;
