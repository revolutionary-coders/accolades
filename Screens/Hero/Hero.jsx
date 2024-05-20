import React from "react";
import './Hero.css'
import product from '../../assets/product.png'
import Group1 from '../../assets/Group1.png'
import frame from '../../assets/Frame.png'
import Card from "../../components/Card";
const Hero = () => {
  return (
    <>
      <div className="main">
        <div className="div-left">
            <div className="heading1">
                Heading 1 of the page
            </div>
            <div className="lorem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum tempore, officiis soluta inventore! Tempora similique hic, temporibus assumenda odit deserunt minima omnis?
            </div>
            <button className="hero-btn">
            Shop Now!
            </button>
            <div className="left-bottom">
            <img src={Group1} alt=""  className="group1"/>
            <img src={frame} alt="" className="frame"/>
            </div>
        </div>
        <div className="div-right">
            <img src={product} alt="" className="product"/>
        </div>
      </div>
      <div className="container">
      <Card heading="Lorem" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum "/>
      <Card heading="Lorem" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum "/>
      <Card heading="Lorem" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum "/>
      <Card heading="Lorem" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum "/>
      </div>
      <div className="prebook">
        <div className="prebook-heading">
            Pre-Booking Your Experiance
        </div>
        <div className="prebook-text">
        Secure your spot today and enjoy peace of mind by pre-booking your experience with us. Whether it's a special event, a memorable getaway, or an exclusive service, our pre-booking option ensures you have everything set in advance. Beat the rush and guarantee your reservation by taking this proactive step. It's your ticket to a seamless, worry-free experience. Don't wait, pre-book now to make the most of your upcoming adventure.
        </div>
        <button className="Preordr-btn">
            Pre-Order Now!
        </button>
      </div>
      </>
  );
};

export default Hero;
