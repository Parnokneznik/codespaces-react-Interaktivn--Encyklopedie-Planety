// App.jsx
import React, { useState } from 'react';
import './App.css';
import PlanetList from './PlanetList';
import PlanetDetail from './PlanetDetail';

const App = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetSelect = (planet) => {
    setSelectedPlanet(planet);
  };

  return (
    <div className="app">
      <h1>Encyklopedie planet sluneční soustavy</h1>
      <div className="container">
        <PlanetList onPlanetSelect={handlePlanetSelect} />
        <PlanetDetail planet={selectedPlanet} />
      </div>
    </div>
  );
};

export default App;
