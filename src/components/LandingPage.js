// LandingPage.js
import React, { useState } from 'react';

function LandingPage({ locations, applianceTypes, fetchApplianceTypes, featuredTechnicians }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    fetchApplianceTypes(e.target.value);
  };

  return (
    <div className="landing-page">
      <header>
        <h1>Find a Technician</h1>
      </header>

      <div className="search-container">
        <select>
          {locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search appliance type..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="featured-technicians">
        {featuredTechnicians.map((technician) => (
          <div className="technician-card" key={technician.id}>
            <img src={technician.photo} alt={technician.name} />
            <div className="card-content">
              <h3>{technician.name}</h3>
              <p>{technician.specialization}</p>
              <p>{technician.rating} ★</p>
              <p>{technician.description}</p>
              <a href={`mailto:${technician.contact}`} className="contact-button">
                Contact
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;