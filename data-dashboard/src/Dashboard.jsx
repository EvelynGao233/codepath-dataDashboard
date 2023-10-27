import React from 'react';
import Summary from './Summary';
import SearchFilter from './SearchFilter';
import PetList from './PetList';

function Dashboard({ pets, searchTerm, setSearchTerm, filter, setFilter }) {
    return (
      <>
        <Summary pets={pets} />
        <SearchFilter setSearchTerm={setSearchTerm} setFilter={setFilter} />
        <PetList pets={pets} searchTerm={searchTerm} filter={filter} />
      </>
    );
  }

export default Dashboard;