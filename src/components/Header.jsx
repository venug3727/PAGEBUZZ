// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Button from "./Button";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1><Link to="/">PAGEBUZZ</Link></h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/stats">STATS</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/feed">FEEDBACK</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
      <Button variant="primary" size="medium">
        EMAIL US
      </Button>
    </header>
  );
};

export default Header;
