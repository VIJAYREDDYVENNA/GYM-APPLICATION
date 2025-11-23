// import React from 'react';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Login from './auth/login';
// import Home from './pages/Home'

// const Attendence =React.lazy(()=>import("./pages/Attendence"))
// const Dashboard=React.lazy(()=>import("./pages/Dashboard"))
// const Members=React.lazy(()=>import("./pages/Clients"))
// const Profile=React.lazy(()=>import("./pages/Profile"))
// const Trainers=React.lazy(()=>import("./pages/Trainers"))
// const Payments=React.lazy(()=>import("./pages/Payments"))
// function App() {
//   const location = useLocation(); 
//   const hideNavbar = location.pathname === "/login";

//   return (
//     <>
//       {!hideNavbar && <Navbar />}

//       <div className='customMarginTop'>
//         <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/dashboard" element={<Dashboard/>} />
//         <Route path="/attendence" element={<Attendence/>} />
//         <Route path="/clients" element={<Members/>} />
//         <Route path="/payments" element={<Payments/>} />
//         <Route path="/profile" element={<Profile/>} />
//         <Route path="/trainers" element={<Trainers/>} />
//         <Route path="/login" element={<Login />} />
//         <Route path="*" element={<h4>Page Not Found</h4>} />
//       </Routes>
//       </div>
//     </>
//   );
// }

// export default function AppWrapper() {
//   return (
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// }


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
        <Navbar />
        <div className="content-wrapper">
          <MenuItems isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


