import React, { useState, useEffect } from 'react';
import '../components_css/Navbar.css';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
import { LogOut } from "lucide-react";
import { LuCircleUser } from "react-icons/lu";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ toggleMenu, isMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const userName = "User";
const { user, logout } = useAuth();
  const closeMobileMenu = () => {
    if (isMobileMenuOpen && window.innerWidth <= 1024) {
      toggleMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ms-navbar ${isScrolled ? 'ms-navbar-scrolled' : ''}`}>
      <div className="container-fluid ms-navbar-top-container">
        {/* Logo/Brand */}
        <NavLink className="navbar-brand ms-navbar-logo" to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="FitZone Logo" className="ms-logo-image" />
          <div className="ms-logo-text">
            <span className="ms-brand-name">
              FitZone
            </span>
            <span className="ms-brand-tagline">
              Fitness Start Here..
            </span>
          </div>
        </NavLink>

        {/* Right side controls wrapper */}
        <div className="ms-navbar-controls">
          {/* Mobile Toggle Button for Sidebar */}
          <button
            className={`navbar-toggler ms-mobile-menu-toggle ${isMobileMenuOpen ? 'ms-menu-open' : ''}`}
            type="button"
            onClick={toggleMenu}
            aria-controls="sidebarMenu"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="ms-hamburger-line"></span>
            <span className="ms-hamburger-line"></span>
            <span className="ms-hamburger-line"></span>
          </button>

          {/* Desktop & Mobile Actions - Always Visible */}
          <div className="ms-navbar-actions ms-all-actions">
            <span className="welcome-text">
              <LuCircleUser size={20} /> <span className="username-text">Welcome, {user}</span>
            </span>
            <NavLink to='/login' className="ms-navbar-btn ms-btn-clients">
              <LogOut size={16} />
              <span>Sign Out</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;