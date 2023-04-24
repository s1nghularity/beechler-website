// ProductsPage.js
import React, { useState } from 'react';
import ProductsPageNav from '../products/ProductsPageNav.js'
import ProductsPageList from '../products/ProductsPageList.js';
import { products } from '../products/Products.js';
import '../../../styles/ProductsPage.css';

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
    <div>
      <ProductsPageNav
        handleCategorySelect={handleCategorySelect}
        handleInstrumentSelect={handleInstrumentSelect}
        handleSubtypeSelect={handleSubtypeSelect}
      />
      <ProductsPageList products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;
