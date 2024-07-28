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
      <Sidebar />
      <Navbar />
        <main style={{ marginLeft: '80px', marginTop: '80px', transition: 'margin-left 0.3s' }}>  
        
        {children}
        </main>
      </body>
    </html>
  );
}
