import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const ProductsPageNav = ({ handleCategorySelect, handleInstrumentSelect, handleSubtypeSelect}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Categories</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarToggler" />
      <Navbar.Collapse id="navbarToggler">
        <Nav className="mr-auto">

          <NavDropdown title="Categories" id="navbarDropdown">        
            <NavDropdown.Item onClick={() => handleCategorySelect('Beechler White Diamond')}>
            Beechler White Diamond
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCategorySelect('Beechler Tonalex')}>
            Beechler Tonalex
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCategorySelect('Beechler Legacy')}>
            Beechler Legacy
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCategorySelect('Beechler Custom')}>
            Beechler Custom
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCategorySelect('Beechler Bellite')}>
            Beechler Bellite
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCategorySelect('Beechler Bellite Custom')}>
            Beechler Bellite Custom
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCategorySelect('ARB Metal')}>
            ARB Metal
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCategorySelect('ARB Custom Metal')}>
            ARB Custom Metal
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCategorySelect('Beechler & ARB Ligatures')}>
            Beechler & ARB Ligatures
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCategorySelect('Beechler & ARB Caps')}>
            Beechler & ARB Caps
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCategorySelect('Beechler Pegs')}>
            Beechler Pegs
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCategorySelect('Accessories')}>
            Accessories
            </NavDropdown.Item>            
          </NavDropdown>
          
          <NavDropdown title="Instrument" id="navInstrument">
            <NavDropdown.Item onClick={() => handleInstrumentSelect('Saxophone')}>
              Saxophone
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleInstrumentSelect('Clarinet')}>
              Clarinet
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Subtype" id="navSubtype">
            <NavDropdown.Item onClick={() => handleSubtypeSelect('Soprano')}>
              Soprano
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleSubtypeSelect('Alto')}>
              Alto
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleSubtypeSelect('Tenor')}>
              Tenor
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleSubtypeSelect('Baritone')}>
              Baritone
            </NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ProductsPageNav;
