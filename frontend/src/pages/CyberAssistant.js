import React, { useState } from "react";
import "./CyberAssistant.css";

const CyberAssistant = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");

  const faq = [
    { keywords: ["cyber security"], answer: "Cybersecurity is the practice of protecting systems, networks, and data from digital attacks." },
    { keywords: ["phishing"], answer: "Phishing is an attack where hackers trick users into giving personal information through fake emails or websites." },
    { keywords: ["strong password"], answer: "Use at least 12 characters, mix uppercase and lowercase letters, numbers, and special symbols." },
    { keywords: ["multi-factor authentication", "mfa"], answer: "MFA is an extra security layer requiring two or more authentication methods to access an account." },
    { keywords: ["stay safe online", "internet safety"], answer: "Update software, use strong passwords, enable MFA, avoid clicking suspicious links, and use antivirus software." },
    { keywords: ["ransomware"], answer: "Ransomware is a type of malware that encrypts files and demands payment to unlock them." },
    { keywords: ["firewall"], answer: "A firewall is a security system that monitors and controls incoming and outgoing network traffic." },
    { keywords: ["antivirus"], answer: "Antivirus software detects and removes malicious programs like viruses and malware." },
    { keywords: ["social engineering"], answer: "Social engineering tricks people into revealing confidential information through manipulation." },
    { keywords: ["two-factor authentication", "2fa"], answer: "2FA is an extra layer of security requiring two forms of identification before accessing an account." },
    { keywords: ["data encryption"], answer: "Encryption converts data into a secure format that can only be read by someone with the decryption key." },
    { keywords: ["vpn"], answer: "A Virtual Private Network (VPN) encrypts your internet connection, protecting your data and privacy online." },
    { keywords: ["malware"], answer: "Malware is malicious software like viruses, worms, and Trojans designed to damage or steal data." },
    { keywords: ["spyware"], answer: "Spyware is software that secretly gathers information about a user without their knowledge." },
    { keywords: ["dos attack", "denial of service"], answer: "A DoS attack overwhelms a website or network with traffic, causing it to crash or slow down." },
    { keywords: ["mitm attack", "man in the middle"], answer: "A MITM attack occurs when a hacker intercepts communication between two parties without their knowledge." },
    { keywords: ["password manager"], answer: "A password manager securely stores and generates strong passwords for online accounts." },
    { keywords: ["ethical hacking"], answer: "Ethical hacking involves legally testing systems for vulnerabilities to improve cybersecurity." },
    { keywords: ["dark web"], answer: "The dark web is a hidden part of the internet that requires special software like Tor to access." },
    { keywords: ["zero-day attack"], answer: "A zero-day attack exploits a software vulnerability before developers can fix it." },
    { keywords: ["botnet"], answer: "A botnet is a network of compromised computers controlled by hackers to launch attacks." },
    { keywords: ["identity theft"], answer: "Identity theft occurs when someone steals personal information to commit fraud." },
    { keywords: ["brute force attack"], answer: "A brute force attack attempts to guess passwords by trying all possible combinations." },
    { keywords: ["sql injection"], answer: "SQL injection is a cyber attack that allows hackers to manipulate databases by injecting malicious SQL code." },
    { keywords: ["cloud security"], answer: "Cloud security protects data, applications, and infrastructure in cloud computing environments." },
    { keywords: ["cyber hygiene"], answer: "Cyber hygiene refers to good security practices like updating software, using strong passwords, and avoiding suspicious links." },
    { keywords: ["public wifi risks"], answer: "Public WiFi can be unsafe because hackers can intercept data. Always use a VPN when using public networks." },
    { keywords: ["trojan horse"], answer: "A Trojan horse is a type of malware that disguises itself as legitimate software." },
    { keywords: ["keylogger"], answer: "A keylogger is malware that records keystrokes to steal sensitive information." },
    { keywords: ["adware"], answer: "Adware is unwanted software that displays excessive ads on your device." },
    { keywords: ["social media security"], answer: "Use strong passwords, enable MFA, and avoid sharing personal information on social media." },
    { keywords: ["dark web monitoring"], answer: "Dark web monitoring helps detect stolen credentials or personal data being sold online." },
    { keywords: ["security patches"], answer: "Security patches are software updates that fix vulnerabilities to protect against attacks." },
    { keywords: ["cyber threat intelligence"], answer: "Cyber threat intelligence helps organizations detect and prevent cyber threats." },
    { keywords: ["avoid cyber attacks", "prevent cyber attacks"], answer: "To avoid cyber attacks, use strong passwords, enable MFA, update software regularly, avoid suspicious links, use antivirus software, and be cautious with emails from unknown senders." }
  ];

  const getAIResponse = (query) => {
    const cleanedQuery = query.toLowerCase().trim();
    const foundAnswer = faq.find(item => item.keywords.some(keyword => cleanedQuery.includes(keyword)));
    const aiReply = foundAnswer ? foundAnswer.answer : "I couldn't understand your question. Please ask something else related to cybersecurity.";
    setResponse(aiReply);
    speakResponse(aiReply);
  };

  const startRecording = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.start();
    setIsRecording(true);
    setTranscript("");
    setResponse("");

    recognition.onresult = (event) => {
      const speechText = event.results[0][0].transcript.toLowerCase();
      setTranscript(speechText);
      getAIResponse(speechText);
    };

    recognition.onend = () => setIsRecording(false);
    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsRecording(false);
    };
  };

  const speakResponse = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    synth.speak(utterance);
  };

  return (
    <div className="cyber-assistant">
      <h2 className="title"> AI-Powered Cyber Assistant</h2>
      <div className="voice-box">
        <button className={`record-btn ${isRecording ? "recording" : ""}`} onClick={startRecording}>
          🎙 {isRecording ? "Recording..." : "Start Recording"}
        </button>
        <div className="text-box">
          <p className="transcript">🔊 {transcript || "Say something..."}</p>
          {response && <p className="ai-response">🤖 {response}</p>}
        </div>
      </div>
    </div>
  );
};

export default CyberAssistant;
