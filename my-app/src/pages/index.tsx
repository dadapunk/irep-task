import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Button } from '@mui/material';


type Employee = {
  id: number;
  name: string;
  lastName: string;
  jobTitle: string;
  birthDate: string;
  active: boolean;
};

const initialRows: Employee[] = [
  { "id":1, "name":"Jorge", "lastName":"Ramirez", "jobTitle":"Backend Developer", "birthDate":"22/11/1982", "active":true },
  { "id":2, "name":"Sebastián", "lastName":"Velásquez", "jobTitle":"Systems Admin & Developer", "birthDate":"07/08/1986", "active":true },
  { "id":3, "name":"Alberto", "lastName":"Recio", "jobTitle":"Frontend Developer", "birthDate":"02/28/1983", "active":true },
  { "id":4, "name":"Xevi", "lastName":"Serrat", "jobTitle":"Frontend Developer", "birthDate":"28/05/1986", "active":true },
  { "id":5, "name":"Christian", "lastName":"Feldermann", "jobTitle":"Head of Technology", "birthDate":"01/01/1974", "active":true }
];

export default function BasicTable() {
  const [rows, setRows] = useState<Employee[]>(initialRows);

  const toggleActive = (id: number) => {
    setRows(rows.map(row => row.id === id ? { ...row, active: !row.active } : row));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Birth Date</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.jobTitle}</TableCell>
              <TableCell>{row.birthDate}</TableCell>
              <TableCell>{row.active ? 'Yes' : 'No'}</TableCell>
              <TableCell>
                <Button variant="contained" color={row.active ? "secondary" : "primary"} onClick={() => toggleActive(row.id)}>
                  {row.active ? 'Deactivate' : 'Activate'}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}