import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';
import useClickOutside from './useClickOutside';
import { MenuButton, Badge, MenuOptions } from './MenuOptions.js';

const ProductsNav2 = ({
  handleCategorySelect,
  handleSubtypeSelect,
  resetFilters,
}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [isMouthpiecesOpen, setIsMouthpiecesOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const isSubmenuOpen = isMouthpiecesOpen || isTypeOpen;
  const badgeIsSelected = !!selectedCategory || !!selectedType;
  

  const handleButtonClick = (selectedMenu) => {
    if (selectedMenu === "mouthpieces") {
      setIsMouthpiecesOpen((prevState) => !prevState);
      if (isTypeOpen) setIsTypeOpen(false);
    } else if (selectedMenu === "type") {
      setIsTypeOpen((prevState) => !prevState);
      if (isMouthpiecesOpen) setIsMouthpiecesOpen(false);
    }
  };

  const handleCategorySelection = (option) => {
    handleCategorySelect(option);
    setSelectedCategory(option);
    setIsMouthpiecesOpen(false);
  };

  const handleSubtypeSelection = (option) => {
    handleSubtypeSelect(option);
    setSelectedType(option);
    setIsTypeOpen(false);
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
      badgeColor = ""; // Default case
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
    <div className="products-nav-container">
      <div className="products-nav-menu">
        <MenuButton isOpen={isMouthpiecesOpen} onClick={() => handleButtonClick("mouthpieces")}>
          Mouthpieces
        </MenuButton>

        <MenuButton isOpen={isTypeOpen} onClick={() => handleButtonClick("type")}>
          Type
        </MenuButton>

        <button className="reset-filters" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>

      <div className="menu-options-container">
        <MenuOptions 
          options={categoryOptions} 
          isOpen={isMouthpiecesOpen} 
          onOptionSelect={handleCategorySelection} 
        />

        <MenuOptions 
          options={subtypeOptions} 
          isOpen={isTypeOpen} 
          onOptionSelect={handleSubtypeSelection} 
        />
      </div>

      <AnimatePresence>
        <motion.div
          className="badges-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: badgeIsSelected ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {selectedCategory && <Badge text={selectedCategory} />}
          {selectedType && <Badge text={selectedType} color={badgeColor} />}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          className="golden-sticker"
          initial="closed"
          animate={isSubmenuOpen ? "open" : "closed"}
        >
          <p>
            All Beechler and ARB mouthpieces have been lab tested and proven safe
            for all long and short term human contact according to Reach
            compliance standards.
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProductsNav2;
