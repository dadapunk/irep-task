import React, { useState } from 'react';
import PersonForm from '../src/persons/ui/PersonForm';
import PersonsTable  from '../src/persons/ui/PersonsTable';
import { Person } from '../src/persons/domain/Person';

/**
 * Initial data for the persons array
 * @type {Person[]}
 */
const initialRows: Person[] = [
  //create person with uuid
  { id:'1', "name":"Jorge", "lastName":"Ramirez", "jobTitle":"Backend Developer", "birthDate":"22/11/1982", "active":true },
  { id:'2', "name":"Sebastián", "lastName":"Velásquez", "jobTitle":"Systems Admin & Developer", "birthDate":"07/08/1986", "active":true },
  { id:'3', "name":"Alberto", "lastName":"Recio", "jobTitle":"Frontend Developer", "birthDate":"02/28/1983", "active":true },
  { id:'4', "name":"Xevi", "lastName":"Serrat", "jobTitle":"Frontend Developer", "birthDate":"28/05/1986", "active":true },
  { id:'5', "name":"Christian", "lastName":"Feldermann", "jobTitle":"Head of Technology", "birthDate":"01/01/1974", "active":true }
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
  const [selectedPerson, setPersonToEdit] = useState<Person | null>(null);

  const handleDelete = (id) => {
    setPersons(persons.filter((person) => person.id !== id));
  };
    /**
   * Function to set the currently selected person by ID
   * @param {number} id - The ID of the person to select
   */
  const handleEdit = (id) => {
    const personToEdit = persons.find((person) => person.id === id) || null;
    setPersonToEdit(personToEdit);
  };

  

  const handleSubmit = (personData) => {
    if (selectedPerson) {
      // If a person is being edited, update that person's data
      setPersons(persons.map(person => person.id === selectedPerson.id ? {...personData, id: person.id} : person));
    } else {
      // If no person is being edited, create a new person
      const newId = persons.length > 0 ? Math.max(...persons.map(person => Number(person.id))) + 1 : 1;      setPersons([...persons, {...personData, id: newId}]);
    }
    setPersonToEdit(null); // clear the person to edit after submitting
  };

  return (
    <div>
      <PersonForm
      onSubmit={handleSubmit}
        persons={persons}
        setPersons={setPersons}
        selectedPerson={selectedPerson}
        setSelectedPerson={setPersonToEdit}
      />
      <PersonsTable persons={persons} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
};

export default App;