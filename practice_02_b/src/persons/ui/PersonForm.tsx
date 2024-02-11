import { useEffect, useState } from 'react'
import { Person } from '../domain/Person'
import { createPerson } from '../domain/createPerson'
import React from 'react'

interface PersonFormProps {
  onSubmit: (person: Person) => void;
  selectedPerson?: Person;
  setSelectedPerson: React.Dispatch<React.SetStateAction<Person>>;
  persons: Person[];
  setPersons: React.Dispatch<React.SetStateAction<Person[]>>; 
}

function PersonForm({ onSubmit, selectedPerson }: PersonFormProps) {
  const [person, setPerson] = useState(selectedPerson ?? createPerson());

  useEffect(() => {
    setPerson(selectedPerson ?? createPerson());
  }, [selectedPerson]);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSubmit(person)
    setPerson(createPerson())
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={person.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={person.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="jobTitle"
        value={person.jobTitle}
        onChange={handleChange}
      />
      <input
        type="text"
        name="birthDate"
        value={person.birthDate}
        onChange={handleChange}
      />
      {/* other input fields... */}
      <input
        type="text"
        name="active"
        value={person.active.toString()}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
export default PersonForm;
