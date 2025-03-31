// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      <div className="card-container">
        <div className="card1" onClick={() => navigate('/password-checker')}>
          Password Strength Checker
        </div>
        <div className="card2" onClick={() => navigate('/email-leak-checker')}>
          Email Leak Checker
        </div>
        <div className="card3" onClick={() => navigate('/cyber-news')}>
          Cybersecurity News
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
