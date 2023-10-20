import React from 'react';
import './Summary.css';

function Summary({ pets }) {
  if (!pets || !Array.isArray(pets) || pets.length === 0) {
    return <div className="summary">No pets data available.</div>;
  }

  const totalPets = pets.length;

  const ageGroups = pets.reduce((acc, pet) => {
    const petAge = pet.age;
    acc[petAge] = (acc[petAge] || 0) + 1;
    return acc;
  }, {});

  const breeds = pets.reduce((acc, pet) => {
    const petBreed = pet.breeds.primary;
    acc[petBreed] = (acc[petBreed] || 0) + 1;
    return acc;
  }, {});

  const locations = pets.reduce((acc, pet) => {
    const petLocation = `${pet.contact.address.city}, ${pet.contact.address.state}`;
    acc[petLocation] = (acc[petLocation] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="summary">
      <p>Total Pets: {totalPets}</p>

      <div className="age-group">
        <h3>Age Groups:</h3>
        <p>Baby: {ageGroups.Baby || 0}</p> 
        <p>Young: {ageGroups.Young || 0}</p>
        <p>Adult: {ageGroups.Adult || 0}</p>
        <p>Senior: {ageGroups.Senior || 0}</p>
      </div>

      {/* Breakdown for breeds */}
      <div className="breed-group">
        <h3>Top Breeds:</h3>
        {Object.entries(breeds)
          .sort(([,a],[,b]) => b - a)
          .slice(0, 3)
          .map(([breed, count]) => (
            <p key={breed}>{breed}: {count}</p>
          ))
        }
      </div>

    </div>
  );
}

export default Summary;
