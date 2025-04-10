import React from "react";
import "./FeaturedHomes.css";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";
import img7 from "../assets/image7.jpg";
import img8 from "../assets/image1.jpg";

const FeaturedHomes = () => {
  const properties = [
    {
      id: 1,
      image: img1,
      price: "₹5,40,00,000",
      title: "Luxury Commercial Office Space",
      location: "Kharadi, Pune, Maharashtra",
      size: "2500 sqft",
      type: "OFFICE",
      tags: ["PREMIUM", "FOR SALE"],
    },
    {
      id: 2,
      image: img2,
      price: "₹1,06,00,000",
      title: "2 BHK in Nyati Elysia",
      location: "Kharadi, Pune, Maharashtra",
      size: "735 sqft",
      type: "APARTMENT",
      tags: ["FOR SALE"],
    },
    {
      id: 3,
      image: img3,
      price: "₹1,20,000/mo",
      title: "Executive Office Suite",
      location: "Eon IT Park, Kharadi, Pune",
      size: "2000 sqft",
      type: "OFFICE",
      tags: ["PREMIUM", "FOR RENT"],
    },
    {
      id: 4,
      image: img4,
      price: "₹5,40,00,000",
      title: "Commercial office space for sale",
      location: "Kharadi, Pune, Maharashtra, 411036, India",
      size: "2500 sqft",
      type: "OFFICE",
      tags: ["FEATURED", "FOR SELL"],
      
    },
    {
      id: 5,
      image: img5,
      price: "₹1,06,00,000",
      title: "2 BHK For Sale In Nyati Elysia",
      location: "Kharadi, Pune, Maharashtra, 411036, India",
      size: "735 sqft",
      type: "BUNGALOW",
      tags: ["FOR SELL"],
      
    },
    {
      id: 6,
      image: img6,
      price: "₹1,20,000",
      title: "Executive office suite for rent",
      location: "Eon IT Park Road, Kharadi, Pune, 411014, India",
      size: "2000 sqft",
      type: "OFFICE",
      tags: ["FEATURED", "FOR RENT"],
      
    },
    {
      id: 7,
      image: img8,
      price: "₹1,20,000",
      title: "Executive office suite for rent",
      location: "Eon IT Park Road, Kharadi, Pune, 411014, India",
      size: "2000 sqft",
      type: "OFFICE",
      tags: ["FEATURED", "FOR RENT"],
      
    },
    {
      id: 8,
      image: img6,
      price: "₹1,20,000",
      title: "Executive office suite for rent",
      location: "Eon IT Park Road, Kharadi, Pune, 411014, India",
      size: "2000 sqft",
      type: "OFFICE",
      tags: ["FEATURED", "FOR RENT"],
      
    },
  ];

  return (
    <section className="featured-section">
      <div className="featured-header">
        <h2 className="featured-label">PREMIUM PROPERTIES</h2>
        <h3 className="featured-heading">Exclusive Homes for Discerning Buyers</h3>
        <p className="featured-description">
          Discover our curated selection of high-end properties in Pune's most desirable locations.
        </p>
      </div>

      <div className="properties-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <div className="property-image-container">
              <img src={property.image} alt={property.title} className="property-image" />
              <div className="property-badges">
                {property.tags.map((tag, idx) => (
                  <span key={idx} className={`badge ${tag.toLowerCase().replace(' ', '-')}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="property-details">
              <h4 className="property-price">{property.price}</h4>
              <h3 className="property-title">{property.title}</h3>
              <p className="property-location">
                <span className="location-icon">📍</span> {property.location}
              </p>
              <div className="property-meta">
                <span className="meta-item">
                  <span className="meta-icon">🏠</span> {property.type}
                </span>
                <span className="meta-item">
                  <span className="meta-icon">📏</span> {property.size}
                </span>
              </div>
              <button className="property-cta btn-primary">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedHomes;