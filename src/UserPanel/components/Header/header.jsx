import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./header.css";

const Header = () => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status using Cookies
    const checkAuth = () => {
      const token = Cookies.get('token');
      setIsLoggedIn(!!token);
    };

    checkAuth();
    // Check auth status every time component mounts
    const interval = setInterval(checkAuth, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    setIsLoggedIn(false);
    setShowProfileOptions(false);
    navigate('/login');
  };

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  const handleCloseSidebar = () => setShowSidebar(false);
  const handleShowSidebar = () => setShowSidebar(true);

  return (
    <Navbar expand="lg" className="custom-navbar py-3 shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="navbar-logo">
          JEWELS
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <div className="d-flex align-items-center mobile-icons">
          <Button variant="link" className="icon-button me-2 d-lg-none" aria-label="Search">
            <i className="bi bi-search iconbutton"></i>
          </Button>
          {isLoggedIn && (
            <>
              <Button 
                variant="link" 
                className="icon-button me-2 d-lg-none" 
                onClick={() => navigate('/cart')}
                aria-label="Cart"
              >
                <i className="bi bi-bag-check iconbutton"></i>
              </Button>
            </>
          )}
          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            onClick={handleShowSidebar}
            className="custom-toggler"
          />
        </div>

        {/* Sidebar for Mobile/Tablet */}
        <Offcanvas show={showSidebar} onHide={handleCloseSidebar} placement="end" className="custom-sidebar">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column mobile-nav">
              <Nav.Link href="/home" className="nav-link-custom">
                Home
              </Nav.Link>
              <div className="mobile-dropdown">
                <div className="mobile-dropdown-header">
                  Shop
                  <i className="bi bi-chevron-down"></i>
                </div>
                <div className="mobile-dropdown-content">
                  <Nav.Link href="/shop/gold" className="dropdown-item-custom">Gold</Nav.Link>
                  <Nav.Link href="/shop/silver" className="dropdown-item-custom">Silver</Nav.Link>
                  <Nav.Link href="/shop/bronze" className="dropdown-item-custom">Bronze</Nav.Link>
                  <Nav.Link href="/shop/diamond" className="dropdown-item-custom">Diamond</Nav.Link>
                </div>
              </div>
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
                <NavDropdown.Item href="/book-appointment" className="dropdown-item-custom">
                  Appointment Booking
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact" className="nav-link-custom">
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Desktop Navigation */}
        <Navbar.Collapse id="navbar-nav" className="desktop-nav">
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
              <NavDropdown.Item href="/book-appointment" className="dropdown-item-custom">
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
              <Button 
                variant="link" 
                className="icon-button me-3" 
                onClick={() => navigate('/cart')}
                aria-label="Cart"
              >
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
                      <Button 
                        variant="link" 
                        className="d-block text-decoration-none text-dark mb-2"
                        onClick={() => navigate('/user/profile')}
                      >
                        Profile
                      </Button>
                      <Button 
                        variant="link" 
                        className="d-block text-decoration-none text-dark mb-2"
                        onClick={() => navigate('/user/orders')}
                      >
                        Orders
                      </Button>
                      <Button 
                        variant="link" 
                        className="d-block text-decoration-none text-dark mb-2"
                        onClick={() => navigate('/cart')}
                      >
                        Cart
                      </Button>
                      <Button
                        onClick={handleLogout}
                        className="btn btn-link p-0 text-dark text-decoration-none"
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        variant="link" 
                        className="d-block text-decoration-none text-dark mb-2"
                        onClick={() => navigate('/login')}
                      >
                        Login
                      </Button>
                      <Button 
                        variant="link" 
                        className="d-block text-decoration-none text-dark mb-2"
                        onClick={() => navigate('/register')}
                      >
                        Register
                      </Button>
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
