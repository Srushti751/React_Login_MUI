import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import data from './User.json'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { FormGroup, FormControlLabel,RadioGroup,FormControl,FormLabel,Radio, Button, Container } from '@mui/material';
import { Checkbox } from '@mui/material';
import { width } from '@mui/system';

const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForfName = RegExp(/^[a-zA-Z '.-]*$/);
const regForMob=RegExp(/^([+]\d{2})?\d{10}$/);
const regForPass=RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/);

class Login2 extends Component {
    
    constructor(props) {
        super(props)

        if (localStorage.getItem('usersLS')) {
            var UsersDataLS = JSON.parse(localStorage.getItem('usersLS'));
          }
    
        this.state = {
             userdata:data.users,
               
                rate:3,
          
                errmsg:"",
               
        }

      
    }
    
    chngHandler=(e)=>{
        const {name, value} = e.target
        let errors = this.state.errors

        switch(name){
            
            case 'email':
                errors.email=regForEmail.test(value)?'':"Email is not valid example:- abc@gm.com";
                break;
            case 'password':
                errors.password=regForPass.test(value)?'':"Password should contain 1 uppercase, digit , special char and should be 10 characters long";
                break;
        }
        this.setState({errors,[name]:value})
    }
    validate=(errors)=>{
        let valid=true;
        Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
        return valid;
    }
    val=()=>{
        
           for (let i=0; i < data.users.length; i++) {
            if (data.users[i].email === this.state.email && data.users[i].pass=== this.state.password)
                return true;
        }
        return false;
    }
   
   
   
    submit=(e)=>{
        e.preventDefault()

      
        if(this.val()){
            var loginuser = []
            loginuser.push({email:this.state.email, pass:this.state.password})
            localStorage.setItem('usersLS', JSON.stringify(loginuser));
            alert("success")
            
        }
        else{
            alert("failed")
        }
        console.log(this.val())

    }
    render(){
        const {errors} = this.state;

  return (
      <Container  style={{border: "3px solid grey", padding:"2rem 4rem", margin:"2rem auto", width:"60%"}}>
          <h2>Feedback</h2>
          <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">How was your experience</Typography>
      <Rating
        name="simple-controlled"
        onChange={this.chngHandler}
      />
      </Box> 
    <Box 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '55ch' },
      }}
      noValidate
      onSubmit={this.submit} encType="multipart/form-data"
      autoComplete="off"
    >

      <div>

        <TextField        
        id="outlined-error-helper-text"
        label="Feedback"
        placeholder="Type your feedback here..." name="email" onChange={this.chngHandler}
    />
      </div>

<div>
    <Button variant="contained"type="submit">Sumbit</Button>
    </div>
    </Box>


    </Container>


  );
}
}

export default Login2