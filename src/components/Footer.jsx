import React from 'react';
import './Footer.css';
import logo from '../assets/logo.jpg'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Logo" className="footer-logo" />
          <h2>MasterPlace</h2>
          <p>Your trusted partner in premium real estate Your trusted partner in premium real estate Your trusted partner in premium real estate.</p>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/properties">All Properties</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Contact Info</h4>
            <p>📍 Hinjewadi, Pune</p>
            <p>📞 <a href="tel:+919970017701">+91 9518761666</a></p>
            <p>✉ <a href="mailto:info@masterplace.in">info@masterplace.in</a></p>
          </div>
          <div className="link-column">
            <h4>Find Us</h4>
            <iframe
              title="MasterPlace Location"
              src="https://www.google.com/maps?q=Hinjewadi,Pune&output=embed"
              width="100%"
              height="120"
              style={{ border: "0", borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MasterPlace. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;