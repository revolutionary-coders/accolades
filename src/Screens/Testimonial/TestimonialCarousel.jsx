import React, { useState } from 'react';
import './TestimonialCarousel.css';
import img1 from '../../assets/testimonial1.png';
import img2 from '../../assets/testimonial2.png';
import img3 from '../../assets/testimonial3.png';
import img4 from '../../assets/testimonial4.png';
import img5 from '../../assets/testimonial5.png';

const testimonials = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img1 },
  { image: img2 },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonial-container">
      <h2 className='collection-heading'>TESTIMONIAL</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultrices sed, dolor.</p>
      <div className="carousel">
        <button className="carousel-button" onClick={handlePrev}>
          &lt;
        </button>
        <div className="testimonial-wrapper">
          <div
            className="testimonial-slider"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <img src={testimonial.image} alt={`Testimonial ${index}`} />
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-button" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
