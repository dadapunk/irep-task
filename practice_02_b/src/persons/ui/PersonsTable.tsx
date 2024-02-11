import React from 'react'
import { Person } from '../domain/Person'

interface PersonsTableProps {
  persons: Person[]
  handleDelete: (personId: string) => void
  handleEdit: (personId: string) => void
}

export default function PersonsTable({ persons, handleDelete: handleDelete, handleEdit }: PersonsTableProps) {
  return (
    <table>
        <thead>
            <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {persons.map(person => (
            <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.lastName}</td>
                <td>{person.jobTitle}</td>
                <td>{person.birthDate}</td>
                <td>{person.active}</td>
                <td>
                <button onClick={() => handleDelete(person.id)}>Delete</button>
                <button onClick={() => handleEdit(person.id)}>Edit</button>
                </td>
            </tr>
            ))} 

        </tbody>

    </table>
  )
}
