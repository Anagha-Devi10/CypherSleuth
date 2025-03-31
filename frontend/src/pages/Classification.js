import React, { useState } from 'react';
import axios from 'axios';
import './Classification.css';  // Import CSS file
import Header from '../components/Header'; 
function Classification() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🔹 Sending Request to Backend...");  // ✅ Debugging Line
  
    try {
      const response = await axios.post("http://127.0.0.1:5000/scan-message", { message: text });
  
      console.log("✅ Response from Backend:", response.data);  // ✅ Debugging Line
      setResult(response.data.classification || "Unexpected response format.");
    } catch (error) {
      console.error("❌ Error fetching classification:", error);
      setResult("Error processing the request.");
    }
  };
  

  return (
    <div>
      <Header/>
    <div className="classification-container">
      <h1>Threat Scan</h1>
      <p>Enter a message to check if it's Spam, Phishing, MITM, or DoS Attack.</p>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Enter text here..."
          required
        />
        <button className="cc" type="submit">Classify</button>
      </form>
      {result && <h2>Prediction: {result}</h2>}
    </div>
    </div>
  );
}

export default Classification;
