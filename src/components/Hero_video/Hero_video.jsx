import React from "react";
import "./Hero_video.css";
const HeroVideo = () => {
  return (
    <section className="hero">
      <video autoPlay muted loop className="hero-video">
        <source src="/Hero_video.mp4" type="video/mp4" />
      </video>
      {/* Overlay Content */}
      <div className="hero-overlay">
        <h1 className="hero-title">FIND YOUR NEW HOME</h1>
        <p className="hero-subtitle">
          SEARCH & COMPARE AMONG 5000+ PROPERTIES AND 500+ COMPOUNDS OR LIST
          YOUR PROPERTY FOR SALE
        </p>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Type your Preffered Area, Developers, Projects"
          />
          <select>
            <option>Property Type</option>
            <option>Property Type</option>
            <option>Property Type</option>
            <option>Property Type</option>
          </select>
          <select>
            <option>Bedrooms</option>
            <option>Bedrooms</option>
            <option>Bedrooms</option>
            <option>Bedrooms</option>
          </select>
          <select>
            <option>Price</option>
            <option>Price</option>
            <option>Price</option>
            <option>Price</option>
          </select>
          <button className="search-button">Search</button>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
