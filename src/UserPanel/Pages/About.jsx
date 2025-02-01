import React from 'react';
import './style/About.css';
import Faq from './Faq';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Elegance Jewelers</h1>
        <div className="header-underline"></div>
      </div>

      <div className="about-content">
        <div className="about-section">
          <div className="about-image hover-zoom">
            <img src="https://pngimg.com/uploads/ring/ring_PNG35.png" alt="Elegant Jewelry Collection" />
            <div className="image-overlay">
              <span>Discover Our Collection</span>
            </div>
          </div>
          
          <div className="about-text reveal-text">
            <h2>Our Legacy of Luxury</h2>
            <p>
              Since 1995, Elegance Jewelers has been crafting timeless pieces that celebrate life's most precious moments. 
              Our commitment to excellence and attention to detail has made us a trusted name in fine jewelry, serving 
              generations of families with pieces that become cherished heirlooms.
            </p>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10k+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Custom Designs</div>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-gem"></i>
            <h3>Our Mission</h3>
            <p>To create exceptional jewelry that captures the essence of life's most meaningful moments.</p>
          </div>
          
          <div className="feature-card">
            <i className="fas fa-star"></i>
            <h3>Our Vision</h3>
            <p>To be the premier destination for luxury jewelry, known for our craftsmanship and service excellence.</p>
          </div>
          
          <div className="feature-card">
            <i className="fas fa-heart"></i>
            <h3>Our Values</h3>
            <p>Quality, Integrity, Artistry, and Customer Dedication.</p>
          </div>
        </div>

        <div className="expertise-section">
          <h2>Our Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <i className="fas fa-ring"></i>
              <h3>Custom Design</h3>
              <p>Bring your vision to life with our bespoke jewelry design service.</p>
            </div>
            <div className="expertise-card">
              <i className="fas fa-tools"></i>
              <h3>Master Craftsmanship</h3>
              <p>Each piece is crafted by skilled artisans with decades of experience.</p>
            </div>
            <div className="expertise-card">
              <i className="fas fa-certificate"></i>
              <h3>Quality Assurance</h3>
              <p>All our pieces undergo rigorous quality checks and come with certification.</p>
            </div>
            <div className="expertise-card">
              <i className="fas fa-sync"></i>
              <h3>Lifetime Care</h3>
              <p>We provide maintenance and care services for all our pieces.</p>
            </div>
          </div>
        </div>

        <div className="testimonial-section">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <i className="fas fa-quote-left"></i>
              <p>"The attention to detail and customer service is unmatched. Truly a luxury experience."</p>
              <span className="client-name">- Sarah Johnson</span>
            </div>
            <div className="testimonial-card">
              <i className="fas fa-quote-left"></i>
              <p>"Their custom design service helped create the perfect engagement ring. Couldn't be happier!"</p>
              <span className="client-name">- Michael Chen</span>
            </div>
          </div>
        </div>
      </div>
      <Faq/>
    </div>
  );
};

export default About;
