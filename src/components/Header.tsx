import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="header-logo">Than Studio</Link>
        <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <Link to="/work" className={`nav-item ${location.pathname === '/work' ? 'active' : ''}`}>Work</Link>
          <Link to="/story" className={`nav-item ${location.pathname === '/story' ? 'active' : ''}`}>Story</Link>
          <Link to="/contact" className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          <Link to="/store" className={`nav-item ${location.pathname === '/store' ? 'active' : ''}`}>Store</Link>
        </nav>
        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;