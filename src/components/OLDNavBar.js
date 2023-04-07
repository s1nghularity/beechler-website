import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import logo from "../assets/img/logo.png";
import "../styles/NavBar.css"
import "../styles/theme.css"

export default function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleShow} />
        
        <Navbar.Offcanvas
  placement="end"
  show={show}
  onHide={handleClose}
>
  <Offcanvas.Header closeButton>
    <Offcanvas.Title>Menu</Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    <Nav className="justify-content-end flex-grow-1 pe-3">
      <NavDropdown title="Products" id="products-dropdown">
        <NavDropdown.Item>
          <NavDropdown title="Mouthpieces" id="mouthpieces-dropdown">
            <NavDropdown.Item href="/arb-great-neck-originals">
              ARB Great Neck Originals
            </NavDropdown.Item>
            <NavDropdown.Item href="/arb-custom-metal">
              ARB Custom Metal
            </NavDropdown.Item>
            <NavDropdown.Item href="/arb-metal">
              ARB Metal
            </NavDropdown.Item>
            <NavDropdown.Item href="/beechler-white-diamond">
              Beechler White Diamond
            </NavDropdown.Item>
            <NavDropdown.Item href="/beechler-tonalex">
              Beechler Tonalex
            </NavDropdown.Item>
            <NavDropdown.Item href="/beechler-hard-rubber">
              Beechler Hard Rubber
            </NavDropdown.Item>
            <NavDropdown.Item href="/beechler-bellite">
              Beechler Bellite
            </NavDropdown.Item>
            <NavDropdown.Item href="/beechler-custom-bellite">
              Beechler Custom Bellite
            </NavDropdown.Item>
            <NavDropdown.Item href="/beechler-custom">
              Beechler Custom
            </NavDropdown.Item>
            <NavDropdown.Item href="/beechler-black">
              Beechler Black
            </NavDropdown.Item>
            <NavDropdown.Item href="/beechler-legacy-metal">
              Beechler Legacy Metal
            </NavDropdown.Item>
          </NavDropdown>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <NavDropdown title="Accessories" id="accessories-dropdown">
            <NavDropdown.Item href="/beechler-arb-ligatures">
              Beechler & ARB Ligatures
            </NavDropdown.Item>
            <NavDropdown.Item href="/beechler-arb-caps">
              Beechler & ARB Caps
            </NavDropdown.Item>
            <NavDropdown.Item href="/beechler-pegs">
              Beechler Pegs
            </NavDropdown.Item>
          </NavDropdown>
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/dealers">Dealers</Nav.Link>
      <Nav.Link href="/artists">Artists</Nav.Link>
      <Nav.Link href="/gallery">Gallery</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  </Offcanvas.Body>
</Navbar.Offcanvas>

</Navbar>
</>
);
}


