import { products } from "./ProductsData.js";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import { MenuButton, Badge, MenuOptions } from "./MenuOptions.js";



const ProductsNav2 = ({
  handleCategorySelect,
  handleSubtypeSelect,
  resetFilters,
}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [isMouthpiecesOpen, setIsMouthpiecesOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const isSubmenuOpen = isMouthpiecesOpen || isTypeOpen;
  const badgeIsSelected = !!selectedCategory || !!selectedType;
  const [animateSelection, setAnimateSelection] = useState(false);

  useEffect(() => {
    if (animateSelection) {
      setTimeout(() => {
        setAnimateSelection(false);
      }, 1000); // Reset after 1 second (or the duration of your animation)
    }
  }, [animateSelection]);
  

  const handleButtonClick = (selectedMenu) => {
    if (selectedMenu === "mouthpieces") {
      setIsMouthpiecesOpen((prevState) => !prevState);
      if (isTypeOpen) setIsTypeOpen(false);
    } else if (
      selectedMenu === "type" &&
      selectedCategory !== "Accessories & Services"
    ) {
      setIsTypeOpen((prevState) => !prevState);
      if (isMouthpiecesOpen) setIsMouthpiecesOpen(false);
    }
  };

  const handleCategorySelection = (option) => {
    handleCategorySelect(option);
    setSelectedCategory(option);
    if (
      !products.some(
        (product) =>
          product.category === option && product.subtype === selectedType
      )
    ) {
      setSelectedType(null);
    }
    setIsMouthpiecesOpen(false);
    setIsTypeOpen(false);
    setAnimateSelection(true);
  };

  const handleSubtypeSelection = (option) => {
    handleSubtypeSelect(option);
    setSelectedType(option);
    setIsTypeOpen(false);
    setAnimateSelection(true);
  };

  const selectionIsValid = (category, subtype) => {
    if (category === null || subtype === null) {
      return category || subtype;
    }
    return products.some(
      (product) => product.category === category && product.subtype === subtype
    );
  };

  const handleResetFilters = () => {
    resetFilters();
    setSelectedCategory(null);
    setSelectedType(null);
  };

  let badgeColor;
  switch (selectedType) {
    case "Soprano":
      badgeColor = "tomato";
      break;
    case "Alto":
      badgeColor = "gold";
      break;
    case "Tenor":
      badgeColor = "green";
      break;
    case "Baritone":
      badgeColor = "rebeccapurple";
      break;
    default:
      badgeColor = "All"; // Default case
  }

  const categoryOptions = [
    "Beechler Diamond",
    "Beechler Tonalex",
    "Beechler Bellite",
    "Beechler Hard Rubber",
    "Beechler Customized",
    "ARB Metal",
    "ARB Great Neck Originals",
    "Accessories & Services",
  ];

  const subtypeOptions = ["Soprano", "Alto", "Tenor", "Baritone"];

  

  return (
    <AnimatePresence>
    {/* Added 'role' and 'aria-label' attributes for accessibility */}
    <nav role="navigation" aria-label="Product Navigation" className="products-nav-container">
      {/* Added 'role' attribute for accessibility */}
      <div role="menu" className="products-nav-menu">
        <div className="menu-wrapper">
          {/* Added 'aria-haspopup' and 'aria-expanded' attributes for accessibility */}
          <MenuButton
            aria-haspopup="true"
            aria-expanded={isMouthpiecesOpen}
            isOpen={isMouthpiecesOpen}
            onClick={() => handleButtonClick("mouthpieces")}
          >
            Mouthpieces
          </MenuButton>
          <MenuOptions
            options={categoryOptions}
            isOpen={isMouthpiecesOpen}
            onOptionSelect={handleCategorySelection}
          />
        </div>

        <div className="menu-wrapper">
          {/* Added 'aria-haspopup' and 'aria-expanded' attributes for accessibility */}
          <MenuButton
            aria-haspopup="true"
            aria-expanded={isTypeOpen}
            isOpen={isTypeOpen}
            onClick={() => handleButtonClick("type")}
            disabled={selectedCategory === "Accessories & Services"}
          >
            Type
          </MenuButton>
          <MenuOptions
            options={subtypeOptions}
            isOpen={isTypeOpen}
            onOptionSelect={handleSubtypeSelection}
          />
        </div>

        {/* Added 'aria-label' attribute for accessibility */}
        <button aria-label="Reset Filters" className="reset-filters" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>

        <div className="submenu-badges-sticker-container">
          {" "}
          <motion.div
            className="badges-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: badgeIsSelected ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectionIsValid(selectedCategory, selectedType) && (
              <React.Fragment>
                {selectedCategory && <Badge text={selectedCategory} />}
                {selectedType && (
                  <Badge text={selectedType} color={badgeColor} />
                )}
              </React.Fragment>
            )}
          </motion.div>
          <motion.div
            className="golden-sticker"
            initial="closed"
            animate={isSubmenuOpen ? "open" : "closed"}
          >
            <p>
              All Beechler and ARB mouthpieces have been lab tested and proven
              safe for all long and short term human contact according to Reach
              compliance standards.
            </p>
          </motion.div>
        </div>
      </nav>
    </AnimatePresence>
  );
};

export default ProductsNav2;
