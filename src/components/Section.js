import React from 'react';
import './Section.css';

const Section = ({ image, title, description, number }) => {
  return (
    <section className="section">
      <div className="section-content">
        <h2>{number}. {title}</h2>
        <p>{description}</p>
        <a href="#read-more" className="read-more">read more</a>
      </div>
      <div className="section-image">
        <img src={image} alt={title} />
      </div>
    </section>
  );
};

export default Section;
