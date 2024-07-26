// src/app/components/Sidebar.j

"use client";

import { useState } from 'react';
import { FaBars, FaTimes, FaUserAlt, FaCog, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 95%;
  width: ${({ isOpen }) => (isOpen ? '200px' : '60px')};
  background: #111;
  transition: width 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  margin: 20px;
  border-radius: 10px;
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
  padding: 20px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
`;

const MenuIcon = styled.div`
  margin: 20px;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
`;

const MenuItems = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({ isOpen }) => (isOpen ? 'flex-start' : 'center')};
  padding-top: 30px;
`;

const MenuItem = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #333;
  }
  & > span {
    display: ${({ isOpen }) => (isOpen ? 'inline' : 'none')};
    margin-left: 10px;
  }
`;

const Footer = styled.div`
  padding: 20px;
  color: #fff;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContainer isOpen={isOpen}>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <MenuItems isOpen={isOpen}>
        <MenuItem isOpen={isOpen}>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </MenuItem>
        <MenuItem isOpen={isOpen}>
          <FaUserAlt />
          <span>Profile</span>
        </MenuItem>
        <MenuItem isOpen={isOpen}>
          <FaCog />
          <span>Settings</span>
        </MenuItem>
        <MenuItem isOpen={isOpen}>
          <FaSignOutAlt />
          <span>Logout</span>
        </MenuItem>
      </MenuItems>
      <Footer>Manu Arora</Footer>
    </SidebarContainer>
  );
};

export default Sidebar;
