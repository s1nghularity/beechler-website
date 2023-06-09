// Import necessary dependencies
import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import saxIcon from "../../../assets/img/products/sax2.png";
import clarinetIcon from "../../../assets/img/products/clarinet2.png";


const categoryOptions = [
  "Beechler White Diamond",
  "Beechler Tonalex",
  "Beechler Legacy",
  "Beechler Custom",
  "Beechler Bellite",
  "Beechler Bellite Custom",
  "ARB Metal",
  "ARB Custom Metal",
  "Beechler & ARB Ligatures",
  "Beechler & ARB Caps",
  "Beechler Pegs",
  "Accessories",
];

const subtypeOptions = ["Soprano", "Alto", "Tenor", "Baritone"];

// Define the ProductNav component
const ProductNav = ({
  handleCategorySelect,
  handleInstrumentSelect,
  handleSubtypeSelect,
  resetFilters,
}) => {
  const [selectedInstrument, setSelectedInstrument] = React.useState(null);

  const handleInstrumentClick = (instrument) => {
    handleInstrumentSelect(instrument);
    setSelectedInstrument(instrument);
  };

  return (
    <Navbar className="products-navbar">
      <Navbar.Toggle aria-controls="navbarToggler" />
      <Navbar.Collapse id="navbarToggler">
        <Nav>
          {/* {instrumentOptions.map((option, index) => (
            <Nav.Link
              key={index}
              className={`instrument-nav-${option.instrument.toLowerCase()} ${
                option.instrument === selectedInstrument ? "selected" : ""
              }`}
              title="Instrument Type"
              id="navInstrument"
              onClick={() => handleInstrumentClick(option.instrument)}
            >
              <img
                className="instrument-icon"
                src={option.icon}
                alt={`${option.instrument} icon`}
              />
            </Nav.Link>
          ))} */}
          <NavDropdown title="Categories" id="navbarDropdown">
            {categoryOptions.map((category, index) => (
              <NavDropdown.Item
                key={index}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavDropdown title="Type" id="navSubtype">
            {subtypeOptions.map((subtype, index) => (
              <NavDropdown.Item
                key={index}
                onClick={() => handleSubtypeSelect(subtype)}
              >
                {subtype}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Button onClick={resetFilters} className="reset-filters">Reset Filters</Button>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};


export default ProductNav;
