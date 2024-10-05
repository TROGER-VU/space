import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="left-icons">
        {/* <FaInstagram className="social-icon" /> */}
      </div>
      <div className="logo">NEO</div>
      <nav>
        <ul className="nav-links">
          <a href="#about">About</a>
          <a href="#app">The App</a>
          <a href="#blog">Blog</a>
        </ul>
      </nav>
      <div className="account">
        <a href="#account">Account</a>
      </div>
    </header>
  );
};

export default Header;
