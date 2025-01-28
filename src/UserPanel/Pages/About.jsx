import React from 'react';
import './style/About.css';
import Faq from './Faq';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <div className="header-underline"></div>
      </div>

      <div className="about-content">
        <div className="about-section">
          <div className="about-image">
            <img src="https://pngimg.com/uploads/ring/ring_PNG35.png" alt="About Us" />
          </div>
          
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
              ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-medal"></i>
            <h3>Our Mission</h3>
            <p>To provide exceptional value and innovative solutions to our clients.</p>
          </div>
          
          <div className="feature-card">
            <i className="fas fa-eye"></i>
            <h3>Our Vision</h3>
            <p>To become the leading provider of innovative solutions in our industry.</p>
          </div>
          
          <div className="feature-card">
            <i className="fas fa-heart"></i>
            <h3>Our Values</h3>
            <p>Integrity, Excellence, Innovation, and Customer Satisfaction.</p>
          </div>
        </div>
      </div>
      <Faq/>
    </div>
  );
};

export default About;
