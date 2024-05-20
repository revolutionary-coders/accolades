import React from 'react'
import './Card.css'
import group from '../assets/Group.png'
const Card = (props) => {
  return (
    <div className='card'>
        <img src={group} alt="" className='card_image'/>
        <div className='heading'>{props.heading}</div>
        <div className='text'>{props.text}</div>
    </div>
)
}

export default Card