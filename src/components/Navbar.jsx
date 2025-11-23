import React, { useState, useEffect } from 'react';
import '../components_css/Navbar.css';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
import {LogOut } from "lucide-react";
import { LuCircleUser } from "react-icons/lu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const userName = "User";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header className={`ms-navbar ${isVisible ? 'ms-navbar-visible' : 'ms-navbar-hidden'}`}>
      {/* Top Row - Logo and Actions */}
      <div className="ms-navbar-top">
        <div className="ms-navbar-top-container">
          {/* Logo */}
          <div className="ms-navbar-logo">
            <NavLink to="/" onClick={closeMobileMenu}>
              <img src={logo} alt="FitZone Logo" className="ms-logo-image" />
              <div style={{ marginLeft: '12px', display: 'flex', flexDirection: 'column' }}>
                <span style={{ 
  fontSize: '1.5rem', 
  fontWeight: '700', 
  color: '#ffffff',
  lineHeight: '1.2',
  letterSpacing: '0.5px'
}}>
  FitZone
</span>
<span style={{ 
  fontSize: '0.75rem', 
  fontWeight: '400', 
  color: '#ff8c42',  // Changed to an energetic orange
  lineHeight: '1.2',
  letterSpacing: '0.3px',
  marginTop: '2px'
}}>
  Fitness Start Here..
</span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="ms-navbar-actions ms-desktop-actions">
            <span className="welcome-text"> <LuCircleUser size={20}/> Welcome, {userName}</span>       
            <NavLink to='/login' className="ms-navbar-btn ms-btn-clients">
              <LogOut size={16} />
              <span>Sign Out</span>
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`ms-mobile-menu-toggle ${isMobileMenuOpen ? 'ms-menu-open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="ms-hamburger-line"></span>
            <span className="ms-hamburger-line"></span>
            <span className="ms-hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="ms-navbar-bottom ms-menu-visible">
          <div className="ms-navbar-bottom-container">
            <div className="ms-mobile-actions">
              <p className="welcome-text-mobile text-center">Welcome, {userName}</p>             
              <NavLink to='/login' className="ms-navbar-btn ms-btn-clients">
                <LogOut size={16} />
                <span>Sign Out</span>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;