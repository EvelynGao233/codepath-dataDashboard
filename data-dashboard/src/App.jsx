import React, { useEffect, useState } from 'react';
import PetList from './PetList';
import Summary from './Summary';
import SearchFilter from './SearchFilter';
import './App.css'
function App() {
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState({});
 

  useEffect(() => {
    const fetchPets = async () => {
      const tokenResponse = await fetch("https://api.petfinder.com/v2/oauth2/token", {
        method: "POST",
        body: `grant_type=client_credentials&client_id=${import.meta.env.VITE_APP_API_KEY_ID}&client_secret=${import.meta.env.VITE_APP_API_KEY_SECRET}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
      });
    

      const { access_token } = await tokenResponse.json();

      // Get Pets Data
      const petsResponse = await fetch("https://api.petfinder.com/v2/animals", {
        headers: {
          "Authorization": `Bearer ${access_token}`
        }
      });

      if(petsResponse.ok) {
        const data = await petsResponse.json();
        setPets(data.animals);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="App">
      <Summary pets={pets} />
      <SearchFilter setSearchTerm={setSearchTerm} setFilter={setFilter} />
      <PetList pets={pets} searchTerm={searchTerm} filter={filter} />

    </div>
  );
}

export default App;
