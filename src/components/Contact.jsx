import React from 'react';
import './Contact.css';

const ContactUs = () => {
  return (
    <div className="cont-container">
      {/* Heading */}
      <div className="cont-heading">
        <h1 className="cont-title">Contact Us</h1>
      </div>

      {/* Google Map */}
      <div className="cont-map">
        <iframe
          title="Hinjewadi Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.524430716955!2d73.73148721436924!3d18.5998243873605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91c7407f69d%3A0x41e0a04b1738396d!2sHinjewadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1643203081487!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact & Form Section */}
      <div className="cont-content">
        {/* Contact Info */}
        <div className="cont-info">
          <h2 className="cont-subtitle">Get Experts Help</h2>
          <p className="cont-detail">📞 +91 9518761666</p>
          <p className="cont-detail">📧 info@masterplace.in</p>
          <p className="cont-detail">📍 Hinjewadi, Pune</p>
        </div>

        {/* Contact Form */}
        <form className="cont-form">
          <h3 className="cont-form-title">Personal Information</h3>
          <div className="cont-form-grid">
            <select className="cont-input" defaultValue="">
              <option value="" disabled>Select</option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Ms</option>
            </select>
            <input type="text" placeholder="First name" className="cont-input" />
            <input type="text" placeholder="Last name" className="cont-input" />
            <input type="email" placeholder="Email address" className="cont-input cont-input-full" />
            <input type="text" placeholder="Phone number" className="cont-input cont-input-full" />
          </div>

          <h3 className="cont-form-title">Property Information</h3>
          <div className="cont-form-grid">
            <select className="cont-input" defaultValue="">
              <option value="" disabled>Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Plot</option>
            </select>
            <input type="text" placeholder="Zip code" className="cont-input" />
            <input type="text" placeholder="City" className="cont-input" />
            <input type="text" placeholder="N. of bedrooms" className="cont-input" />
            <input type="text" placeholder="N. of bathrooms" className="cont-input" />
            <input type="text" placeholder="Your budget" className="cont-input" />
          </div>

          <button type="submit" className="cont-submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;