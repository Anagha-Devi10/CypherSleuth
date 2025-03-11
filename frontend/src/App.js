
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardPage from './pages/DashboardPage';
import BreachReportingPage from './pages/ReportBreach';
import SecurityAuditsPage from './pages/SecurityAuditsPage';
import SpamDetection from './components/SpamDetection';
import PhishingDetection from './components/PhishingDetection';
import Recommendations from './components/Recommendations';
import ReportBreach from './pages/ReportBreach';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/report-breach" element={<ReportBreach />} />
        <Route path="/security-audits" element={<SecurityAuditsPage />} />
        <Route path="/spam-detection" element={<SpamDetection />} />
        <Route path="/phishing-detection" element={<PhishingDetection />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </Router>
  );
}

export default App;
