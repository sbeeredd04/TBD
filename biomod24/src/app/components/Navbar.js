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
        <Link href="/"><div className={styles.navItem}>Home</div></Link>
        <Link href="/introduction"><div className={styles.navItem}>Introduction</div></Link>
        <Link href="/project"><div className={styles.navItem}>Project</div></Link>
        <Link href="/experiments"><div className={styles.navItem}>Experiments</div></Link>
        <Link href="/results"><div className={styles.navItem}>Results</div></Link>
        <Link href="/team"><div className={styles.navItem}>Team</div></Link>
      </div>
    </div>
  );
};

export default Navbar;
