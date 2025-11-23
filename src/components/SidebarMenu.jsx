import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Dashboard from '../pages/Dashboard'
import ProtectedRoute from "../components/ProtectedRoute";
import Login from '../auth/login'

const Attendance = React.lazy(() => import("../pages/Attendance"))
const Clients = React.lazy(() => import("../pages/Clients"))
const Profile = React.lazy(() => import("../pages/Profile"))
const Trainers = React.lazy(() => import("../pages/Trainers"))
const Payments = React.lazy(() => import("../pages/Payments"))

const { Sider, Content } = Layout;

export const SidebarMenu = ({ isOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const hideNavbar = location.pathname === "/login";

  const handleMenuClick = (key) => {
    navigate(key);
    if (window.innerWidth <= 1024) {
      toggleMenu(); // Close menu on mobile/tablet after selection
    }
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    {
      label: <h6 style={{ marginTop: "7px" }}>Dashboard</h6>,
      key: '/',
      icon: 'bi bi-house-door',
    }, {
      label: <h6 style={{ marginTop: "6px" }}>Clients</h6>,
      key: '/clients',
      icon: 'bi bi-people',
    },
    {
      label: <h6 style={{ marginTop: "6px" }}>Trainers</h6>,
      key: '/trainers',
      icon: 'bi bi-person-workspace',
    },
    {
      label: <h6 style={{ marginTop: "6px" }}>Attendance</h6>,
      key: '/attendance',
      icon: 'bi bi-check2-circle',
    },
    {
      label: <h6 style={{ marginTop: "7px" }}>Payments</h6>,
      key: '/payments',
      icon: 'bi bi-credit-card',
    },
    {
      label: <h6 style={{ marginTop: "7px" }}>Profile</h6>,
      key: '/profile',
      icon: 'bi bi-person-circle',
    }
  ];

  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu
            key={item.key}
            icon={<i className={item.icon}></i>}
            title={item.label}
            popupClassName="custom-submenu-popup"
          >
            {renderMenuItems(item.children)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item
          key={item.key}
          icon={<i className={`${item.icon}`} style={{ fontSize: '15px', height: '15px', lineHeight: '20px' }}></i>}
        >
          {item.label}
        </Menu.Item>
      );
    });
  };

  return (
    <>
      <style>{`:root {
  --primary-color: #ff8c42;
  --secondary-color: #6c757d;
}

/* --- LAYOUT WRAPPER --- */
.dashboard-layout {
  display: flex;
  flex: 1;
 
}

/* --- SIDEBAR MENU (ANTD) --- */
.custom-menu {
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: white;
  transition: all 0.3s ease-in-out;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
   
}
@media (max-width:476px){
        .custom-menu{
        margin-top:90px;
        }

}
@media (min-width:477px) and (max-width:769px){
        .custom-menu{
        margin-top:65px;
        }

}
@media (min-width:770px) and (max-width:1024px){
        .custom-menu{
        margin-top:77px;
        }

}
.custom-menu::-webkit-scrollbar {
  display: none;
}

.menu-list {
  height: 100%;
  border-right: 0;
  background-color:rgb(248, 249, 252);
}

/* --- SELECTED MENU ITEM --- */
.custom-menu .ant-menu-item-selected {
  font-weight: bold;
  background-color: rgba(203, 200, 21, 0.1);
  position: relative;
  overflow: hidden;
  color:rgba(255, 140, 66)
}

.custom-menu .ant-menu-item-selected::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--primary-color);
  animation: slideIn 0.3s ease-out;
}

/* --- MENU HOVER EFFECTS --- */
.custom-menu .ant-menu-item,
.custom-menu .ant-menu-submenu-title {
  transition: all 0.3s ease;
}

.custom-menu .ant-menu-item:hover,
.custom-menu .ant-menu-submenu-title:hover {
  background-color:  rgba(255, 140, 66,0.1);
  font-weight: bold;
}

/* --- RIGHT CONTENT AREA --- */
.content-styles {
  flex: 1;
  overflow-y: auto;
}

/* --- COLLAPSE BUTTON --- */
.collapse-button {
  position: absolute;
  top: 45%;
  right: -10px;
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
}

.collapse-button:hover {
  background-color: var(--secondary-color);
}

/* --- SELECTED INDICATOR ANIMATION --- */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

/* --- MOBILE OVERLAY --- */
.mobile-overlay {
  display: none;
}

/* --- RESPONSIVE FOR MOBILE/TABLET --- */
@media screen and (max-width: 1024px) {
  .custom-menu {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
    background-color: white;
    transform: translateX(-100%);
  }

  .custom-menu.show {
    transform: translateX(0);
  }

  /* Hide collapse button on mobile/tablet */
  .collapse-button {
    display: none !important;
  }

  .content-styles {
    margin-left: 0;
  }

  /* Mobile overlay when sidebar is open */
  .mobile-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  .mobile-overlay.show {
    opacity: 1;
    visibility: visible;
  }
}
`}</style>
      
    
  
    {/* Mobile Overlay */}
    <div
      className={`mobile-overlay ${isOpen ? "show" : ""}`}
      onClick={toggleMenu}
    ></div>

    <Sider
      width={230}
      collapsedWidth={80}
      collapsed={collapsed}
      collapsible
      trigger={null}
      className={`custom-menu ${isOpen ? "show" : ""}`}
    >
      <Menu
        mode="inline"
        onClick={({ key }) => handleMenuClick(key)}
        defaultSelectedKeys={[location.pathname]}
        selectedKeys={[location.pathname]}
        className="menu-list"
      >
        {renderMenuItems(menuItems)}
      </Menu>

      {/* collapse button */}
      <div className="collapse-button" onClick={toggleCollapsed}>
        {collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
      </div>
    </Sider>
  

    </>
  );
};

export default SidebarMenu;