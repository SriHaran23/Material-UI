import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: 1,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 1,
  },
}));

export default function CustomizedTables({tableData,setTableData}) {
  const navigate=useNavigate();
  useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setTableData(json))
    }, [])

    const del=(i)=>{
        let temp=[...tableData]
        temp.splice(i,1)
        console.log("i",temp)
        let res =[...temp]
        setTableData(res)
    }

return (
    <div className='container my-3'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Number</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Password</StyledTableCell>
              <StyledTableCell align="center" colSpan={2}>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData && tableData.map((row,i) => {
              return <StyledTableRow key={i}>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.number}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.password}</StyledTableCell>
                <StyledTableCell align="center"><Button variant="filled" endIcon={<EditIcon />} onClick={()=>{navigate('/edit',{state:{row,i}})}} sx={{backgroundColor:'skyblue', color:'white',marginTop:'8%', padding:'5%'}}>Edit</Button></StyledTableCell>
                <StyledTableCell align="center"><Button variant="filled" endIcon={<DeleteOutlinedIcon />} onClick={()=>{del(i)}} sx={{backgroundColor:'skyblue', color:'white',marginTop:'8%', padding:'5%'}}>Delete</Button></StyledTableCell>
              </StyledTableRow>
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
