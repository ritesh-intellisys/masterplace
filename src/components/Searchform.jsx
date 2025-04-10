import React from "react";
import "./Searchform.css";
import img1 from "../assets/image3.jpg";
import img2 from "../assets/image4.jpg";
import img3 from "../assets/image5.jpg";

const services = [
  {
    id: 1,
    title: "Qualified Agents",
    description: "Our certified real estate professionals provide expert guidance through every step of your property journey.",
    image: img1,
    icon: "👔"
  },
  {
    id: 2,
    title: "Premium Service",
    description: "Experience white-glove service with our dedicated team handling all your real estate needs with care.",
    image: img2,
    icon: "⭐"
  },
  {
    id: 3,
    title: "Dedicated Support",
    description: "24/7 customer care ensures you're never alone in your property search or transaction process.",
    image: img3,
    icon: "📞"
  },
];

const ServiceCards = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <span className="services-label">OUR SERVICES</span>
        <h2 className="services-title">Excellence in Real Estate</h2>
        <p className="services-description">
          We provide unparalleled service in helping you buy, rent or sell premium properties. 
          Our team delivers exceptional results through expertise and personalized attention.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-image-container">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-icon">{service.icon}</div>
            </div>
            <div className="service-content">
              <h3 className="service-name">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-link">
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;