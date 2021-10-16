
import {react, Component} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { client } from './AxiosInstance';
import data from './User.json'

import { padding } from '@mui/system';



class BasicTable extends Component {
  constructor(props) {
    super(props)
  
    if (localStorage.getItem('usersLS')) {
      var UsersDataLS = JSON.parse(localStorage.getItem('usersLS'));
    }
    this.state = {
       userData : [],
       loginuser: UsersDataLS
    }
  }
  componentDidMount=async()=>{
    let res = await client.get()
    this.setState({userData:res.data})
  }
  
  render(){
  return (
    <>
      {
        localStorage.getItem('usersLS')!=undefined?
        <>
      <h2>Welcome <span style={{color:"blue", fontStyle:"italic"}}>{this.state.loginuser[0].fname}</span> to the DASHBOARD</h2>
      
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>ID</TableCell> */}
            <TableCell align="right">Fullname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.loginuser.map((row)=>{
            return(
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.id}
              </TableCell> */}
              <TableCell align="right">{row.fname}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
            </TableRow>
            )
          })}
      
        </TableBody>
      </Table>
    </TableContainer></>:
    <h2>To see the data User has to Login</h2>}
    </>
  );
}
}
export default BasicTable