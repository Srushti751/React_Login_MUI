import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import data from './User.json'
import axios from 'axios'
import { client } from './AxiosInstance';
import { FormGroup, FormControlLabel,RadioGroup,FormControl,FormLabel,Radio, Button, Container } from '@mui/material';
import { Checkbox } from '@mui/material';
import { width } from '@mui/system';


const regForPass=RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/);

class ChangePassword extends Component {
    
    constructor(props) {
        super(props)
    
        if (localStorage.getItem('usersLS')) {
            var UsersDataLS = JSON.parse(localStorage.getItem('usersLS'));
          }
        this.state = {
            id:this.props.match.params.id,
            userdata:[],
            Metadata: data.users,
                loginuser:UsersDataLS,
                old:null,
                password:null,
                confirm:null,
                successmsg:"",
          
                errmsg:"",
                errors:{
                        old:"",
                        password:"",
                        confirm:""
                    }
        }
    }
    componentDidMount=async()=>{
        let res = await client.get(`/${this.state.id}`)
        this.setState({userdata: res.data})
    }
    chngHandler=(e)=>{
        const {name, value} = e.target
        let errors = this.state.errors

        switch(name){
            case 'old':
                errors.old=value===this.state.loginuser[0].pass?'':"Password doesn't match";
                break;
            case 'password':
                errors.password=regForPass.test(value)?'':"Password should contain 1 uppercase, digit , special char and should be 10 characters long";
                break;
            case 'confirm':
                errors.confirm=value===this.state.password?'':"Password doesn't match";
                break;   
        }
        this.setState({errors,[name]:value})
    }
    validate=(errors)=>{
        let valid=true;
        Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
        return valid;
    }
    submit=async(e)=>{
        e.preventDefault()

        if(this.validate(this.state.errors)){
            var loginuser = JSON.parse(localStorage.getItem('usersLS'));
            loginuser[0].pass = this.state.confirm
            let newpass ={pass:this.state.confirm,email:this.state.userdata.email}
            localStorage.setItem('usersLS', JSON.stringify(loginuser));
            let res = await client.put(`/${this.state.id}`,newpass)
         
            
            alert("Submitted");
        }
        else{
            alert("invalid");
            // this.setState({errmsg:"Failed to Submit"})

        }
    }
    render(){
        const {errors} = this.state;
console.log(this.state.userdata)
  return (
      <Container  style={{border: "3px solid grey", padding:"2rem 4rem", margin:"2rem auto", width:"60%"}}>
          <h2>ChangePassword</h2>
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
      {errors.old.length>0?
       <TextField
        
       error
       id="outlined-error-helper-text"
       label="Error"
       helperText={errors.old}
       placeholder="Old Password" name="old" onChange={this.chngHandler}
     /> :
        <TextField
            
        id="outlined-error-helper-text"
        label="Old Password"
        placeholder="Old Password" name="old" onChange={this.chngHandler}
    />
    
    }
       
      </div>
      <div>
      {errors.password.length>0?
       <TextField
        
       error
       id="outlined-error-helper-text"
       label="Error"
       helperText={errors.password}
       placeholder="New Password" name="password" onChange={this.chngHandler}
     /> :
        <TextField
            
        id="outlined-error-helper-text"
        label="New Password"
        placeholder="New Password" name="password" onChange={this.chngHandler}
    />
    
    }
       
      </div>
      <div>
      {errors.confirm.length>0?
       <TextField
        
       error
       id="outlined-error-helper-text"
       label="Error"
       helperText={errors.confirm}
       placeholder="Confirm Password" name="confirm" onChange={this.chngHandler}
     /> :
        <TextField
            
        id="outlined-error-helper-text"
        label="Confirm Password"
        placeholder="Confirm Password" name="confirm" onChange={this.chngHandler}
    />
    
    }
       
      </div>
     
<div>
    <Button variant="contained"type="submit">Sumbit</Button>
    </div>
    </Box>
    

    </Container>


  );
}
}

export default ChangePassword