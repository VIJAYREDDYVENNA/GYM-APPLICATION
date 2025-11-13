import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MenuItems from './components/SidebarMenu';
import Navbar from './components/Navbar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="appcontainer">
      <BrowserRouter>
        <Navbar toggleMenu={toggleMenu} />
        <div className="content-wrapper">
          <MenuItems isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

