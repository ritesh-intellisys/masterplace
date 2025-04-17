import React from 'react';
import './Footer.css';
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#facc15"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#facc15"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#facc15"></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-container">
              <img src={logo} alt="MasterPlace Logo" className="footer-logo" />
              <h2>MasterPlace</h2>
            </div>
            <p className="brand-description">Your trusted partner in premium real estate services, offering exceptional properties and personalized solutions for your dream home.</p>
            <div className="newsletter">
              <h4>Subscribe to Newsletter</h4>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/"><i className="fas fa-chevron-right"></i> Home</a></li>
                <li><a href="/properties"><i className="fas fa-chevron-right"></i> All Properties</a></li>
                <li><a href="/about"><i className="fas fa-chevron-right"></i> About Us</a></li>
                <li><a href="/services"><i className="fas fa-chevron-right"></i> Services</a></li>
                <li><a href="/testimonials"><i className="fas fa-chevron-right"></i> Testimonials</a></li>
              </ul>
            </div>
            
            <div className="link-column">
              <h4>Contact Info</h4>
              <ul className="contact-info">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Hinjewadi Phase 1, Pune, Maharashtra 411057</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:+919518761666">+91 9518761666</a>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:info@masterplace.in">info@masterplace.in</a>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
                </li>
              </ul>
            </div>
            
            <div className="link-column">
              <h4>Find Us</h4>
              <div className="map-container">
                <iframe
                  title="MasterPlace Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.71592641522147!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb13b7b3019b%3A0x6b6e6a9e1a0b5b5c!2sHinjewadi%20Phase%201%2C%20Pune%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: "0", borderRadius: "10px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© {new Date().getFullYear()} MasterPlace. All rights reserved.</p>
            <div className="footer-menu">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookies Policy</a>
            </div>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;