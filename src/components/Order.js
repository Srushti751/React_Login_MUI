
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



class Order extends Component {
  constructor(props) {
    super(props)
  
    if (localStorage.getItem('mycart')) {
      var cart = JSON.parse(localStorage.getItem('mycart'));
    }
    this.state = {
       cartData : [],
       loginuser: cart
    }
  }
  componentDidMount=async()=>{
    let res = await client.get()
    this.setState({cartData:res.data})
  }
  
  render(){
  return (
    <>
      {
        localStorage.getItem('mycart')!=undefined?
        <>
      
      
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>ID</TableCell> */}
            <TableCell align="center">Product</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Price</TableCell>
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
              <TableCell align="center">{row.pname}</TableCell>
              <TableCell align="center"><img src={row.image}></img></TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.prod}</TableCell>
            </TableRow>
            )
          })}
      
        </TableBody>
      </Table>
    </TableContainer></>:
    <h2>No orders to show</h2>}
    </>
  );
}
}
export default Order