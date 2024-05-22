import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="arrow left-arrow" onClick={goToPrevious}>
        &lt;
      </button>
      <img
        className="carousel-image"
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
      <button className="arrow right-arrow" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
