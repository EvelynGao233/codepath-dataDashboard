import React from 'react';
import './Summary.css';
import { PieChart, Pie, Cell, Tooltip,BarChart, Bar, XAxis, YAxis, CartesianGrid,  Legend} from 'recharts';


function AgePieChart({ ageGroups }) {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const data = [
    { name: 'Baby', value: ageGroups.Baby || 0 },
    { name: 'Young', value: ageGroups.Young || 0 },
    { name: 'Adult', value: ageGroups.Adult || 0 },
    { name: 'Senior', value: ageGroups.Senior || 0 },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}


function BreedsBarChart({ breeds }) {
  const data = Object.entries(breeds)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([breed, count]) => ({ name: breed, count }));

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
}

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

      <div className="age-group-chart">
      <AgePieChart ageGroups={ageGroups} />
      </div>
      <div className="breeds-chart">
      <BreedsBarChart breeds={breeds} />
      </div>

    </div>
  );
}

export default Summary;
