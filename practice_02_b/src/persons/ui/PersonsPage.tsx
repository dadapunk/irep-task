import { useState } from 'react'
import { createPersonsList } from '../domain/createPerson'
import  PersonForm  from './PersonForm'
import PersonsTable  from './PersonsTable'
import { Person } from '../domain/Person'
import React from 'react'

export function PersonsPage() {
  const [persons, setPersons] = useState(createPersonsList())

  const handleAddPerson = (person: Person) => {
    setPersons([...persons, person])
  }

  const handleDeletePerson = (personId: string) => {
    setPersons(persons.filter(person => person.id !== personId))
  }

  return (
    <div>
      <PersonForm onSubmit={handleAddPerson} persons={[]} setPersons={function (value: React.SetStateAction<Person[]>): void {
        throw new Error('Function not implemented.')
      } } selectedPerson={{
        id: '',
        name: '',
        lastName: '',
        jobTitle: '',
        birthDate: '',
        active: false
      }} setSelectedPerson={function (value: React.SetStateAction<Person>): void {
        throw new Error('Function not implemented.')
      } } />
      <PersonsTable persons={persons} handleDelete={handleDeletePerson} handleEdit={function (personId: string): void {
        throw new Error('Function not implemented.')
      } } />
    </div>
  )
}