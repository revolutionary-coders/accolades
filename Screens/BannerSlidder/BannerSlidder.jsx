import React, { useState } from 'react';
import './BannerSlidder.css';
import slide1 from '../../assets/banner1.png';
import slide2 from '../../assets/banner2.png';
import slide3 from '../../assets/banner3.png';

const slides = [
  { image: slide1 },
  { image: slide2 },
  { image: slide3 },
  // Add more slides if needed
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
    <h1 className='banner-heading'>TIMELESS ELEGANCE</h1>
      <div className="banner-slider">
        <button className="slider-button left" onClick={handlePrev}>
          &lt;
        </button>
        <div className="slide-container">
          <div
            className="slides"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <button className="slider-button right" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </>
  );
};

export default BannerSlider;
