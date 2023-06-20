import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

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

const ProductNav = ({
  handleCategorySelect,
  handleSubtypeSelect,
  resetFilters,
}) => {
  const renderNavDropdownItems = (options, handleClick) => {
    return options.map((option, index) => (
      <NavDropdown.Item key={index} onClick={() => handleClick(option)}>
        {option}
      </NavDropdown.Item>
    ));
  };

  return (
    <Navbar className="products-navbar">
      <Navbar.Toggle aria-controls="navbarToggler" />
      <Navbar.Collapse id="navbarToggler">
        <Nav>
          <NavDropdown title="Categories" id="navbarDropdown">
            {renderNavDropdownItems(categoryOptions, handleCategorySelect)}
          </NavDropdown>
          <NavDropdown title="Type" id="navSubtype">
            {renderNavDropdownItems(subtypeOptions, handleSubtypeSelect)}
          </NavDropdown>
          <Button onClick={resetFilters} className="reset-filters">Reset Filters</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ProductNav;
