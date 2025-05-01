// About.jsx
import React from "react";
import "./About.css";
import teamImage from "/contact.jpg"; // replace with your actual path
import arch1 from "/contact.jpg";
import arch2 from "/contact.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="innerWidth paddings about-content">
        <h2>
          ABOUT{" "}
          <span className="highlight">
            {" "}
            LIVIN.OFO <br />{" "}
          </span>
        </h2>
        <span>
          Livin was established in June 2023 by <strong>Khaled</strong>,{" "}
          <strong>Mohamed</strong>, and
          <strong> Ahmed</strong>. We are committed to delivering high-value
          real estate solutions and...
        </span>
          <img src={teamImage} alt="Team" />
      </div>
      <div className="about-difference">
        <h3>What Makes Us Different</h3>
        <div className="difference-grid">
          <div className="difference-block">
            <h4>📍 Unparalleled Expertise</h4>
            <p>Our team boasts extensive knowledge...</p>
          </div>

          <div className="difference-block">
            <h4>📈 Proven Track Record</h4>
            <p>Since our establishment in 2023...</p>
          </div>

          <img src={arch1} alt="Architecture 1" className="arch-image" />

          <div className="difference-block">
            <h4>🔗 Seamless Navigation</h4>
            <p>Our streamlined approach connects you...</p>
          </div>

          <div className="difference-block">
            <h4>🤝 Client-Centric Approach</h4>
            <p>Where service meets care...</p>
          </div>

          <div className="difference-block">
            <h4>🚀 Unlocking Potential</h4>
            <p>We view real estate as more than a transaction...</p>
          </div>

          <img src={arch2} alt="Architecture 2" className="arch-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
