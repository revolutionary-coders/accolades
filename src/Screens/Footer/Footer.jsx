import React from "react";
import "./Footer.css";

const SitemapFooter = () => {
  const photos = [
    "./images/insta-feed1.jpg",
    "./images/insta-feed2.jpg",
    "./images/insta-feed3.jpg",
    "./images/insta-feed4.jpg",
    "./images/insta-feed5.jpg",
    "./images/insta-feed6.jpg",
    "./images/insta-feed7.jpg",
    "./images/insta-feed8.jpg",
    "./images/insta-feed9.jpg",
  ];

  return (
    <footer className="sitemap-footer">
      <div className="container1">
        <div className="upper-section">
          <h1>LOGO</h1>
        </div>
        <div className="middle-section">
          <div className="slogan-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              explicabo. Soluta necessitatibus totam pariatur nulla voluptas,
              facilis porro quae? Cupiditate rem delectus reiciendis, illum
              tempore
            </p>
          </div>
          <div className="items-container">
            <div className="sitemap-section">
              <h4>Website Links</h4>
              <ul>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/get-in-touch">Get in Touch</a>
                </li>
                <li>
                  <a href="/faq">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="sitemap-section">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="/jacket">Jackets</a>
                </li>
                <li>
                  <a href="/shoes">Shoes</a>
                </li>
                <li>
                  <a href="/Belts">Belts</a>
                </li>
                <li>
                  <a href="/wallet">Wallet</a>
                </li>
              </ul>
            </div>
            <div className="sitemap-section">
              <h4>Developer</h4>
              <ul>
                <li>
                  <a href="/feature">Feature</a>
                </li>
                <li>
                  <a href="/testomonials">Testimonials</a>
                </li>
                <li>
                  <a href="/Referrals">Referrals</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="insta-feed-container"></div>
        </div>
        <div className="lower-section">
          <p>No Copyrighted © 2022, THE ACCOLADES</p>
        </div>
      </div>
    </footer>
  );
};

export default SitemapFooter;
