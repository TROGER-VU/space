import React from 'react';
import './Hero.css';
import heroImage from '../assets/images/hero-image.jpg'; 

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>Navigate The Cosmos: <br/>Unlock The Mysteries Of <br/>Near-Earth Space!</h1>
        <p>scroll down</p>
      </div>
    </section>
  );
};

export default Hero;
