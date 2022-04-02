import React from 'react';
import logo from '../../assets/google.png';
import './navbar.css';

const Navbar = () => (
  <div className="droppers__navbar">
    <div className="droppers__navbar-links">
      <div className="droppers__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="droppers__navbar-links_containers">
        <p><a href="#home">Home</a></p>
        <p><a href="#wdroppers">What is Droppers?</a></p>
        <p><a href="#possibility">Store</a></p>
        <p><a href="#Features">Contact Us</a></p>
        <p><a href="#blog">More</a></p>
      </div>
    </div>
    <div className="droppers__navbar-sign">
      <p>Sign in</p>
      <button type="button">Sign up</button>
    </div>
  </div>
);

export default Navbar;
