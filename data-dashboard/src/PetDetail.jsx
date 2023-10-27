import React from 'react';
import { useParams } from 'react-router-dom';
import './PetDetail.css'
function PetDetail({ pets }) {
  const { id } = useParams();
  const pet = pets.find(p => String(p.id) === id);

  if (!pet) return <div>Pet not found!</div>;

  return (
    <div className="PetCard">
      <img 
        src={pet.photos[0]?.large || 'default-image.jpg'} 
        alt={pet.name} 
        className="PetImage"
      />
      <h1>{pet.name}</h1>
      <p><strong>Breed:</strong> {pet.breeds.primary}</p>
      <p><strong>Age:</strong> {pet.age}</p>
      <p><strong>Color:</strong> {pet.colors?.primary || 'N/A'}</p>
      <p><strong>Location:</strong> {pet.contact.address.city}, {pet.contact.address.state}</p>
      <p>{pet.description}</p>
      <p><strong>Email for Adoption:</strong> {pet.contact.email}</p>
      <p><strong>Phone:</strong> {pet.contact.phone}</p>
      <a href={pet.url} target="_blank" rel="noopener noreferrer">View on PetFinder</a>
    </div>
  );
}

export default PetDetail;