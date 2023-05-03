import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useState } from "react";

import "../styles/NavBar.css";
import "../styles/theme.css";
import logo from "../assets/img/home/beechler-logo-t.png";

import { NavbarBrand } from "react-bootstrap";
import USA from "../assets/img/home/american-flag.svg";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Navbar expanded={expanded} expand="md" className="stripe">
      <div className="navbar-wrapper">
        <NavbarBrand href="/">
          <img src={logo} alt="Logo" width="100" height="50" />
        </NavbarBrand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={(e) => {
            console.log("onClick", expanded);
            setExpanded(expanded ? false : "true");
            const spanElements = e.currentTarget.querySelectorAll(".icon-bar");
            spanElements.forEach((span) => span.classList.toggle("toggled"));
          }}
        >
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className={`desktop-collapse`}>
          {/* Desktop nav links */}
          <Nav className="mr-auto d-none d-lg-flex super-title">
            <Nav.Link
              as={Link}
              to="/products"
              className={currentPath === "/products" ? "active-link" : ""}
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/tip-openings"
              className={currentPath === "/tip-openings" ? "active-link" : ""}
            >
              Tip Openings
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dealers"
              className={currentPath === "/dealers" ? "active-link" : ""}
            >
              Dealers
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/artists"
              className={currentPath === "/artists" ? "active-link" : ""}
            >
              Artists
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={currentPath === "/about" ? "active-link" : ""}
            >
              About
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>

        {/* Mobile nav links */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`mobile-collapse ${expanded ? "show" : ""}`}
        >
          <Nav className="mr-auto d-lg-none super-title">
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/tip-openings">
              Tip Openings
            </Nav.Link>
            <Nav.Link as={Link} to="/dealers">
              Dealers
            </Nav.Link>
            <Nav.Link as={Link} to="/artists">
              Artists
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;
