import { Button } from '@mui/material'
import React, { Component } from 'react'

class Logout extends Component {
    constructor(props) {
        super(props)
    
        if (localStorage.getItem('usersLS')) {
            var UsersDataLS = JSON.parse(localStorage.getItem('usersLS'));
          }
        this.state = {
             userdata : UsersDataLS
        }
      
    }
    logout=()=>{
        localStorage.removeItem('usersLS');
    }
    
    render() {
        return (
            <div>
                <Button onClick={this.logout}>Logout</Button>
            </div>
        )
    }
}

export default Logout
