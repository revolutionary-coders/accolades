import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [collectionDropdown, setCollectionDropdown] = useState(false);
  const [offersDropdown, setOffersDropdown] = useState(false);

  const handleCollectionMouseEnter = () => {
    setCollectionDropdown(true);
  };

  const handleCollectionMouseLeave = () => {
    setCollectionDropdown(false);
  };

  const handleOffersMouseEnter = () => {
    setOffersDropdown(true);
  };

  const handleOffersMouseLeave = () => {
    setOffersDropdown(false);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" className='img'/>
      <ul className="nav-menu">
        <li>Home</li>
        <li 
          className="dropdown" 
          onMouseEnter={handleCollectionMouseEnter} 
          onMouseLeave={handleCollectionMouseLeave}
        >
          Collection <FontAwesomeIcon icon={faChevronDown} />
          {collectionDropdown && (
            <ul className="dropdown-menu">
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
            </ul>
          )}
        </li>
        <li
          className="dropdown" 
          onMouseEnter={handleOffersMouseEnter} 
          onMouseLeave={handleOffersMouseLeave}
        >
          Our Offers <FontAwesomeIcon icon={faChevronDown} />
          {offersDropdown && (
            <ul className="dropdown-menu">
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
            </ul>
          )}
        </li>
        <li>Our Stories</li>
        <li>Contact Us</li>
        <button className='btn'>Join Us!</button>
      </ul>
    </div>
  );
};

export default Navbar;