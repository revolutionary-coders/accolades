import React, { useState } from 'react';
import './Explore.css';
import sliderimg1 from '../../assets/Rectangle70.png';
import sliderimg2 from '../../assets/Rectangle71.png';
import sliderimg3 from '../../assets/Rectangle72.png';

const slides = [sliderimg1, sliderimg2, sliderimg3, sliderimg1, sliderimg2];

const Explore = () => {
  
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
    <div className='explore-main'>
      <div className='div-left'>
        <p className='explore-heading'>Explore Our Full Collection</p>
        <p className='explore-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, eos quisquam recusandae incidunt amet laboriosam sit nostrum ex maxime vitae. Asperiores modi sit aliquam praesentium nesciunt culpa ab aut vero!</p>
        <button className='explore-btn'>Start Exploring!</button>
      </div>
      <div className='div-right'>
        <div className="slider-container">
          <button className="slider-button"  onClick={handlePrev}>
            &lt;
          </button>
          <div className="slider-wrapper">
            <div
              className="slider"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="slide">
                  <img src={slide} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <button className="slider-button" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Explore;
