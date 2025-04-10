import React from "react";
import "./Card.css";
import floorPlan from "../assets/floorplan.png"; // place your image in src/assets

const RealEstateSection = () => {
  return (
    <section className="real-estate-section">
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
          Whether it's your dream home or a smart investment, our layouts are
          created with utmost attention to ventilation, sunlight, and connectivity.
          Partner with us for a future-ready living space that reflects class and care.
          Whether it's your dream home or a smart investment, our layouts are
          created with utmost attention to ventilation, sunlight, and connectivity.
          Partner with us for a future-ready living space that reflects class and care.
        </p>
      </div>
      <div className="image-content">
        <img src={floorPlan} alt="Real Estate Floor Plan" />
      </div>
    </section>
  );
};

export default RealEstateSection;