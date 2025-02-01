import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './style/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="animate-text">Elegance in Every Piece</h1>
          <p className="animate-text-delay">Discover our exclusive collection of fine jewelry</p>
          <Button className="custom-btn animate-text-delay-2">Explore Collection</Button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories">
        <Container>
          <h2 className="section-title">Our Catagory</h2>
          <div className="category-grid">
            <div className="category-card">
              <div className="category-image">
                <img src="https://i.pinimg.com/736x/25/aa/3f/25aa3f901dced3f7d04c70227a2afee6.jpg" alt="Rings" />
                <div className="category-overlay">
                  <h3>Gold Products</h3>
                  <p>Engagement & Wedding</p>
                </div>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image">
                <img src="https://i.pinimg.com/736x/81/db/1b/81db1b4c41707dc84607fd426775b7aa.jpg" alt="Necklaces" />
                <div className="category-overlay">
                  <h3>Diamond Jewallary</h3>
                  <p>Pendants & Chains</p>
                </div>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image">
                <img src="https://i.pinimg.com/736x/c2/f8/cf/c2f8cfa40b5b3d5bd0179c9a8ba3114f.jpg" alt="Rings" />
                <div className="category-overlay">
                  <h3>Silver Products</h3>
                  <p>Engagement & Wedding</p>
                </div>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image">
                <img src="https://i.pinimg.com/736x/a6/48/0a/a6480a258cfe940812909eaf315a5476.jpg" alt="Earrings" />
                <div className="category-overlay">
                  <h3>Bronze Products</h3>
                  <p>Studs & Drops</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Latest Products */}
      <section className="latest-products">
        <Container>
          <h2 className="section-title">New Arrivals</h2>
          <div className="product-grid">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="product-card">
                <div className="product-image">
                  <img src={`https://example.com/product${item}.jpg`} alt={`Product ${item}`} />
                  <div className="product-actions">
                    <button className="action-btn"><i className="fas fa-heart"></i></button>
                    <button className="action-btn"><i className="fas fa-shopping-cart"></i></button>
                  </div>
                </div>
                <div className="product-info">
                  <h3>Diamond Eternity Ring</h3>
                  <p className="price">$1,999</p>
                  <Button className="shop-btn">Shop Now</Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <div className="features-grid">
            <div className="feature-item">
              <i className="fas fa-gem"></i>
              <h3>Premium Quality</h3>
              <p>Certified diamonds and precious metals</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-shield-alt"></i>
              <h3>Secure Shopping</h3>
              <p>100% secure payment</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-undo"></i>
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-truck"></i>
              <h3>Free Shipping</h3>
              <p>On orders over $500</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <Container>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            {[1, 2, 3].map((item) => (
              <div key={item} className="testimonial-card">
                <div className="quote-icon"><i className="fas fa-quote-right"></i></div>
                <p className="testimonial-text">
                  "Exceptional quality and service. The pieces are absolutely stunning!"
                </p>
                <div className="testimonial-author">
                  <img src={`https://example.com/author${item}.jpg`} alt="Author" />
                  <div className="author-info">
                    <h4>Sarah Johnson</h4>
                    <p>Happy Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <Container>
          <div className="newsletter-content">
            <h2>Join Our Newsletter</h2>
            <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <Button className="custom-btn">Subscribe</Button>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
