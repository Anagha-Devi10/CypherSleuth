import React from "react";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";

// Expanded attack data with additional details
const attackData = [
  { 
    country: "United States", 
    lat: 37.0902, 
    lon: -95.7129, 
    attacks: 215, 
    lastAttack: "2025-03-30", 
    threatLevel: "High",
    description: "A significant number of attacks originating from various IPs targeting critical infrastructure."
  },
  { 
    country: "Germany", 
    lat: 51.1657, 
    lon: 10.4515, 
    attacks: 43, 
    lastAttack: "2025-03-28", 
    threatLevel: "Medium", 
    description: "Multiple attacks reported targeting financial institutions."
  },
  { 
    country: "Russia", 
    lat: 61.524, 
    lon: 105.3188, 
    attacks: 37, 
    lastAttack: "2025-03-27", 
    threatLevel: "High", 
    description: "Cyber espionage activities targeting government networks."
  },
  { 
    country: "China", 
    lat: 35.8617, 
    lon: 104.1954, 
    attacks: 54, 
    lastAttack: "2025-03-25", 
    threatLevel: "Medium", 
    description: "A mix of phishing attacks and malware distribution campaigns."
  },
  { 
    country: "India", 
    lat: 20.5937, 
    lon: 78.9629, 
    attacks: 63, 
    lastAttack: "2025-03-26", 
    threatLevel: "High", 
    description: "Increase in DDoS attacks and botnet activity targeting government websites."
  },
  { 
    country: "France", 
    lat: 46.6034, 
    lon: 1.8883, 
    attacks: 25, 
    lastAttack: "2025-03-23", 
    threatLevel: "Low", 
    description: "Various ransomware and phishing attacks reported targeting businesses."
  },
  { 
    country: "Australia", 
    lat: -25.2744, 
    lon: 133.7751, 
    attacks: 17, 
    lastAttack: "2025-03-22", 
    threatLevel: "Medium", 
    description: "Cyber criminals targeting the healthcare sector, deploying malware."
  },
  { 
    country: "United Kingdom", 
    lat: 55.3781, 
    lon: -3.435, 
    attacks: 30, 
    lastAttack: "2025-03-29", 
    threatLevel: "High", 
    description: "High volume of phishing emails targeting financial accounts."
  },
  { 
    country: "Brazil", 
    lat: -14.2350, 
    lon: -51.9253, 
    attacks: 18, 
    lastAttack: "2025-03-21", 
    threatLevel: "Medium", 
    description: "Multiple instances of data breaches and attacks on social media platforms."
  },
  { 
    country: "Japan", 
    lat: 36.2048, 
    lon: 138.2529, 
    attacks: 28, 
    lastAttack: "2025-03-20", 
    threatLevel: "Low", 
    description: "Targeted attacks on e-commerce and retail companies."
  },
  { 
    country: "Nigeria", 
    lat: 9.082, 
    lon: 8.6753, 
    attacks: 39, 
    lastAttack: "2025-03-18", 
    threatLevel: "Medium", 
    description: "Increasing cybercrime activity, particularly fraud and data theft."
  },
  { 
    country: "Angola", 
    lat: -11.2027, 
    lon: 17.8739, 
    attacks: 21, 
    lastAttack: "2025-03-19", 
    threatLevel: "Low", 
    description: "Cyber attacks mainly targeting small businesses and telecom networks."
  },
];

const CyberMap = () => {
  const navigate = useNavigate();

  // Function to scale the circle radius and avoid overlap
  const getRadius = (attacks) => {
    return Math.min(attacks * 25000, 800000);  // Adjust the max value (800000) as needed
  };

  return (
    <div style={{ textAlign: "center" }}>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: "600px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {attackData.map((data, index) => (
          <Circle
            key={index}
            center={[data.lat, data.lon]}
            pathOptions={{ color: "red", fillColor: "red", fillOpacity: 0.5 }}
            radius={getRadius(data.attacks)} // Dynamically calculate the radius
          >
            <Popup>
              <div>
                <b>🌐 {data.country}</b>
                <br />
                🔴 <b>{data.attacks}</b> attacks detected
                <br />
                📅 <b>Last Attack:</b> {data.lastAttack}
                <br />
                ⚠️ <b>Threat Level:</b> {data.threatLevel}
                <br />
                <p>{data.description}</p>
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
};

export default CyberMap;
 