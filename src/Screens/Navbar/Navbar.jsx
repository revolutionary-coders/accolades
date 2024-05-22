import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import Collection from '../Collection/Collection'
const Navbar = () => {
  return (
    <div className='navbar'>
    <img src={logo} alt="logo" className='img'/>
      <ul  className="nav-menu">
        <li>Home</li>
        <li>Collection</li>
        <li>Our Offers</li>
        <li>Our Stories</li>
        <li>Contact Us</li>
        <button className='btn'>Join Us!</button>
      </ul>
    </div>
  )
}

export default Navbar