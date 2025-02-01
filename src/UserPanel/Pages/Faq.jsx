import React, { useState } from 'react';
import './style/Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      category: "Product Information",
      questions: [
        {
          question: "What types of precious metals do you use in your jewelry?",
          answer: "We use the finest quality precious metals including 18K and 24K gold, platinum, and sterling silver. All our metals are certified and hallmarked according to international standards."
        },
        {
          question: "How can I determine my ring size?",
          answer: "We offer several ways to determine your ring size: Visit our store for a professional fitting, request our complimentary ring sizer tool, or follow our online sizing guide. We recommend professional sizing for the most accurate measurement."
        },
        {
          question: "Do you offer diamond certification?",
          answer: "Yes, all our diamonds come with internationally recognized certificates (GIA, IGI, or HRD) that verify their authenticity, quality, and characteristics."
        }
      ]
    },
    {
      category: "Services & Care",
      questions: [
        {
          question: "Do you offer jewelry cleaning and maintenance services?",
          answer: "Yes, we provide complimentary cleaning and inspection services for all jewelry purchased from us. We also offer professional restoration, resizing, and repair services."
        },
        {
          question: "What is your custom design process?",
          answer: "Our custom design process involves four steps: Initial consultation, design sketching, 3D modeling, and crafting. We work closely with you throughout to ensure your vision comes to life perfectly."
        },
        {
          question: "How should I care for my fine jewelry?",
          answer: "Store pieces separately to prevent scratching, clean regularly with appropriate solutions, avoid exposure to chemicals, and have professional maintenance done annually."
        }
      ]
    },
    {
      category: "Purchase & Warranty",
      questions: [
        {
          question: "What is your warranty policy?",
          answer: "All our pieces come with a lifetime warranty against manufacturing defects. This includes free prong tightening, cleaning, and inspection services."
        },
        {
          question: "Do you offer insurance for expensive pieces?",
          answer: "Yes, we provide insurance options through our trusted partners for high-value pieces. We can assist you in obtaining coverage during the purchase process."
        },
        {
          question: "What are your payment and financing options?",
          answer: "We accept all major credit cards, bank transfers, and offer flexible financing options. For significant purchases, we also provide layaway plans and special financing terms."
        }
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-categories">
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="faq-category">
            <h2 className="category-title">{category.category}</h2>
            <div className="faq-list">
              {category.questions.map((faq, index) => (
                <div 
                  key={`${categoryIndex}-${index}`} 
                  className={`faq-item ${activeIndex === `${categoryIndex}-${index}` ? 'active' : ''}`}
                >
                  <button 
                    className="faq-question" 
                    onClick={() => toggleAccordion(`${categoryIndex}-${index}`)}
                  >
                    <span className="question-text">{faq.question}</span>
                    <span className="faq-icon">
                      {activeIndex === `${categoryIndex}-${index}` ? '−' : '+'}
                    </span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
