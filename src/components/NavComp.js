import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Logout from './Logout';
import { client } from './AxiosInstance';

class NavComp extends Component {
    constructor(props) {
        super(props)
    
        if (localStorage.getItem('usersLS')) {
            var UsersDataLS = JSON.parse(localStorage.getItem('usersLS'));
          }
        this.state = {
             userdata : UsersDataLS,
             userServer:[], id:null
        }
      
    }
    componentDidMount=async()=>{
        let res= await client.get()
        this.setState({userServer:res.data})
        
    }
    logout=()=>{
            var answer = window.confirm("Are you sure you wanna logout?");
            if (answer) {
        localStorage.removeItem('usersLS');
        //some code
            }
         
    }

    render() {
        return (
            
            <div>
             
                <Router>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DASHBOARD
          </Typography>
          
          <Button color="inherit" href="/">Home</Button>
        
        {localStorage.getItem('usersLS')!=undefined?
        //   <Button color="inherit" href={`/changepass/${this.state.userdata[0].id}`}>ChangePassword</Button>:""}
          <Button color="inherit" href={`/changepass/${this.state.userdata[0].email}`}>ChangePassword</Button>:""}
          {/* <Button color="inherit" href="/register2">Login2</Button> */}
          <Button color="inherit" href="/register">Login</Button>
          <Button color="inherit" href="/" onClick={this.logout} >Logout</Button>
        


       

        </Toolbar>
      </AppBar>
    </Box>
    </Router>
            </div>
        )
    }
}

export default NavComp
