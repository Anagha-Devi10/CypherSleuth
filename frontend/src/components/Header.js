// Header.js
import React from 'react';
import './Header.css'; // Import the custom CSS for the header

function Header() {
  return (
    <header className="header">
      <div className="logo">CypherSleuth</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/report-breach">Report Breach</a></li>
          <li><a href="/security">Security Audits</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
