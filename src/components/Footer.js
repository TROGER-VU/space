import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h4>More on The App</h4>
          <ul>
            <li><a href="#about">About NEO</a></li>
            <li><a href="#contributors">Contributors & Writers</a></li>
            <li><a href="#write">Write For Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4>More on NEO</h4>
          <ul>
            <li><a href="#team">The Team</a></li>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#press">Press</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
