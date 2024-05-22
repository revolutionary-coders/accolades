import React from "react";
import "./Hero.scss";
import product from "../../assets/product.png";
import Group1 from "../../assets/Group1.png";
import frame from "../../assets/Frame.png";
import Card from "../../components/Card";
const DATA = [
  {
    heading: "Lorem",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum",
  },
  {
    heading: "Lorem",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum",
  },
  {
    heading: "Lorem",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum",
  },
  {
    heading: "Lorem",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum",
  },
];

const Hero = () => {
  return (
    <>
      <RealHero />
      {/* <div className="carousel-container">
        {DATA.map(({ heading, text }, index) => (
          <Card key={index} heading={heading} text={text} />
        ))}
      </div>
      <div className="prebook">
        <div className="prebook-heading">Pre-Booking Your Experiance</div>
        <div className="prebook-text">
          Secure your spot today and enjoy peace of mind by pre-booking your
          experience with us. Whether it's a special event, a memorable getaway,
          or an exclusive service, our pre-booking option ensures you have
          everything set in advance. Beat the rush and guarantee your
          reservation by taking this proactive step. It's your ticket to a
          seamless, worry-free experience. Don't wait, pre-book now to make the
          most of your upcoming adventure.
        </div>
        <button className="Preordr-btn">Pre-Order Now!</button>
      </div> */}
    </>
  );
};

export default Hero;

const RealHero = () => {
  const rotatingData = [
    {
      heading: "Heading 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum",
      image: Group1,
      price: 100,
    },
    {
      heading: "Heading 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum",
      image: product,
      price: 200,
    },
    {
      heading: "Heading 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error, dolor est consequuntur eligendi optio quasi rerum",
      image: frame,
      price: 300,
    },
  ];

  const [index, setIndex] = React.useState(0);
  const currValue = rotatingData[index];

  const goToPrev = () => {
    setIndex((index + 2) % 3);
  };
  const goToNext = () => {
    setIndex((index + 1) % 3);
  };

  return (
    <div className="main">
      <div className="div-left">
        <h1 className="heading1">{currValue.heading}</h1>
        <div className="lorem">{currValue.text}</div>
        <button className="hero-btn">Shop Now!</button>
        <div className="left-bottom">
          <img src={currValue.image} alt="" className={`group1`} />
          <img src={frame} alt="" className="frame" />
        </div>
      </div>
      <div className="div-right">
        <button onClick={goToPrev}>&lt;</button>
        <img src={currValue.image} alt="" className="product" />
        <button onClick={goToNext}>&gt;</button>
      </div>
    </div>
  );
};
