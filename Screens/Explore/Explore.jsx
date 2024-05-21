import React from 'react'
import './Explore.css'
import Explore_image from '../../assets/Explore.png'
import Carousel from '../../components/Carousel/Carousel'
// const images = [
//   {Explore_image},
//   'image2.jpg',
//   'image3.jpg',
//   // Add more image URLs as needed
// ];
const Explore = () => {
  return (
    <div className='explore-main'>
        <div className='div-left'>
            <p className='explore-heading'>Explore Our Full Collection</p>
            <p className='explore-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, eos quisquam recusandae incidunt amet laboriosam sit nostrum ex maxime vitae. Asperiores modi sit aliquam praesentium nesciunt culpa ab aut vero!</p>
            <button className='explore-btn'> Start Exploring!</button>
        </div>
        <div className='div-right'>
          <img src={Explore_image} alt="" />
        </div>
    </div>
  )
}

export default Explore