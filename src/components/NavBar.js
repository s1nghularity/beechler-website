import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { BsList, BsX } from "react-icons/bs";

import "../styles/NavBar.css";
import "../styles/theme.css";
import logo from "../assets/img/logo.png";
import { NavbarBrand } from "react-bootstrap";

function NavBar() {
  const DropdownToggle = ({ children, ...props }) => (
    <>
      <span
        onClick={(e) => {
          e.stopPropagation();
          window.location.href = props.href;
        }}
      >
        {children}
      </span>{" "}
      <a {...props} style={{ textDecoration: "none" }}>
        &#x25be;
      </a>
    </>
  );

  return (
    <Navbar expand="lg" fixed="top">
      <NavbarBrand href="/#/">
        <img src={logo} alt="Logo" width="100" height="50" />
      </NavbarBrand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown
            title={<DropdownToggle href="/products">Products</DropdownToggle>}
            id="basic-nav-dropdown"
            className="nav-dropdown"
          >
            <NavDropdown
              title={
                <DropdownToggle href="/products/mouthpieces">
                  Mouthpieces
                </DropdownToggle>
              }
              id="basic-nav-dropdown"
              drop="right"
              className="nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Mouthpiece 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mouthpiece 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Mouthpiece 3
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <DropdownToggle href="/products/accessories">
                  Accessories
                </DropdownToggle>
              }
              id="basic-nav-dropdown"
              drop="right"
              className="nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.4">
                Accessory 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Accessory 2
              </NavDropdown.Item>
            </NavDropdown>
          </NavDropdown>
          <Nav.Link href="#link">Dealers</Nav.Link>
          <Nav.Link href="#link">Artists</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
