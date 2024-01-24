import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { Person } from '../types';

/**
 * Props for the PersonTable component
 * @typedef {Object} PersonTableProps
 * @property {Person[]} persons - Array of persons
 * @property {(id: number) => void} handleDelete - Function to delete a person by ID
 * @property {(id: number) => void} handleEdit - Function to set the currently selected person by ID
 */
type PersonTableProps = {
    persons: Person[];
    handleDelete: (id: number) => void;
    handleEdit: (id: number) => void;
  };

  /**
 * PersonTable component
 * @param {PersonTableProps} props - Props for the PersonTable component
 * @returns {React.FC<PersonTableProps>} Functional component
 */
  const PersonTable: React.FC<PersonTableProps> = ({ persons, handleDelete, handleEdit }) => {
    return (
        <TableContainer>
            <Table>
                <TableBody>
                    {persons.map((person) => (
                        <TableRow key={person.id}>
                            <TableCell>{person.id}</TableCell>
                            <TableCell>{person.name}</TableCell>
                            <TableCell>{person.lastName}</TableCell>
                            <TableCell>{person.jobTitle}</TableCell>
                            <TableCell>{person.birthDate}</TableCell>
            <TableCell>
              <Button onClick={() => handleEdit(person.id)}>Edit</Button>
              <Button onClick={() => handleDelete(person.id)}>Delete</Button>
            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PersonTable;