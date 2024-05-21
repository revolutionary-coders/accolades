import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Collection from '../Collection/Collection'
import Explore from '../Explore/Explore'
import SitemapFooter from '../Footer/Footer'
import FaqComponent from '../Faq/FaqComponent'
import NewsletterSignup from '../NewsLetter/NewsletterSignup'
import TestimonialCarousel from '../Testimonial/TestimonialCarousel'
import BannerSlider from '../BannerSlidder/BannerSlidder'



const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Collection/>
    <Explore/>
    
    <BannerSlider/>
    <TestimonialCarousel/>
    <FaqComponent/>
    <NewsletterSignup/>
    <SitemapFooter/>
    
    </>
  )
}

export default Home