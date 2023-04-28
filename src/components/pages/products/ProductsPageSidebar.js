import React from "react";
import { useState } from "react";
import { Navbar, Nav, NavDropdown, NavItem, Container } from "react-bootstrap";
import "../../../styles/ProductsPageSidebar.css";
import saxIcon from "../../../assets/img/products/saxophone.png";
import clarinetIcon from "../../../assets/img/products/clarinet.png";
import ProductNavInfo from "./ProductNavInfo";

const ProductsPageSidebar = ({
  handleCategorySelect,
  handleInstrumentSelect,
  handleSubtypeSelect,
  infoContent,
}) => {

  const [selectedInstrument, setSelectedInstrument] = useState(null);

  const handleInstrumentClick = (instrument) => {
    handleInstrumentSelect(instrument);
    setSelectedInstrument(instrument);
  };



  return (
    <Container className="products-page-sidebar">
      <Navbar className="products-navbar" bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="navbarToggler" />
        <Navbar.Collapse id="navbarToggler">
          <Nav className="mr-auto">
          <NavItem
        className={`instrument-nav-sax ${selectedInstrument === "Saxophone" ? "selected" : ""}`}
        title="Instrument"
        id="navInstrument"
        onClick={() => handleInstrumentClick("Saxophone")}
      >
              <img
                className="instrument-icon"
                src={saxIcon}
                alt="saxophone icon"
              ></img>
            </NavItem>

            <NavItem
        className={`instrument-nav-clar ${selectedInstrument === "Clarinet" ? "selected" : ""}`}
        title="Instrument"
        id="navInstrument"
        onClick={() => handleInstrumentClick("Clarinet")}
      >
              <img
                className="instrument-icon"
                src={clarinetIcon}
                alt="clarinet icon"
              ></img>
            </NavItem>

            <NavDropdown title="Categories" id="navbarDropdown">
              <NavDropdown.Item
                onClick={() => handleCategorySelect("Beechler White Diamond")}
              >
                Beechler White Diamond
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleCategorySelect("Beechler Tonalex")}
              >
                Beechler Tonalex
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleCategorySelect("Beechler Legacy")}
              >
                Beechler Legacy
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleCategorySelect("Beechler Custom")}
              >
                Beechler Custom
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleCategorySelect("Beechler Bellite")}
              >
                Beechler Bellite
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleCategorySelect("Beechler Bellite Custom")}
              >
                Beechler Bellite Custom
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleCategorySelect("ARB Metal")}
              >
                ARB Metal
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleCategorySelect("ARB Custom Metal")}
              >
                ARB Custom Metal
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleCategorySelect("Beechler & ARB Ligatures")}
              >
                Beechler & ARB Ligatures
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleCategorySelect("Beechler & ARB Caps")}
              >
                Beechler & ARB Caps
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleCategorySelect("Beechler Pegs")}
              >
                Beechler Pegs
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleCategorySelect("Accessories")}
              >
                Accessories
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Subtype" id="navSubtype">
              <NavDropdown.Item onClick={() => handleSubtypeSelect("Soprano")}>
                Soprano
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleSubtypeSelect("Alto")}>
                Alto
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleSubtypeSelect("Tenor")}>
                Tenor
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleSubtypeSelect("Baritone")}>
                Baritone
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <ProductNavInfo infoContent={infoContent} />

    </Container>
  );
};

export default ProductsPageSidebar;
