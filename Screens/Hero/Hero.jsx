// import React from "react";
// import './Hero.css'
// import product from '../../assets/product.png'
// import Group1 from '../../assets/Group1.png'
// import frame from '../../assets/Frame.png'
// import Card from "../../components/Card";
// const Hero = () => {
//   return (
//     <>
//       <div className="main">
//         <div className="div-left">
//             <div className="heading1">
//                 Heading 1 of the page
//             </div>
//             <div className="lorem">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum tempore, officiis soluta inventore! Tempora similique hic, temporibus assumenda odit deserunt minima omnis?
//             </div>
//             <button className="hero-btn">
//             Shop Now!
//             </button>
//             <div className="left-bottom">
//             <img src={Group1} alt=""  className="group1"/>
//             <img src={frame} alt="" className="frame"/>
//             </div>
//         </div>
//         <div className="div-right">
//             <img src={product} alt="" className="product"/>
//         </div>
//       </div>
//       <div className="container">
//       <Card heading="Lorem" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum "/>
//       <Card heading="Lorem" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum "/>
//       <Card heading="Lorem" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum "/>
//       <Card heading="Lorem" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum "/>
//       </div>
//       <div className="prebook">
//         <div className="prebook-heading">
//             Pre-Booking Your Experiance
//         </div>
//         <div className="prebook-text">
//         Secure your spot today and enjoy peace of mind by pre-booking your experience with us. Whether it's a special event, a memorable getaway, or an exclusive service, our pre-booking option ensures you have everything set in advance. Beat the rush and guarantee your reservation by taking this proactive step. It's your ticket to a seamless, worry-free experience. Don't wait, pre-book now to make the most of your upcoming adventure.
//         </div>
//         <button className="Preordr-btn">
//             Pre-Order Now!
//         </button>
//       </div>
//       </>
//   );
// };

// export default Hero;


import React, { useState } from "react";
import './Hero.css';
import product from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import group1 from '../../assets/Group1.png';
import group2 from '../../assets/Group2.png';
import group3 from '../../assets/Group3.png';
import frame from '../../assets/Frame.png';
import Card from "../../components/Card";
import 'animate.css';

const Hero = () => {
  const rotatingData = [
    {
      heading: "Heading 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum",
      image: product,
      group:group1,
      price: 100,
    },
    {
      heading: "Heading 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum",
      image: product2,
      group:group2,
      price: 200,
    },
    {
      heading: "Heading 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum",
      image: product3,
      group:group3,
      price: 300,
    },
  ];

  const [index, setIndex] = useState(0);
  const currValue = rotatingData[index];
  const [animationKey, setAnimationKey] = useState(0);

  const goToPrev = () => {
    setIndex((index + 2) % 3);
    setAnimationKey(animationKey + 1);  // Change the animation key to force re-render
  };

  const goToNext = () => {
    setIndex((index + 1) % 3);
    setAnimationKey(animationKey + 1);  // Change the animation key to force re-render
  };

  return (
    <>
      <div className="main">
        <div className="div-left">
          <h1 key={animationKey} className="heading1 animate__animated animate__fadeInLeftBig">{currValue.heading}</h1>
          <div className="lorem animate__animated animate__rotateInDownRight">{currValue.text}</div>
          <button className="hero-btn">Shop Now!</button>
          <div className="left-bottom">
            <img src={currValue.group} alt="" className="group1" />
            <img src={frame} alt="" className="frame" />
          </div>
        </div>
        <div className="div-right">
          <img key={animationKey} src={currValue.image} alt="" className="product animate__animated animate__rotateInDownRight" />
          <div>
            <button onClick={goToPrev} className="goto">&lt;</button>
            <button onClick={goToNext} className="goto">&gt;</button>
          </div>
        </div>
      </div>
      
      <div className="container">
        <Card heading="Lorem" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum" />
        <Card heading="Lorem" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum" />
        <Card heading="Lorem" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum" />
        <Card heading="Lorem" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum" />
      </div>
      <div className="prebook">
        <div className="prebook-heading">
          Pre-Booking Your Experience
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
