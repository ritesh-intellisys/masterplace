import React from 'react';
import './Aboutus.css';
import videoBackground from '../assets/video3.mp4';
import intellisys from '../assets/skech.png';

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* HEADER SECTION */}
      <section className="hero-section">
        {/* Video Background */}
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Content */}
        <div className="hero-overlay">
          <h1>
            A RELENTLESS PURSUIT OF <span>EXCELLENCE</span>
          </h1>
          <div className="stats">
            <div className="stat-box">
              <h2>39+</h2>
              <p>Years of Legacy</p>
            </div>
            <div className="stat-box">
              <h2>1.2 CR.</h2>
              <p>Sq.Ft. Total Delivery</p>
            </div>
            <div className="stat-box">
              <h2>30+</h2>
              <p>Delivered Projects</p>
            </div>
            <div className="stat-box">
              <h2>20,000+</h2>
              <p>Happy Customers</p>
            </div>
            <div className="stat-box">
              <h2>3 CR.</h2>
              <p>Sq.Ft. Ongoing Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="legacy-section">
        <div className="legacy-text" style={{ flex: 1 }}>
          <h3>ABOUT US</h3>
          <h2>A LEGACY BRAND WITH A DISRUPTIVE ATTITUDE.</h2>
          <p>
            Yes, we are a legacy brand. VTP Realty is backed by the 39+ years legacy of the VTP Group, a Pune-based conglomerate.
            But we go beyond bricks and mortar to deliver value that exceeds expectations. Our journey has been one of disruption,
            reimagining, and setting new standards in real estate. VTP Realty is Pune’s #1 real estate developer consistently for 6 years
            and ranks among the top 10 developers in India. VTP operates on the ethos of ‘thoughtfulness’ with a three-tiered philosophy
            of Better Design, Better Build, and Better Care that makes it a buyer’s brand.
          </p>
        </div>
        <div className="legacy-image" style={{ flex: 1, textAlign: 'center' }}>
          <img src={intellisys} alt="Legacy Building Sketch" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="vm-section">
        <div className="vision">
          <h2>VISION</h2>
          <p>
            To be one of the most admired real estate brands in the country known for leading with commitment, trust, innovation, and care.
          </p>
        </div>
        <div className="mission">
          <h2>MISSION</h2>
          <p>
            To be the leader in the real estate industry, we will build a strong team who will strive continuously to deliver unmatched
            product quality, attention to detail, and transparency in our processes and operations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;