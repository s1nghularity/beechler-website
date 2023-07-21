import React from "react";
import { motion } from "framer-motion";

export const Badge = ({ text, color }) => {
  return <div className={`badge ${color}`}>{text}</div>;
};

export const ArrowIcon = ({ isRotated }) => (
  <motion.div
    variants={{
      open: { rotate: 180 },
      closed: {
        rotate: 0,
        transition: { duration: 0.4, ease: "easeInOut" },
      },
    }}
    animate={isRotated ? "open" : "closed"}
    transition={{ duration: 0.2 }}
    style={{ originY: 0.55 }}
    className="products-nav-arrow"
  >
    <svg width="15" height="15" viewBox="0 0 20 20">
      <path d="M0 7 L 20 7 L 10 16" />
    </svg>
  </motion.div>
);

export const MenuButton = ({ children, isOpen, onClick }) => (
  <motion.button
    onClick={onClick}
    className="products-nav-button"
    whileTap={{ scale: 0.97 }}
  >
    {children}
    <ArrowIcon isRotated={isOpen} />
  </motion.button>
);

const menuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    height: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
};

export const MenuOptions = ({ options, isOpen, onOptionSelect }) => (
  <motion.ul
    variants={menuVariants}
    initial="closed"
    animate={isOpen ? "open" : "closed"}
    className="products-nav-list"
  >
    {options.map((option, index) => (
      <motion.li
        key={index}
        className="products-nav-item"
        onClick={() => onOptionSelect(option)}
      >
        {option}
      </motion.li>
    ))}
  </motion.ul>
);
