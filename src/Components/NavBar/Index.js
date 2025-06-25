// Navbar Component
// Displays site navigation and a responsive menu toggle

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Styles.css";

// Navigation items
const navLinks = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/About' },
  { label: 'SKILLS', to: '/Skills' },
  { label: 'PORTFOLIO', to: '/Portfolio' },
  { label: 'CONTACT', to: '/Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu open/close
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu}>
          <div className="navbar-logo">
            <span>Sir</span> Herlerdhyre
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className={isMenuOpen ? "navbar-menu active" : "navbar-menu"}>
          {navLinks.map((item, index) => (
            <li className="navbar-list" key={index}>
              <Link
                to={item.to}
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Icon */}
        <div className="nav-toggle" onClick={handleToggle}>
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
