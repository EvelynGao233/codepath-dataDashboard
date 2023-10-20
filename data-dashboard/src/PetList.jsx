import React from 'react';
import './PetList.css';

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
      if (filter.color && !pet.colors.primary.toLowerCase().includes(filter.color.toLowerCase())) {
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
            <td className="PetName">{pet.name}</td>
            <td className="PetDetail">{pet.breeds.primary}</td>
            <td className="PetDetail">{pet.age}</td>
            <td className="PetDetail">{pet.colors.primary}</td>
            <td className="PetDetail">{pet.contact.address.city}, {pet.contact.address.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PetList;

