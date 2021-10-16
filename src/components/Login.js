import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import data from './User.json'
import { FormGroup, FormControlLabel,RadioGroup,FormControl,FormLabel,Radio, Button, Container } from '@mui/material';
import { Checkbox } from '@mui/material';
import { width } from '@mui/system';
import { client } from './AxiosInstance';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'


const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForfName = RegExp(/^[a-zA-Z '.-]*$/);
const regForMob=RegExp(/^([+]\d{2})?\d{10}$/);
const regForPass=RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/);

class Login extends Component {
    
    constructor(props) {
        super(props)
    
        if (localStorage.getItem('usersLS')) {
            var UsersDataLS = JSON.parse(localStorage.getItem('usersLS'));
          }

        this.state = {
             userdata:data.users,
             userServer:[],
                fname:null,
                lname:null,
                dob:null,
                id:2,
                email:null,
                mobile:null,
                age:null,
                password:null,
                city:null,
                gender:"female",
                successmsg:"",
          
                errmsg:"",
                errors:{
                        fname:"",
                        lname:"",
                        dob:"",
                        email:"",
                        age:"",
                        mobile:"",
                        password:"",
                    }
        }
    }
    componentDidMount=async()=>{
        let res= await client.get()
        this.setState({userServer:res.data})
    }
    chngHandler=(e)=>{
        const {name, value} = e.target
        let errors = this.state.errors

        switch(name){
            case "fname":
                errors.fname = regForfName.test(value)? "":"Please enter proper first name";
                break;
            case "lname":
                errors.lname =  regForfName.test(value)? "":"Please enter proper last name";
                break;
            // case "dob":
            //     errors.dob =  regFordate.test(value)? "":"Please enter valid date of birth";
            //     break;
            case 'mobile':
                errors.mobile= regForMob.test(value)?'':' use proper format +91';
                break;
            case 'age':
                errors.age=value<18?'Age should be greater than 18':'';
                break;
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
    
//     val=()=>{
//         for (let i=0; i < data.users.length; i++) {
//          if (data.users[i].email === this.state.email && data.users[i].pass===this.state.password)
//              return true;
//      }
//      return false;
//  }
        val=()=>{
            for (let i=0; i < this.state.userServer.length; i++) {
            if (this.state.userServer[i].email === this.state.email && this.state.userServer[i].pass===this.state.password)
               {
                   this.setState({id:this.state.userServer[i].id})
                return true;
               }
        }
        return false;
        }



 submit=(e)=>{
     e.preventDefault()

   
     if(this.val()){
        const {fname,lname,email,password,city,age,gender,id} = this.state

         var loginuser = []
         loginuser.push({email:this.state.email, pass:this.state.password,id:id, city:city,fname:fname,age:age,gender:gender})
         localStorage.setItem('usersLS', JSON.stringify(loginuser));
         alert("success")
         
         
         
     }
     else{
         alert("failed")
     }
     console.log(this.val())

 }
    render(){
     console.log(this.state.id)

        const {errors} = this.state;
  return (

    <Router>
      <Container  style={{border: "3px solid grey", padding:"2rem 4rem", margin:"2rem auto", width:"60%"}}>
          <h2>Register</h2>
    <Box 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '55ch' },
      }}
      noValidate
       encType="multipart/form-data"
      autoComplete="off"
    >
      <div>
      {errors.fname.length>0?
       <TextField
        
       error
       id="outlined-error-helper-text"
       label="Error"
       helperText={errors.fname}
       placeholder="Fullname" name="fname" onChange={this.chngHandler}
     /> :
        <TextField
            
        id="outlined-error-helper-text"
        label="Fullname"
        placeholder="Fullame" name="fname" onChange={this.chngHandler}
    />
    
    }
       
      </div>
      <div>
      {errors.email.length>0?
       <TextField
        
       error
       id="outlined-error-helper-text"
       label="Error"
       helperText={errors.email}
       placeholder="Email" name="email" onChange={this.chngHandler}
     /> :
        <TextField
            
        id="outlined-error-helper-text"
        label="Email"
        placeholder="Email" name="email" onChange={this.chngHandler}
    />
        
    
    }
      </div>
      <div>
      {errors.mobile.length>0?
       <TextField
        
       error
       id="outlined-error-helper-text"
       label="Error"
       helperText={errors.mobile}
       placeholder="Mobile" name="mobile" onChange={this.chngHandler}
     /> :
        <TextField
            
        id="outlined-error-helper-text"
        label="Mobile"
        placeholder="Mobile" name="mobile" onChange={this.chngHandler}
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
       placeholder="Password" name="password" onChange={this.chngHandler}
     /> :
        <TextField
            
        id="outlined-error-helper-text"
        label="Password"
        placeholder="Password" name="password" onChange={this.chngHandler}
    />
    
    }
     <div>
      {errors.age.length>0?
       <TextField
        
       error
       id="outlined-error-helper-text"
       label="Error"
       helperText={errors.age}
       placeholder="Age" name="age" onChange={this.chngHandler}
     /> :
        <TextField
            
        id="outlined-error-helper-text"
        label="Age"
        placeholder="Age" name="age" onChange={this.chngHandler}
    />
    
    }
       
      </div>

      <div>
      {errors.fname.length>0?
       <TextField
        
       error
       id="outlined-error-helper-text"
       label="Error"
       helperText={errors.fname}
       placeholder="City" name="city" onChange={this.chngHandler}
     /> :
        <TextField
            
        id="outlined-error-helper-text"
        label="City"
        placeholder="City" name="city" onChange={this.chngHandler}
    />
    
    }
       
      </div>
       
      </div>
     
        
    <FormControl component="fieldset">
  <FormLabel component="legend">Gender</FormLabel>
  <RadioGroup
    aria-label="gender"
    defaultValue="female"
    value={this.state.gender}
    name="gender" onChange={this.chngHandler}
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>
<div>
   <Button onClick={this.submit} href='/' variant="contained"type="submit"> Sumbit</Button>
    </div>
    </Box>


    </Container>
</Router>

  );
}
}

export default Login