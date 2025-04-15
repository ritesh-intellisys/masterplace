import React from "react";
import "./Home.css";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";
import img7 from "../assets/image7.jpg";
import img8 from "../assets/image1.jpg";
import floorPlan from "../assets/floorplan.png";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import {
  FaChartLine,
  FaMapMarkerAlt,
  FaUserFriends,
  FaFileInvoiceDollar,
  FaHome,
  FaNewspaper,
  FaBookOpen,
  FaCalculator,
  FaRupeeSign,
  FaRulerCombined,
} from "react-icons/fa";

const Home = () => {
  // Data arrays
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

  const toolsData = [
    { icon: <FaChartLine />, title: "Price Trends", desc: "Check property rates and prices" },
    { icon: <FaMapMarkerAlt />, title: "Locality Insights", desc: "Know more about different localities" },
    { icon: <FaUserFriends />, title: "Resident Reviews", desc: "Know what residents are saying" },
    { icon: <FaFileInvoiceDollar />, title: "Transaction Prices", desc: "Check property transaction values" },
    { icon: <FaHome />, title: "About My Property", desc: "Track prices & analyse market demand" },
    { icon: <FaNewspaper />, title: "Latest News", desc: "Real estate & allied industry updates" },
    { icon: <FaBookOpen />, title: "User Guides", desc: "Help for buyers, tenants, sellers" },
    { icon: <FaCalculator />, title: "EMI Calculator", desc: "Calculate your home loan EMI" },
    { icon: <FaRupeeSign />, title: "Loan Eligibility", desc: "Check what you can borrow" },
    { icon: <FaRulerCombined />, title: "Area Converter", desc: "Convert area units easily" },
  ];

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

  const videoData = [
    { id: 1, title: 'Luxury Villa in the Suburbs', description: 'Experience elegant suburban living with all the comforts you need.', url: video1 },
    { id: 2, title: 'Modern Apartment Tour', description: 'Explore high-rise city life with top-tier amenities.', url: video2 },
    { id: 3, title: 'Cozy Cottage by the Lake', description: 'Feel the calm of lakeside living, ideal for peace and nature lovers.', url: video3 },
    { id: 4, title: 'Downtown Penthouse Views', description: 'Skyline views and luxurious finishes await you downtown.', url: video4 },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Your Dream Home Awaits</h1>
          <p className="hero-subtitle">Discover premium properties in exclusive locations</p>
          <button className="hero-cta btn-primary">Explore Properties</button>
        </div>
      </section>

      {/* Search Form */}
      <div className="search-container">
        <div className="search-form">
          <div className="form-group">
            <select className="property-type select-control">
              <option value="all">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
            </select>
          </div>
          <div className="form-group">
            <select className="city select-control">
              <option value="all">All Cities</option>
              <option value="pune">Pune</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
            </select>
          </div>
          <div className="form-group">
            <select className="status select-control">
              <option value="all">All Status</option>
              <option value="for-rent">For Rent</option>
              <option value="for-sale">For Sale</option>
            </select>
          </div>
          <div className="form-group">
            <input 
              type="number" 
              placeholder="Max. Price" 
              className="max-price input-control" 
            />
          </div>
          <button className="search-button btn-primary">Search</button>
        </div>
      </div>

      {/* Featured Homes */}
      <section className="section featured-section">
        <div className="section-header">
          <span className="section-label">PREMIUM PROPERTIES</span>
          <h2 className="section-title">Exclusive Homes for Discerning Buyers</h2>
          <p className="section-description">
            Discover our curated selection of high-end properties in Pune's most desirable locations.
          </p>
        </div>

        <div className="properties-grid">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <div className="property-image-container">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="property-image"
                  loading="lazy"
                />
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

      {/* Insights & Tools */}
      <section className="section tools-section">
        <div className="section-header">
          <h2 className="section-title">Insights & Tools</h2>
          <p className="section-description">Go from browsing to buying</p>
          <button className="view-all-btn">View all Insights</button>
        </div>
        <div className="tools-container">
          <div className="tools-grid">
            {toolsData.map((tool, index) => (
              <div key={index} className="tool-card">
                <div className="tool-icon">{tool.icon}</div>
                <h4 className="tool-title">{tool.title}</h4>
                <p className="tool-description">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services-section">
        <div className="section-header">
          <span className="section-label">OUR SERVICES</span>
          <h2 className="section-title">Excellence in Real Estate</h2>
          <p className="section-description">
            We provide unparalleled service in helping you buy, rent or sell premium properties. 
            Our team delivers exceptional results through expertise and personalized attention.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-image-container">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-image"
                  loading="lazy"
                />
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

      {/* Real Estate Section */}
      <section className="section real-estate-section">
        <div className="real-estate-container">
          <div className="text-content">
            <h2>Experience Premium Living with Expert Planning</h2>
            <p>
              Our projects are meticulously designed to provide functionality, comfort,
              and elegance. With a focus on space optimization and modern architecture,
              every floor plan is tailored to meet the evolving lifestyle of urban families.
            </p>
            <p>
              Whether it's your dream home or a smart investment, our layouts are
              created with utmost attention to ventilation, sunlight, and connectivity.
              Partner with us for a future-ready living space that reflects class and care.
            </p>
            <button className="btn-primary">View Floor Plans</button>
          </div>
          <div className="image-content">
            <img 
              src={floorPlan} 
              alt="Real Estate Floor Plan" 
              className="floor-plan-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Video Tours */}
      <section className="section video-section">
        <div className="section-header">
          <span className="section-label">EXPLORE CITIES</span>
          <h2 className="section-title">Discover Real Estate Markets in India</h2>
          <p className="section-description">
            Your ideal neighborhood is just a few clicks away. Dive into local vibes and explore living spaces through immersive video tours.
          </p>
        </div>

        <div className="video-grid">
          {videoData.map((item, index) => (
            <div key={item.id} className={`video-card ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="video-container">
                <video
                  src={item.url}
                  className="property-video"
                  poster="/assets/video-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className="video-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="btn-primary">Explore More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;