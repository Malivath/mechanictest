// Services.js
import React from 'react';
import '../Styles/Services.scss'; // Assume you have a corresponding CSS file

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service">
          <h3>Oil Change</h3>
          <p>Quick and professional oil changes to keep your car running smoothly.</p>
        </div>
        <div className="service">
          <h3>Brake Repair</h3>
          <p>Comprehensive brake inspection and repair for your safety.</p>
        </div>
        // Add more services as needed
      </div>
    </section>
  );
};

export default Services;