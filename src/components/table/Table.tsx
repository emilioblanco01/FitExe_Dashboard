import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';

import { DataMovement } from '../../interface/interfaceTable';

interface Data {
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
}

const rows : DataMovement[] = [

];

export default function BasicTable({ data }: { data: DataMovement[] }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ color: "white" }}>Nombre del Movimiento</TableCell>
                        <TableCell align="right" style={{ color: "white" }}>Tipo de entrenamiento</TableCell>
                        <TableCell align="right" style={{ color: "white" }}>URL</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.MovementName}
                            </TableCell>
                            <TableCell align="right">{row.TrainingTypeId}</TableCell>
                            <TableCell align="right">{row.URL}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={5}
                page={0}
                onPageChange={() => { }}
                onRowsPerPageChange={() => { }}
            />
        </TableContainer>
    );
}