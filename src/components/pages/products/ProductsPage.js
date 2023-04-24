// ProductsPage.js
import React, { useState } from 'react';
import ProductsPageNav from '../products/ProductsPageNav.js'
import ProductsPageList from '../products/ProductsPageList.js';

const products = [

    //BEECHLER WHITE DIAMOND//
    {
      category: "Beechler White Diamond",
      id: "B07",
      instrument: "Bb Clarinet",
      bore: null,
      price: 199.38,
      tipOpening: Array.from({ length: 12 }, (_, i) => i + 1), // Clarinet: Tip Openings up to 12
      facing: ["Standard", "Medium", "Long"],
    },
    {
      category: "Beechler White Diamond",
      id: "B10",
      instrument: "Sax",
      subtype: "Alto", 
      bore: "Small",
      price: 182.76,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4), // Saxophone: Tip Openings from 4-10
      facing: ["Standard", "Medium", "Long"],
    },
    {
      category: "Beechler White Diamond",
      id: "B11",
      instrument: "Sax",
      subtype: "Alto",
      bore: "Medium",
      price: 182.76,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
      facing: ["Standard", "Medium", "Long"],
    },
    {
      category: "Beechler White Diamond",
      id: "B12",
      instrument: "Sax",
      subtype: "Alto",
      bore: "Large",
      price: 182.76,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
      facing: ["Standard", "Medium", "Long"],
    },
    {
      category: "Beechler White Diamond",
      id: "B14",
      instrument: "Sax",
      subtype: "Tenor",
      bore: "Medium",
      price: 182.76,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
      facing: ["Standard", "Medium", "Long"],
    },
    {
      category: "Beechler White Diamond",
      id: "B16",
      instrument: "Sax",
      subtype: "Baritone",
      bore: null,
      price: 231.56,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
      facing: ["Standard", "Medium", "Long"],
      extras: ["Cap", "Ligature"],
    },

    //BEECHLER WHITE DIAMOND//
    {
      category: "Beechler Tonalex",
      id: "B17",
      instrument: "Clarinet",
      subtype: "BB",
      bore: null,
      price: 210.54,
      tipOpening: Array.from({ length: 12 }, (_, i) => i + 1),
      facing: ["Standard", "Medium", "Long"],
    },
    {
      category: "Beechler Tonalex",
      id: "B18",
      instrument: "Sax",
      subtype: "Alto",
      bore: "Large",
      price: 189.17,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
      facing: ["Standard", "Medium", "Long"],
    },
    {
      category: "Beechler Tonalex",
      id: "B20",
      instrument: "Sax",
      subtype: "Alto",
      bore: "Small",
      price: 189.17,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
      facing: ["Standard", "Medium", "Long"],
    },
    {
      category: "Beechler Tonalex",
      id: "B21",
      instrument: "Sax",
      subtype: "Alto",
      bore: "Medium",
      price: 189.17,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
      facing: ["Standard", "Medium", "Long"],
    },
    {
      category: "Beechler Tonalex",
      id: "B19",
      instrument: "Sax",
      subtype: "Tenor",
      bore: "Medium",
      price: 189.17,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
      facing: ["Standard", "Medium", "Long"],
    },
  ];
  

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
