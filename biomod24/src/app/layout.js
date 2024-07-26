// src/app/layout.js
import Sidebar from './components/Sidebar';
import './styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main style={{ marginLeft: '80px', transition: 'margin-left 0.3s' }}>
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
