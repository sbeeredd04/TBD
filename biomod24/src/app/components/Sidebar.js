// src/app/components/Sidebar.js

"use client";

import { useState, useEffect } from 'react';
import { FaBars, FaYoutube, FaSun, FaMoon, FaRobot } from 'react-icons/fa';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.menuIcon}>
        <FaBars />
      </div>
      <div className={styles.menuItems}>
        <div className={styles.menuItem}>
          <span><h2>Cargo Sorting Robot</h2></span>
        </div>
        <div className={styles.menuItem}>
          <FaRobot />
          <span>Welcome</span>
        </div>
        <div className={styles.menuItem}>
          <FaYoutube />
          <span>Video</span>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.themeToggle} onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </div>
        <div className={styles.footerText}>
          BIOMOD 2024
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
