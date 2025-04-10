import React from 'react';
import './Explore.css';

// Importing videos from src/assets
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';

const videoData = [
  { id: 1, title: 'Luxury Villa in the Suburbs', description: 'Experience elegant suburban living with all the comforts you needsuburban living with all the comforts you needsuburban living with all the comforts you need suburban living with all the comforts you needsuburban living with all the comforts you need.', url: video1 },
  { id: 2, title: 'Modern Apartment Tour', description: 'Explore high-rise city life with top-tier amenities suburban living with all the comforts you needsuburban living with all the comforts you needsuburban living with all the comforts you needsuburban living with all the comforts you need.', url: video2 },
  { id: 3, title: 'Cozy Cottage by the Lake', description: 'Feel the calm of lakeside living, ideal for peace and nature lovers suburban living with all the comforts you needsuburban living with all the comforts you needsuburban living with all the comforts you needsuburban living with all the comforts you need.', url: video3 },
  { id: 4, title: 'Downtown Penthouse Views', description: 'Skyline views and luxurious finishes await you downtown suburban living with all the comforts you needsuburban living with all the comforts you needsuburban living with all the comforts you needsuburban living with all the comforts you need.', url: video4 },
];

const ZigZagVideos = () => {
  return (
    <section className="zigzag-section">
      {/* Section Header */}
      <div className="zigzag-header">
        <p className="zigzag-tag">Explore Cities</p>
        <h1 className="zigzag-title">Discover Real Estate Markets in India</h1>
        <p className="zigzag-subtitle">
          Your ideal neighborhood is just a few clicks away. Dive into local vibes and explore living spaces through immersive video tours.
        </p>
      </div>

      {/* Video Sections */}
      <div className="zigzag-wrapper">
        {videoData.map((item, index) => (
          <div key={item.id} className={`zigzag-row ${index % 2 === 1 ? 'reverse' : ''}`}>
            <video
              src={item.url}
              className="zigzag-video"
              poster="/assets/video-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="zigzag-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#" className="zigzag-btn">Explore More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ZigZagVideos;
