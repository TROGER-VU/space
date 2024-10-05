import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';

// Image imports
import telescope from './assets/images/telescope.png';
import asteroid from './assets/images/asteroid.jpg';
import orbiting from './assets/images/orbiting.jpg';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section
        image={telescope}
        title="Explore the Orbits That Influence Our Planet!"
        description="Learn about how orbital paths of celestial objects impact Earth."
        number="01"
      />
      <Section
        image={asteroid}
        title="Tracking NEOs: Equip Yourself with Space Knowledge!"
        description="Understand the dynamics of near-Earth objects in real-time."
        number="02"
      />
      <Section
        image={orbiting}
        title="Navigating the Cosmic Map & Timing Orbits!"
        description="Discover where and when celestial bodies will be using the cosmic map."
        number="03"
      />
      <Footer />
    </div>
  );
};

export default App;
