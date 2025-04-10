import React from 'react';
import './Property.css';

import img from '../assets/flat.jpg';
import img1 from '../assets/flat2.jpg';
import img2 from '../assets/flat3.jpg';
import img3 from '../assets/flat4.jpg';
import img4 from '../assets/flat5.jpg';

import rent1 from '../assets/flat6.jpg';
import rent2 from '../assets/flat7.jpg';
import rent3 from '../assets/flat6.jpg';
import rent4 from '../assets/flat7.jpg';
import rent5 from '../assets/flat6.jpg';

const propertiesForSale = [
  {
    price: '₹ 2.77 Cr.',
    type: 'Flats & Apartments',
    details: '2 BHK / 840 Sq.ft.',
    location: 'Sector 2 Vashi, Navi Mumbai',
    image: img,
  },
  {
    price: '₹ 18.91 Lac',
    type: 'Builder Floor',
    details: '1 BHK / 375 Sq.ft.',
    location: 'Umroli, Palghar',
    image: img1,
  },
  {
    price: '₹ 2.68 Cr.',
    type: 'Flats & Apartments',
    details: '2 BHK / 800 Sq.ft.',
    location: 'DN Nagar, Andheri West, Mumbai',
    image: img2,
  },
  {
    price: '₹ 1.77 Cr.',
    type: 'Flats & Apartments',
    details: '3 BHK / 1770 Sq.ft.',
    location: 'Sector 22D, Greater Noida West',
    image: img3,
  },
  {
    price: '₹ 37 Lac',
    type: 'Individual Houses',
    details: '2.5 BHK / 80 Sq. Yards',
    location: 'Noida Extension, Greater Noida',
    image: img4,
  },
];

const propertiesForRent = [
  {
    price: '₹ 2 Lac',
    type: 'Flats & Apartments',
    details: '1 BHK / 1000 Sq.ft.',
    location: 'Azad Nagar, Andheri West, Mumbai',
    image: rent1,
  },
  {
    price: '₹ 20,000',
    type: 'Flats & Apartments',
    details: '2 BHK / 880 Sq.ft.',
    location: 'Shakti Nagar, Jalandhar',
    image: rent2,
  },
  {
    price: '₹ 16,000',
    type: 'Builder Floor',
    details: '2 BHK / 80 Sq. Yards',
    location: 'Block WZ Inderpuri, Delhi',
    image: rent3,
  },
  {
    price: '₹ 36,000',
    type: 'Flats & Apartments',
    details: '2.5 BHK / 1200 Sq.ft.',
    location: 'Sector 168 Noida',
    image: rent4,
  },
  {
    price: '₹ 3.50 Cr.',
    type: 'Villa',
    details: '3 BHK / 25000 Sq.ft.',
    location: 'Girwa, Udaipur',
    image: rent5,
  },
];

const PropertiesPage = () => {
  const renderCards = (list) =>
    list.map((item, idx) => (
      <div key={idx} className="property-card">
        <img src={item.image} alt={item.type} />
        <div className="price-tag">{item.price}</div>
        <h4>{item.type}</h4>
        <p className="bold">{item.details}</p>
        <p>{item.location}</p>
        <button>View Details</button>
      </div>
    ));

  return (
    <div className="properties-page">
      <h2 className="section-title">Latest Properties for <span>Sale</span></h2>
      <div className="property-grid scroll-x">{renderCards(propertiesForSale)}</div>

      <h2 className="section-title">Latest Properties for <span>Rent</span></h2>
      <div className="property-grid scroll-x">{renderCards(propertiesForRent)}</div>
    </div>
  );
};

export default PropertiesPage;