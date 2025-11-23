import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
function Navbar({ toggleMenu }) {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm fixed-top" >
      <div className="container-fluid">
      <Link to="/" className="brand-link">
        <img 
          src="/logo192.png" 
          alt="iScientific Logo" 
          className="brand-logo"
        />
        <div className="brand-text-container">
          <span className="brand-name">iScientific</span>
          <span className="brand-tagline" style={{color:"black"}}>Tech Solutions Labs Pvt Ltd</span>
        </div>
      </Link>
        <div className="d-flex align-items-center ">
          <div className="dropdown me-3">
            <button className="btn btn-custom d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <AccountCircleIcon className="me-2 text-primary" />
              <span className='text-dark'>Hello, User</span>
              <i className="bi bi-chevron-down ms-2 text-dark"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end shadow" >
              <li><NavLink className="dropdown-item" to="/profile"><i class="bi bi-person-video2"></i> Profile</NavLink></li>
              <li><NavLink className="dropdown-item" to="/Users"><i class="bi bi-people-fill"></i> Users</NavLink></li>
              <li><hr className="dropdown-divider" /></li>
              <li><NavLink className="dropdown-item text-danger" to="/signout"><LogoutIcon/> Sign Out</NavLink></li>
            </ul>
          </div>
          <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

