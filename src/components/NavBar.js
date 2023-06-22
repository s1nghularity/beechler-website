import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../styles/NavBar.css";
import "../styles/theme.css";
import logo from "../assets/img/home/beechler-logo-t.png";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [togglerToggled, setTogglerToggled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
    setTogglerToggled(false);
  }, [location.pathname]);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const collapseStyles = isDesktop
    ? { maxHeight: "none" }
    : expanded
    ? { maxHeight: "500px", transition: "max-height .5s ease-in-out" }
    : {
        maxHeight: "0px",
        transition: "max-height .5s ease-in-out",
        overflow: "hidden",
      };

  const handleToggleClick = () => {
    setExpanded(!expanded);
    setTogglerToggled(!togglerToggled);
  };

  const handleContactClick = () => {
    setExpanded(false);
    setTogglerToggled(false);
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/tip-openings", label: "Tip Openings" },
    { path: "/dealers", label: "Dealers" },
    { path: "/artists", label: "Artists" },
    { path: "/about", label: "About" },

  ];

  return (
    <div className="stripe">
      <Navbar expanded={expanded} expand="md" className="navbar">
        <div className="navbar-header">
          {!isDesktop && (
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleToggleClick}
              className={`hamburger ${togglerToggled ? "toggled" : ""}`}
            >
              <span
                className={`icon-bar top-bar ${
                  togglerToggled ? "toggled" : ""
                }`}
              ></span>
              <span
                className={`icon-bar middle-bar ${
                  togglerToggled ? "toggled" : ""
                }`}
              ></span>
              <span
                className={`icon-bar bottom-bar ${
                  togglerToggled ? "toggled" : ""
                }`}
              ></span>
            </Navbar.Toggle>
          )}
          <NavbarBrand href="/" className="navbar-brand">
            <img src={logo} alt="Logo" width="100" height="50" />
          </NavbarBrand>
        </div>

        <Nav className="nav-link-wrapper" style={collapseStyles}>
          {links.map(({ path, label }) => (
            <Nav.Link
              key={path}
              as={Link}
              to={path}
              className={
                location.pathname === path ? "nav-link active-link" : ""
              }
            >
              {label}
            </Nav.Link>
          ))}

          <HashLink
            to="/#contact"
            onClick={handleContactClick}
            className="contact-button"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </HashLink>
          
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
