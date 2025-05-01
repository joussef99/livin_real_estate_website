import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className=" felxCenter innerWidth  footer-wrapper"
      data-aos="fade-up"
    >
      <div className=" footer-content">
        {/* Left Links */}
        <div className=" flexCenter innerWidth footer-links">
          <img src="/livin-removebg-preview.png" alt="livin" width={180} />
          <div className=" footer-column">
            <h2>Top Districts</h2>
            <ul>
              <li>New Cairo</li>
              <li>El Sheikh Zayed</li>
              <li>North Coast</li>
              <li>Ain Sokhna</li>
              <li>6th October</li>
            </ul>
          </div>

          <div className="footer-column">
            <h2>Top Developers</h2>
            <ul>
              <li>Mountain View</li>
              <li>Palm Hills</li>
              <li>Tatweer Misr</li>
              <li>Waterway</li>
              <li>Cred</li>
            </ul>
          </div>

          <div className="footer-column">
            <h2>Top Projects</h2>
            <ul>
              <li>Mountain View iCity</li>
              <li>District 5</li>
              <li>Solare</li>
              <li>Salt</li>
              <li>Plage</li>
            </ul>
          </div>
        </div>

        <div className="contact-us-box">
          <h2>Contact Us</h2>

          {/* Address with icon */}
          <p className="contact-line">
            <a
              href="https://maps.app.goo.gl/UYkBuDd9au3CW1vH8?g_st=com.google.maps.preview.copy"
              target="_blank"
              rel="noopener noreferrer"
            >
              18 ABBAS ELAKKAD <br /> 
            </a>
          </p>

          {/* Emails */}
          <p className="contact-line">
            <a href="mailto:operationslivin@gmail.com">operationslivin@gmail.com</a>
          </p>
          {/* Phone (optional) */}
          <p className="contact-line">
            <FaPhoneAlt />
            <a href="tel:+201501087033"> +20 150 108 7033</a>
          </p>

          {/* Social icons */}
          <div className="social-icons">
            <a
              href="https://www.facebook.com/share/1FZ5Z4SDmK/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/livin.investments?igsh=OTI1eWV5ZWczMGk0"
              target="_blank"
              rel="noopener"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/livin-ofo/posts/?feedView=all"
              target="_blank"
              rel="noopener"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.tiktok.com/@livin.investments?_t=ZS-8vzb1C7QaRN&_r=1"
              target="_blank"
              rel="noopener"
            >
              <FaTiktok />
            </a>
            <a
              href="https://youtube.com/c/YourChannel"
              target="_blank"
              rel="noopener"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
