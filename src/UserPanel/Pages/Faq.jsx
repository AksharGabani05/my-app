import React, { useState } from 'react';
import './style/Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How do I create an account?",
      answer: "You can create an account by clicking the 'Sign Up' button and filling out the registration form with your details."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards, PayPal, and bank transfers."
    },
    {
      question: "How can I reset my password?",
      answer: "Click on the 'Forgot Password' link on the login page and follow the instructions sent to your email."
    },
    {
      question: "What is your return policy?",
      answer: "Our return policy allows returns within 30 days of purchase. Items must be unused and in original packaging."
    },
    // Add more FAQ items as needed
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button 
              className="faq-question" 
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
