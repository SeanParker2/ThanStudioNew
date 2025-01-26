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
    <div className="music_17_901">
      <div className="music_17_918">
        <Link to="/" className="music_17_934">Than Studio</Link>
        <div className={`music_17_935 ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <Link to="/work" className={`music_17_986 ${location.pathname === '/work' ? 'active' : ''}`}>Work</Link>
          <Link to="/story" className={`music_17_987 ${location.pathname === '/story' ? 'active' : ''}`}>Story</Link>
          <Link to="/contact" className={`music_17_988 ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          <Link to="/store" className={`music_17_989 ${location.pathname === '/store' ? 'active' : ''}`}>Store</Link>
        </div>
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span>☰</span>
        </button>
      </div>
    </div>
  );
};

export default Header;