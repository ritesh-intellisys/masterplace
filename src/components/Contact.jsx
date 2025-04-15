import React from 'react';
import './Contact.css';
import { FiMapPin, FiMail, FiPhone, FiUser, FiHome } from 'react-icons/fi';

const ContactUs = () => {
  return (
    <div className="cont-container">
      {/* Heading */}
      <div className="cont-heading">
        <h1 className="cont-title">Get in Touch</h1>
        <p className="cont-subtext">We're here to help you find your dream property</p>
      </div>

      {/* Google Map */}
      <div className="cont-map-container">
        <div className="cont-map">
          <iframe
            title="Hinjewadi Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.524430716955!2d73.73148721436924!3d18.5998243873605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91c7407f69d%3A0x41e0a04b1738396d!2sHinjewadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1643203081487!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact & Form Section */}
      <div className="cont-content">
        {/* Contact Info */}
        <div className="cont-info">
          <div className="cont-info-card">
            <h2 className="cont-subtitle">
              <FiUser className="cont-icon" /> Expert Assistance
            </h2>
            <div className="cont-details">
              <p className="cont-detail">
                <FiPhone className="cont-icon" /> +91 9518761666
              </p>
              <p className="cont-detail">
                <FiMail className="cont-icon" /> info@masterplace.in
              </p>
              <p className="cont-detail">
                <FiMapPin className="cont-icon" /> Hinjewadi, Pune
              </p>
            </div>
            <div className="cont-features">
              <div className="cont-feature">
                <FiHome className="cont-icon" />
                <h4>500+ Properties</h4>
                <p>Wide selection across Pune</p>
              </div>
              <div className="cont-feature">
                <FiUser className="cont-icon" />
                <h4>24/7 Support</h4>
                <p>Dedicated relationship manager</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="cont-form">
          <h3 className="cont-form-title">Personal Information</h3>
          <div className="cont-form-grid">
            <div className="cont-input-group">
              <label>Title</label>
              <select className="cont-input" defaultValue="">
                <option value="" disabled>Select</option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Ms</option>
              </select>
            </div>
            <div className="cont-input-group">
              <label>First Name</label>
              <input type="text" className="cont-input" />
            </div>
            <div className="cont-input-group">
              <label>Last Name</label>
              <input type="text" className="cont-input" />
            </div>
            <div className="cont-input-group cont-input-full">
              <label>Email Address</label>
              <input type="email" className="cont-input" />
            </div>
            <div className="cont-input-group cont-input-full">
              <label>Phone Number</label>
              <input type="tel" className="cont-input" />
            </div>
          </div>

          <h3 className="cont-form-title">Property Preferences</h3>
          <div className="cont-form-grid">
            <div className="cont-input-group">
              <label>Property Type</label>
              <select className="cont-input" defaultValue="">
                <option value="" disabled>Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Plot</option>
              </select>
            </div>
            <div className="cont-input-group">
              <label>Zip Code</label>
              <input type="text" className="cont-input" />
            </div>
            <div className="cont-input-group">
              <label>City</label>
              <input type="text" className="cont-input" />
            </div>
            <div className="cont-input-group">
              <label>Bedrooms</label>
              <input type="number" className="cont-input" />
            </div>
            <div className="cont-input-group">
              <label>Bathrooms</label>
              <input type="number" className="cont-input" />
            </div>
            <div className="cont-input-group">
              <label>Budget (₹)</label>
              <input type="text" className="cont-input" />
            </div>
          </div>

          <button type="submit" className="cont-submit">
            Submit Request <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;