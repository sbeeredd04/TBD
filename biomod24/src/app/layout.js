// src/app/layout.js
"use client";

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './styles/globals.css';
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <html lang="en">
      <body>
        <main style={{ marginLeft: '80px', marginTop: '80px', transition: 'margin-left 0.3s' }}>  
        <Sidebar />
        <Navbar />
        {children}
        </main>
      </body>
    </html>
  );
}
