import React, { useState } from 'react';
import PersonForm from '../components/PersonForm';
import PersonTable from '../components/PersonTable';

/**
 * @typedef Person
 * @property {number} id
 * @property {string} name
 * @property {string} lastName
 * @property {string} jobTitle
 * @property {string} birthDate
 * @property {boolean} active
 */
type Person = {
  id: number;
  name: string;
  lastName: string;
  jobTitle: string;
  birthDate: string;
  active: boolean;
};

const initialRows: Person[] = [
  { "id":1, "name":"Jorge", "lastName":"Ramirez", "jobTitle":"Backend Developer", "birthDate":"22/11/1982", "active":true },
  { "id":2, "name":"Sebastián", "lastName":"Velásquez", "jobTitle":"Systems Admin & Developer", "birthDate":"07/08/1986", "active":true },
  { "id":3, "name":"Alberto", "lastName":"Recio", "jobTitle":"Frontend Developer", "birthDate":"02/28/1983", "active":true },
  { "id":4, "name":"Xevi", "lastName":"Serrat", "jobTitle":"Frontend Developer", "birthDate":"28/05/1986", "active":true },
  { "id":5, "name":"Christian", "lastName":"Feldermann", "jobTitle":"Head of Technology", "birthDate":"01/01/1974", "active":true }
];

/**
 * @function App
 * @returns {JSX.Element}
 */
function App() {
  const [persons, setPersons] = useState<Person[]>(initialRows);
  const [formValues, setFormValues] = useState<Person>({ id: '', name: '', lastName: '', jobTitle: '', birthDate: '', active: false });

  /**
   * @function handleInputChange
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  /**
   * @function handleSubmit
   * @param {React.FormEvent<HTMLFormElement>} event
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const highestId = Math.max(...persons.map(person => parseInt(person.id)), 0);
    const newPerson = { ...formValues, id: (highestId + 1).toString() };
    setPersons([...persons, newPerson]);
    setFormValues({ id: '', name: '', lastName: '', jobTitle: '', birthDate: '', active: false });
  };

  /**
   * @function handleDelete
   * @param {string} id
   */
  const handleDelete = (id: string) => {
    setPersons(persons.filter(person => person.id !== id));
  };
  /**
 * @function handleToggleActive
 * @param {string} id
 */
const handleToggleActive = (id: string) => {
  setPersons(persons.map(person => person.id === id ? { ...person, active: !person.active } : person));
};

  return (
    <div>
      <PersonForm formValues={formValues} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      <PersonTable persons={persons} handleDelete={handleDelete} handleToggleActive={handleToggleActive} />    </div>
  );
}

export default App;