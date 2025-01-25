import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./header.css";

const Header = () => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in (you can modify this based on your auth implementation)
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // You might want to redirect to home page or login page here
  };

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  return (
    <Navbar expand="lg" className="custom-navbar py-3 shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="navbar-logo">
          LOGO
        </Navbar.Brand>

        {/* Toggler */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          {/* Navigation Links */}
          <Nav className="me-auto">
            <Nav.Link href="/home" className="nav-link-custom">
              Home
            </Nav.Link>
            <NavDropdown
              title="Shop"
              id="shop-dropdown"
              className="nav-link-custom nav-dropdown-custom"
            >
              <NavDropdown.Item href="/shop/gold" className="dropdown-item-custom">
                Gold
              </NavDropdown.Item>
              <NavDropdown.Item href="/shop/silver" className="dropdown-item-custom">
                Silver
              </NavDropdown.Item>
              <NavDropdown.Item href="/shop/bronze" className="dropdown-item-custom">
                Bronze
              </NavDropdown.Item>
              <NavDropdown.Item href="/shop/diamond" className="dropdown-item-custom">
                Diamond
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/blog" className="nav-link-custom">
              Blog
            </Nav.Link>
            <NavDropdown
              title={
                <span>
                  Pages <i className="bi bi-chevron-down"></i>
                </span>
              }
              id="pages-dropdown"
              className="nav-link-custom nav-dropdown-custom"
            >
              <NavDropdown.Item href="/about" className="dropdown-item-custom">
                About
              </NavDropdown.Item>
              <NavDropdown.Item href="/faq" className="dropdown-item-custom">
                FAQ
              </NavDropdown.Item>
              <NavDropdown.Item href="/refund-policy" className="dropdown-item-custom">
                Refund Policy
              </NavDropdown.Item>
              <NavDropdown.Item href="/privacy-policy" className="dropdown-item-custom">
                Privacy Policy
              </NavDropdown.Item>
              <NavDropdown.Item href="/appointment-booking" className="dropdown-item-custom">
                Appointment Booking
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact" className="nav-link-custom">
              Contact
            </Nav.Link>
          </Nav>

          {/* Icons */}
          <Form className="d-flex align-items-center">
            <Button variant="link" className="icon-button me-3" aria-label="Search">
              <i className="bi bi-search iconbutton"></i>
            </Button>
            {isLoggedIn && (
              <Button variant="link" className="icon-button me-3" aria-label="Cart">
                <i className="bi bi-bag-check iconbutton"></i>
              </Button>
            )}
            <div className="position-relative">
              <Button
                variant="link"
                className="icon-button"
                aria-label="Profile"
                onClick={toggleProfileOptions}
              >
                <i className="bi bi-person-circle iconbutton"></i>
              </Button>
              {showProfileOptions && (
                <div className="profile-options bg-white shadow rounded position-absolute end-0 mt-2 p-3">
                  {isLoggedIn ? (
                    <>
                      <a href="/profile" className="d-block text-decoration-none text-dark mb-2">
                        Profile
                      </a>
                      <a href="/orders" className="d-block text-decoration-none text-dark mb-2">
                        Orders
                      </a>
                      <button
                        onClick={handleLogout}
                        className="btn btn-link p-0 text-dark text-decoration-none"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <a href="/login" className="d-block text-decoration-none text-dark mb-2">
                        Login
                      </a>
                      <a href="/register" className="d-block text-decoration-none text-dark mb-2">
                        Register
                      </a>
                    </>
                  )}
                </div>
              )}
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
