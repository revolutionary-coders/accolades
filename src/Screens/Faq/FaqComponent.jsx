import React, { useState } from 'react';
import './FaqComponent.css';

const FaqComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>FREQUENTLY ASKED QUESTION</h2>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <div 
            className={`faq ${openIndex === index ? 'open' : ''}`} 
            key={index} 
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">
              {faq}
              <span className="faq-toggle">{openIndex === index ? '↑' : '↓'}</span>
            </div>
            {openIndex === index && <div className="faq-answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;