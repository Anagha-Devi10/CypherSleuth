import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CyberNews.css"; // Assuming you have a CSS file for styling

const CyberNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/get-news")
      .then((response) => {
        setNews(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch news.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="news-container">
      <h2>Cybersecurity News</h2>
      {news.map((article, index) => (
        <div key={index} className="news-article">
          <h3>{article.title}</h3>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
    </div>
  );
};

export default CyberNews;
