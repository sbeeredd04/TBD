// src/app/components/Navbar.js
"use client";

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.menuIcon}>
        <FaAngleLeft className={styles.hideIcon} />
      </div>
      <div className={styles.navItems}>
        <Link href="/" className={styles.navItem} >Home</Link>
        <Link href="/introduction" className={styles.navItem}>Introduction</Link>
        <Link href="/project" className={styles.navItem}>Project</Link>
        <Link href="/experiments" className={styles.navItem}>Experiments</Link>
        <Link href="/results" className={styles.navItem}>Results</Link>
        <Link href="/team" className={styles.navItem}>Team</Link>
      </div>
    </div>
  );
};

export default Navbar;
