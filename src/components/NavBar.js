import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, NavbarToggle } from "react-bootstrap";
import { useState } from "react";

import "../styles/NavBar.css";
import "../styles/theme.css";
import logo from "../assets/img/home/beechler-logo-t.png";

import { NavbarBrand } from "react-bootstrap";
import USA from '../assets/img/home/american-flag.svg'


function NavBar() {
  const [expanded, setExpanded] = useState(false);
  console.log('expanded', expanded);

  const DropdownToggle = ({ children, ...props }) => (
    <>
      <span
        onClick={(e) => {
          e.stopPropagation();
          window.location.href = props.to;
        }}
      >
        {children}
      </span>{" "}
      <button {...props} style={{ textDecoration: "none" }} className="dropdown-toggle">
       <div className="dropdown-caret"> &#x25be; </div>
      </button>
    </>
  );

  return (
      <Navbar expanded={expanded} expand="lg">
        <NavbarBrand href="/">
          <img src={logo} alt="Logo" width="100" height="50" />
        </NavbarBrand>
    
        <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={(e) => {
          console.log('onClick', expanded);
          setExpanded(expanded ? false : 'true');
          const spanElements = e.currentTarget.querySelectorAll('.icon-bar');
          spanElements.forEach(span => span.classList.toggle('toggled'));
        }}>
          
          <span className="icon-bar top-bar" ></span>
          <span className="icon-bar middle-bar" ></span>
          <span className="icon-bar bottom-bar"></span>

        </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav" className={`desktop-collapse`}>
        {/* Desktop nav links */}
        <Nav className="mr-auto d-none d-lg-flex">
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/tip-openings">Tip Openings</Nav.Link>



          <Nav.Link href="/dealers">Dealers</Nav.Link>
          <Nav.Link href="/artists">Artists</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      
      <div>  
        <p>
          Made in the USA
        </p>
        <img src={USA} alt="USA" width="30" height="20" />
      </div>
      
      </Navbar.Collapse>





      <Navbar.Collapse
        id="basic-navbar-nav"
        className={`mobile-collapse ${expanded ? "show" : ""}`}
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
          <Nav.Link href="/dealers">Dealers</Nav.Link>
          <Nav.Link href="/artists">Artists</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>

          <div>  
        <p>
          Made in the USA
        </p>
        <img src={USA} alt="USA" width="30" height="20" />
      </div>

        </Nav>

        
        
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
