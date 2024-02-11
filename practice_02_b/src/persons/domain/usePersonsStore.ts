import { useState } from 'react'
import { Person } from '../domain/Person'

interface PersonsStore {
  persons: Person[];
  selectedPerson: Person | null;
  selectPerson(person: Person | null): void;
  addPerson(person: Person): void;
  updatePerson(person: Partial<Person>): void;
  deletePerson(personId: string): void;
  togglePersonActive(personId: string): void;
}

export function usePersonsStore(initialPersons: Person[]): PersonsStore {
  const [persons, setPersons] = useState(initialPersons)
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null)

  // Implement the rest of the methods here...
  function selectPerson(person: Person | null): void {
    setSelectedPerson(person)
  }
  function addPerson(person: Person): void {
    setPersons([...persons, person])
  }
  function updatePerson(person: Partial<Person>): void {
    setPersons(persons.map(p => p.id === person.id ? { ...p, ...person } : p))
  }
  function deletePerson(personId: string): void {
    setPersons(persons.filter(p => p.id !== personId))
  }
  function togglePersonActive(personId: string): void {
    setPersons(persons.map(p => p.id === personId ? { ...p, active: !p.active } : p))
  }

  return {
    persons,
    selectedPerson,
    selectPerson,
    addPerson,
    updatePerson,
    deletePerson,
    togglePersonActive
  }
}