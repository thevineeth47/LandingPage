// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed import from 'Switch' to 'Routes'
import axios from 'axios';

import LandingPage from './components/LandingPage';
import UserLoginPage from './components/UserLoginPage';
import TechnicianLoginPage from './components/TechnicianLoginPage';

function App() {
  const [locations, setLocations] = useState([]);
  const [applianceTypes, setApplianceTypes] = useState([]);
  const [featuredTechnicians, setFeaturedTechnicians] = useState([]);

  // Fetch locations from backend API
  useEffect(() => {
    axios.get('/api/locations')
      .then(response => setLocations(response.data))
      .catch(error => console.error('Error fetching locations:', error));
  }, []);

  // Fetch appliance types for search suggestions
  const fetchApplianceTypes = (query) => {
    axios.get(`/api/applianceTypes?query=${query}`)
      .then(response => setApplianceTypes(response.data))
      .catch(error => console.error('Error fetching appliance types:', error));
  };

  // Fetch featured technicians
  useEffect(() => {
    axios.get('/api/featuredTechnicians')
      .then(response => setFeaturedTechnicians(response.data))
      .catch(error => console.error('Error fetching technicians:', error));
  }, []);

  return (
    <Router>
      <Routes> {/* Changed 'Switch' to 'Routes' */}
        <Route
          exact
          path="/"
          element={
            <LandingPage
              locations={locations}
              applianceTypes={applianceTypes}
              fetchApplianceTypes={fetchApplianceTypes}
              featuredTechnicians={featuredTechnicians}
            />
          }
        />
        <Route path="/user-login" element={<UserLoginPage />} />
        <Route path="/technician-login" element={<TechnicianLoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
