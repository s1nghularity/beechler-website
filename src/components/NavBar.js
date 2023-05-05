import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../styles/NavBar.css";
import "../styles/theme.css";
import logo from "../assets/img/home/beechler-logo-t.png";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Navbar expanded={expanded} expand="md" className="stripe">
      <div className="navbar-wrapper">
      <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={(e) => {
            console.log("onClick", expanded);
            setExpanded(expanded ? false : "true");
            const spanElements = e.currentTarget.querySelectorAll(".icon-bar");
            spanElements.forEach((span) => span.classList.toggle("toggled"));
          }}
          className="navbar-toggler"
        >
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
      </Navbar.Toggle>

        <NavbarBrand href="/" className="navbar-brand">
          <img src={logo} alt="Logo" width="100" height="50" />
        </NavbarBrand>



        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`mr-auto super-title ${expanded ? "d-lg-none" : ""}`}>
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

            <Nav.Link>
              <FontAwesomeIcon
                icon={faEnvelope}
                onClick={() => {
                  const scrollToContact = () => {
                    const contactElement = document.getElementById("contact");

                    if (contactElement) {
                      window.scrollTo({
                        top: contactElement.offsetTop,
                        behavior: "smooth",
                      });
                    } else {
                      console.error("Element with ID 'contact' not found");
                    }
                  };

                  if (currentPath === "/") {
                    scrollToContact();
                  } else {
                    window.location.href = "/#contact";
                    window.addEventListener(
                      "hashchange",
                      () => {
                        scrollToContact();
                      },
                      { once: true }
                    );
                  }
                }}
              />
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </div>

    </Navbar>
  );
}

export default NavBar;
