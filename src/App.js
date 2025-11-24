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

import React, { useState } from "react";
import "./App.css";
import SidebarMenu from "./components/SidebarMenu";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { useLocation } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Layout } from "antd";

const { Content } = Layout;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const validPaths = ["/", "/login/", "/attendance/", "/clients/", "/profile/", "/trainers/", "/payments/","/login", "/attendance", "/clients", "/profile", "/trainers", "/payments"];
  const is404Page = !validPaths.includes(location.pathname);

  // import { matchRoutes } from "react-router-dom";
  // import routes from "./AppRoutesConfig";
  // const matches = matchRoutes(routes, location);

  // const is404Page = !matches;


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (

    <AuthProvider>
      {!isLoginPage && !is404Page && (
        <Navbar toggleMenu={toggleMenu} isMobileMenuOpen={isMenuOpen} />
      )}

      <Layout>

        {!isLoginPage && !is404Page && (
          <SidebarMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        )}

        <Content>
          <AppRoutes />
        </Content>

      </Layout>
    </AuthProvider>

  );
}

export default App;
