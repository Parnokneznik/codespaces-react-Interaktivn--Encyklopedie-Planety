// PlanetDetail.jsx
import React from 'react';
import './App.css';

const PlanetDetail = ({ planet }) => {
  return (
    <div className="planet-detail">
      {planet ? (
        <>
          <h2>{planet.name}</h2>
          <p>{planet.description}</p>
        </>
      ) : (
        <div className="empty-state"></div>
      )}
    </div>
  );
};

export default PlanetDetail;
