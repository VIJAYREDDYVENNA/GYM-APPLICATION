import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Dashboard from '../pages/Dashboard';

const Members=React.lazy(()=>import('../pages/Members'))
const Trainers=React.lazy(()=>import('../pages/Trainers'))
const Attendence=React.lazy(()=>import('../pages/Attendence'))
const Payments=React.lazy(()=>import('../pages/Payments'))

const { Sider, Content } = Layout;

export const SidebarMenu = ({ isOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

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
      label: <h6 style={{marginTop:"6px"}}>Members</h6>,
      key: '/members',
      icon: 'bi bi-people',
    },
    {
      label: <h6 style={{marginTop:"6px"}}>Trainers</h6>,
      key: '/trainers',
      icon: 'bi bi-person-badge',
    },
     {
      label: <h6 style={{marginTop:"7px"}}>Attendance</h6>,
      key: '/attendence',
      icon: 'bi bi-calendar-check',
    },
    {
      label: <h6 style={{marginTop:"6px"}}>Payments</h6>,
      key: '/payments',
      icon: 'bi bi-credit-card',
    },
   
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
    <Layout className="dashboard-layout">
      <Sider
        width={240}
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
          <Route path="/members" element={<Members/>} />
          <Route path="/trainers" element={<Trainers/>} />
          <Route path="/payments" element={<Payments/>} />
          <Route path="/attendence" element={<Attendence/>} />
                 
        </Routes>
      </Content>
    </Layout>
  );
};

export default SidebarMenu;