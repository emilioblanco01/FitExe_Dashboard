import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';

import { DataMovement, DataUsers } from '../../interface/interfaceTable';

export default function BasicTable({ data, rows, type }: { data: DataMovement[] | DataUsers[], rows?: any[], type?: number }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    {
                        rows &&
                        rows.map((row) => (
                            <TableCell style={{ color: "white" }}>{row.label}</TableCell>
                        ))
                    }
                    </TableRow>
                    
                </TableHead>
                <TableBody>
                    {
                        type === 1 ?
                        data.map((row) => (
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
                        )) :
                        data.map((row) => {
                            return (
                                <TableRow
                                    onClick={() => console.log(row)}
                                    key={row.AthleteId}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                    <TableCell >{row.lastName}</TableCell>
                                    <TableCell >{row.email}</TableCell>
                                    <TableCell >{row.phoneNumber}</TableCell>
                                    <TableCell align='center'>{row.TrainingType}</TableCell>
                                    <TableCell align='center'>{row.dateBirth}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={0}
                rowsPerPage={5}
                page={0}
                onPageChange={() => { }}
                onRowsPerPageChange={() => { }}
            />
        </TableContainer>
    );
}