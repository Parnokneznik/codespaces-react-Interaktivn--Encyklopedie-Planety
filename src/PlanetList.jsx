// PlanetList.jsx
import React, { useState } from 'react';
import './PlanetList.css';

const planetsData = [
  { 
    id: 1, 
    name: 'Merkur', 
    description: 'Merkur je nejblíže Slunci a nejmenší planeta sluneční soustavy. Má velmi tenkou atmosféru a výrazné teplotní výkyvy.',
    fact: 'Merkur má největší excentricitu oběžné dráhy ze všech planet sluneční soustavy, což znamená, že jeho vzdálenost od Slunce se mění velmi dramaticky.' 
  },
  { 
    id: 2, 
    name: 'Venuše', 
    description: 'Venuše je druhá planeta od Slunce a nejhořejší planeta sluneční soustavy. Je to nejteplejší planeta kvůli skleníkovému efektu v její atmosféře.',
    fact: 'Na povrchu Venuše jsou největší teplotní rozdíly ze všech planet sluneční soustavy a může tam padat kyselý déšť z oblačného krytu sírové kyseliny.' 
  },
  { 
    id: 3, 
    name: 'Země', 
    description: 'Země je třetí planeta od Slunce a jediná známá planeta s životem. Má unikátní atmosféru, která umožňuje existenci života.',
    fact: 'Země je jedinou planetou ve sluneční soustavě, kde je známý život, a je domovem mnoha různých druhů života, včetně rostlin, zvířat a lidí.' 
  },
  { 
    id: 4, 
    name: 'Mars', 
    description: 'Mars je čtvrtá planeta od Slunce a je známý svou rudou barvou. Na Marsu se nachází nejvyšší sopka a největší údolí ve sluneční soustavě.',
    fact: 'Mars má největší vulkán ve sluneční soustavě - Olympus Mons, který je třikrát vyšší než Mount Everest na Zemi.' 
  },
  { 
    id: 5, 
    name: 'Jupiter', 
    description: 'Jupiter je největší planeta sluneční soustavy a skládá se převážně z vodíku a helia. Má mnoho měsíců, včetně největšího měsíce Ganymeda.',
    fact: 'Jupiter má silné magnetické pole, které vytváří radiální pásky záření a je zodpovědné za aurory na jeho polárních oblastech.' 
  },
  { 
    id: 6, 
    name: 'Saturn', 
    description: 'Saturn je druhý největší planeta sluneční soustavy a je známý svými prstencovými systémy. Má mnoho měsíců a jedinečný hexagonální bouřlivý pás na severním pólu.',
    fact: 'Saturnovy prstence se skládají z ledových a skalnatých částic, které se pohybují ve stabilních orbitálních drahách kolem planety.' 
  },
  { 
    id: 7, 
    name: 'Uran', 
    description: 'Uran je planeta s chladnou atmosférou a skládá se z ledových a skalnatých materiálů. Má unikátní orbitální sklon, který způsobuje, že rotuje po straně.',
    fact: 'Uran se považuje za ledový obr, protože se skládá z vody, methanu a amoniaku v jeho atmosféře a skoro jistě má mohutný pevný jádro.' 
  },
  { 
    id: 8, 
    name: 'Neptun', 
    description: 'Nejvzdálenější planeta od Slunce a má podobné složení jako Uran. Je známý svými extrémními větrnými bouřemi a temnými skvrnami v atmosféře.',
    fact: 'Neptun je obklopen mnoha měsíci a má největší hustotu mezi plynnými obři ve sluneční soustavě.' 
  },
];

const PlanetList = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetSelect = (planet) => {
    setSelectedPlanet(planet);
  };

  return (
    <div className="planet-list-container">
      <h2>Seznam planet</h2>
      <ul className="planet-list">
        {planetsData.map((planet) => (
          <li key={planet.id} onClick={() => handlePlanetSelect(planet)}>
            {planet.name}
          </li>
        ))}
      </ul>
      {selectedPlanet && (
        <div className="planet-details">
          <h3>{selectedPlanet.name}</h3>
          <p><strong>Popis:</strong> {selectedPlanet.description}</p>
          <p><strong>Zajímavost:</strong> {selectedPlanet.fact}</p>
        </div>
      )}
    </div>
  );
};

export default PlanetList;
