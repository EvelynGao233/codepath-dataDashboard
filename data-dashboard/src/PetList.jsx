import React from 'react';
import './PetList.css';
import { Link } from 'react-router-dom';

const PetList = ({ pets, searchTerm, filter }) => {
  const filteredPets = pets
    .filter(pet => pet.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(pet => {
      let includePet = true;
      if (filter.breed && pet.breeds.primary.toLowerCase() !== filter.breed.toLowerCase()) {
        includePet = false;
      }
      if (filter.age && pet.age.toLowerCase() !== filter.age.toLowerCase()) {
        includePet = false;
      }
      if (filter.color && (pet.colors?.primary ? !pet.colors.primary.toLowerCase().includes(filter.color.toLowerCase()) : true)) {
        includePet = false;
      }
      return includePet;
    });

  return (
    <table className="PetTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Age</th>
          <th>Color</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {filteredPets.map(pet => (
          <tr key={pet.id}>
            <td className="PetName"><Link to={`/pet/${pet.id}`}>{pet.name}</Link></td>
            <td className="PetDetail">{pet.breeds.primary}</td>
            <td className="PetDetail">{pet.age}</td>
            <td className="PetDetail">{pet.colors?.primary || 'N/A'}</td>
            <td className="PetDetail">{pet.contact.address.city}, {pet.contact.address.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PetList;
