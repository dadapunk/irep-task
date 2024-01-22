import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';


type PersonTableProps = {
    persons: any[];
    handleDelete: (id: string) => void;
    handleToggleActive: (id: string) => void;
};

const PersonTable: React.FC<PersonTableProps> = ({ persons, handleDelete, handleToggleActive }) => {
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
                <Button onClick={() => handleToggleActive(person.id)}>
                  {person.active ? 'Deactivate' : 'Activate'}
                </Button>
              </TableCell>

                            <TableCell>
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