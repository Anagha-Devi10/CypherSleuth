import React, { useState, useEffect } from "react";
import { FaRegCopy } from "react-icons/fa";
import "./TwoFactorAuth.css";

function TwoFactorAuth() {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const secret = "JBSWY3DPEHPK3PXP"; // Static secret for now, replace for real use.

  useEffect(() => {
    const interval = setInterval(() => {
      
    }, 30000); // Refresh code every 30 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 30));
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  const copyToClipboard = () => {
    navigator.clipboard.writeText(otp);
    alert("2FA Code Copied!");
  };

  return (
    <div className="tfa-container">
      <h2>Two-Factor Authentication (2FA)</h2>
      <div className="otp-box">
        <span className="otp-code">{otp || "Loading..."}</span>
        <button className="copy-btn" onClick={copyToClipboard}>
          <FaRegCopy />
        </button>
      </div>
      <p className="timer-text">New code in: {timeLeft}s</p>
    </div>
  );
}

export default TwoFactorAuth;
