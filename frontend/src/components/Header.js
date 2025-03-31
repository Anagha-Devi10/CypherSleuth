import React, { useState } from "react";
import "./Header.css"; // Import custom CSS

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">CypherSleuth</div>

      
      <nav className={menuOpen ? "nav-visible" : "nav-hidden"}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/report-breach">Report Breach</a></li>
          <li><a href="/classify">Threat Scan</a></li>
        </ul>
      </nav>

      
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
}

export default Header;
 

