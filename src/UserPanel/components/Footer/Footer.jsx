import React from "react";
import "./Footer.css"; // Optional: For additional styling if needed.

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* Logo and Description */}
            <div className="col-md-3 mb-4">
              <h5>
                <span style={{ color: "#000" }}>C</span>orano
              </h5>
              <p className="mb-4">
                We are a team of designers and developers that create high
                quality Wordpress, Shopify, and OpenCart websites.
              </p>
            </div>

            {/* Contact Us */}
            <div className="col-md-3 mb-4">
              <h5>Contact Us</h5>
              <p>
                <i className="bi bi-geo-alt me-2"></i>4710-4890 Breckinridge
                USA
              </p>
              <p>
                <i className="bi bi-envelope me-2"></i>demo@yourdomain.com
              </p>
              <p>
                <i className="bi bi-telephone me-2"></i>(012) 800 456 789-987
              </p>
            </div>

            {/* Information */}
            <div className="col-md-3 mb-4">
              <h5>Information</h5>
              <ul className="list-unstyled information-list">
                <li className="mb-2">
                  <a href="#">Terms of Service</a>
                </li>
                <li className="mb-2">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="mb-2">
                  <a href="#">Refund Policy</a>
                </li>
                <li className="mb-2">
                  <a href="#">FAQs</a>
                </li>
                <li className="mb-2">
                  <a href="#">Size Chart</a>
                </li>
                <li className="mb-2">
                  <a href="#">Shipping Policy</a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="col-md-3 mb-4">
              <h5>Follow Us</h5>
              <div className="social-icons mb-4">
                <a href="#" className="me-2">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="me-2">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="me-2">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="me-2">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#">
                  <i className="bi bi-vimeo"></i>
                </a>
              </div>
              <div className="store-badges">
                <img
                  src="https://corano-demo.myshopify.com/cdn/shop/files/ezgif.com-webp-to-png_1_medium.png?v=1614347582"
                  alt="App Store"
                  className="mb-2"
                />
                <img
                  src="https://corano-demo.myshopify.com/cdn/shop/files/ezgif.com-webp-to-png_medium.png?v=1614347582"
                  alt="Google Play"
                />
              </div>
              <div className="row mt-5">
            <div className="col-12 text-center payment-icons">
              <img
                src="https://corano-demo.myshopify.com/cdn/shop/files/payment_large.png?v=1613781786"
                alt="Visa"
                className="me-2"
              />
              
            </div>
          </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="row mt-4">
            <div className="col-md-6">
              <h5>Signup for newsletter</h5>
              <div className="d-flex gap-3">
                <input
                  type="email"
                  className="form-control newsletter-input"
                  placeholder="email@example.com"
                />
                <button className="subscribe-btn">Subscribe</button>
              </div>
              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the{" "}
                  <a href="#" className="term-service">
                    Terms of Service
                  </a>
                </label>
              </div>
            </div>
          </div>

          {/* Payment Icons */}
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
