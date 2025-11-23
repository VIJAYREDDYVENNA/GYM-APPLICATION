import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Dashboard from '../pages/Dashboard'



const Attendence =React.lazy(()=>import("../pages/Attendence"))
const Clients=React.lazy(()=>import("../pages/Clients"))
const Profile=React.lazy(()=>import("../pages/Profile"))
const Trainers=React.lazy(()=>import("../pages/Trainers"))
const Payments=React.lazy(()=>import("../pages/Payments"))

const { Sider, Content } = Layout;

export const SidebarMenu = ({ isOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const hideNavbar = location.pathname === "/login";

  const handleMenuClick = (key) => {
    navigate(key);
    if (window.innerWidth <= 1023) {
      toggleMenu();
    }
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    {
      label: <h6 style={{marginTop:"7px"}}>Dashboard</h6>,
      key: '/',
      icon: 'bi bi-house-door',
    },
    {
      label: <h6 style={{marginTop:"6px"}}>Clients</h6>,
      key: '/clients',
      icon: 'bi bi-list-ul',
    },
    {
      label: <h6 style={{marginTop:"6px"}}>Trainers</h6>,
      key: '/trainers',
      icon: 'bi bi-power',
    },
    {
      label: <h6 style={{marginTop:"6px"}}>Attendence</h6>,
      key: '/attendence',
      icon: 'bi bi-map',
    },
    {
      label: <h6 style={{marginTop:"7px"}}>Payments</h6>,
      key: '/payments',
      icon: 'bi bi-file-earmark-text',
    }
   ,
    {
      label: <h6 style={{marginTop:"7px"}}>Profile</h6>,
      key: '/profile',
      icon: 'bi bi-file-earmark-text',
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
    <><style>{`:root {
  --primary-color: #007bff;
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
  margin-top: 80px;
  background-color: white;
  transition: all 0.3s ease-in-out;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.custom-menu::-webkit-scrollbar {
  display: none;
}

.menu-list {
  height: 100%;
  border-right: 0;
}

/* --- SELECTED MENU ITEM --- */
.custom-menu .ant-menu-item-selected {
  font-weight: bold;
  background-color: rgba(0, 123, 255, 0.1);
  position: relative;
  overflow: hidden;
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
  background-color: rgba(0, 123, 255, 0.05);
  font-weight: bold;
}

/* --- RIGHT CONTENT AREA --- */
.content-styles {
  margin-top: 66px;
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
}

/* --- COLLAPSE BUTTON --- */
.collapse-button {
  position: absolute;
  top: 50%;
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

/* --- RESPONSIVE FOR MOBILE --- */
@media screen and (max-width: 1023px) {
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

  .content-styles {
    margin-left: 0;
  }
}

/* --- EXTRA SMALL SCREEN --- */
@media screen and (min-width: 300px) and (max-width: 431px) {
  .custom-menu,
  .content-styles {
    margin-top: 113px;
  }
}
`}</style>
    <Layout className="dashboard-layout">
      <Sider
        width={270}
        collapsedWidth={80}
        collapsed={collapsed}
        collapsible
        trigger={null}
        className={`custom-menu ${isOpen ? 'show' : ''}`}
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
        <div className="collapse-button" onClick={toggleCollapsed}>
          {collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
        </div>
      </Sider>
      <Content className="content-styles">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/attendence" element={<Attendence/>} />
          <Route path="/clients" element={<Clients/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/trainers" element={<Trainers/>} />
          <Route path="/payments" element={<Payments/>} />
        </Routes>
      </Content>
    </Layout></>
  );
};

export default SidebarMenu;

