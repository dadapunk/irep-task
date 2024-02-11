import { v4 as uuidv4 } from 'uuid'
import { Person } from './Person'

export function createPerson(id: string='', name: string = '', lastName: string = '', jobTitle: string = '', birthDate: string = ''): Person {
  return {
    id: uuidv4(),
    name,
    lastName,
    jobTitle,
    birthDate,
    active: true
  }
}

export function createPersonsList(): Person[] {
  return [
    createPerson('Jorge', 'Ramirez', 'Backend developer', '22/11/1982'),
    // Add more ...
  ]
}