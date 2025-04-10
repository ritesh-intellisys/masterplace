import React from "react";
import "./Masterhome.css";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-title">Your Dream Home Awaits</h1>
          <p className="hero-subtitle">Discover premium properties in exclusive locations</p>
        </div>
      </section>

      {/* Overlapping Search Section */}
      <div className="search-form">
        <select className="property-type select-control">
          <option value="all">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="villa">Villa</option>
        </select>
        <select className="city select-control">
          <option value="all">All Cities</option>
          <option value="pune">Pune</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
        </select>
        <select className="status select-control">
          <option value="all">All Status</option>
          <option value="for-rent">For Rent</option>
          <option value="for-sale">For Sale</option>
        </select>
        <input 
          type="number" 
          placeholder="Max. Price" 
          className="max-price input-control" 
        />
        <button className="search-button btn-primary">Search</button>
      </div>
    </>
  );
};

export default Hero;