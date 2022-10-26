import React from 'react';
import './About.css'
import mockup from '../../assets/mockup.png'

const About = () => {
  return <div className='about-container'>
    
    <img src={mockup} alt='woman buying online'></img>

    <div className='abouttext-container'>
      <h1>Your favorite online shop</h1>
      <p>Perfumerie, the leading social selling beauty company in North America, is proud to be part of the LG H&H family, the #1 consumer goods company in Korea, putting a fresh face forward and driving a new era of innovation. With new virtual try-on technology, expanded shade ranges, clean and vegan beauty and richer, longer-lasting fragrances, Perfumerie is creating the future of beauty every day!</p>
    </div>
  </div>;
};

export default About;
