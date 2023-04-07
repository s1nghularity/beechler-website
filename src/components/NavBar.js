import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useState } from "react";

import "../styles/NavBar.css";
import "../styles/theme.css";
import logo from "../assets/img/logo.png";
import { NavbarBrand } from "react-bootstrap";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

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

  const toggle = () => {
    setIsOpen(!isOpen);
    const togglerIcon = document.querySelector('.navbar-toggler.toggler-icon');
    if (isOpen) {
      togglerIcon.classList.remove('toggler-open');
    } else {
      togglerIcon.classList.add('toggler-closed');
      togglerIcon.classList.remove('toggler-transform-x');
    }
  };
  

  const GradientDefs = () => (
    <defs>
      <linearGradient id="nav-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop stopColor="#fbb034" offset="0%" />
        <stop stopColor="#ffdd00" offset="74%" />
      </linearGradient>
    </defs>
  );

  return (
    <Navbar expand="lg" fixed="top">
      <NavbarBrand href="/#/">
        <img src={logo} alt="Logo" width="100" height="50" />
      </NavbarBrand>

      <div
        className={`navbar-toggler toggler-icon ${
          isOpen ? "toggler-open" : ""
        }`}
        onClick={toggle}
      >
        {isOpen ? (
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <GradientDefs />
            <path
              d="M18 6L6 18"
              stroke="url(#nav-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="url(#nav-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          ) : (

          <svg
            className={`${isOpen ? "toggler-open" : ""}`}
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <GradientDefs />
            <rect
              className="line line-1"
              x="4"
              y="6"
              width="16"
              height="2"
              fill="url(#nav-gradient)"
            />
            <rect
              className="line line-2"
              x="4"
              y="11"
              width="16"
              height="2"
              fill="url(#nav-gradient)"
            />
            <rect
              className="line line-3"
              x="4"
              y="16"
              width="16"
              height="2"
              fill="url(#nav-gradient)"
            />
          </svg>
        
        )}
      </div>

      <Navbar.Collapse id="basic-navbar-nav" className={`desktop-collapse`}>
        {/* Desktop nav links */}
        <Nav className="mr-auto d-none d-lg-flex">
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
      <Navbar.Collapse
        id="basic-navbar-nav"
        className={`mobile-collapse ${isOpen ? "show" : ""}`}
      >
        {/* Mobile nav links */}
        <Nav className="mr-auto d-lg-none">
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
