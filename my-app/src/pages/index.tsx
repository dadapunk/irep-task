import React, { useState } from 'react';
import PersonForm from '../components/PersonForm';
import PersonTable from '../components/PersonTable';
import { Person } from '../types';

/**
 * Initial data for the persons array
 * @type {Person[]}
 */
const initialRows: Person[] = [
  { "id":1, "name":"Jorge", "lastName":"Ramirez", "jobTitle":"Backend Developer", "birthDate":"22/11/1982", "active":true },
  { "id":2, "name":"Sebastián", "lastName":"Velásquez", "jobTitle":"Systems Admin & Developer", "birthDate":"07/08/1986", "active":true },
  { "id":3, "name":"Alberto", "lastName":"Recio", "jobTitle":"Frontend Developer", "birthDate":"02/28/1983", "active":true },
  { "id":4, "name":"Xevi", "lastName":"Serrat", "jobTitle":"Frontend Developer", "birthDate":"28/05/1986", "active":true },
  { "id":5, "name":"Christian", "lastName":"Feldermann", "jobTitle":"Head of Technology", "birthDate":"01/01/1974", "active":true }
];

/**
 * Main application component
 * @returns {React.FC} Functional component
 */
const App: React.FC = () => {
    /**
   * State for the persons array
   * @type {React.Dispatch<React.SetStateAction<Person[]>>}
   */
  const [persons, setPersons] = useState<Person[]>(initialRows);
    /**
   * State for the currently selected person
   * @type {React.Dispatch<React.SetStateAction<Person | null>>}
   */
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const handleDelete = (id: number) => {
    setPersons(persons.filter((person) => person.id !== id));
  };
    /**
   * Function to set the currently selected person by ID
   * @param {number} id - The ID of the person to select
   */
  const handleEdit = (id: number) => {
    const personToEdit = persons.find((person) => person.id === id) || null;
    setSelectedPerson(personToEdit);
  };

  return (
    <div>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        selectedPerson={selectedPerson}
        setSelectedPerson={setSelectedPerson}
      />
      <PersonTable persons={persons} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
};

export default App;