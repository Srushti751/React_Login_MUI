import React, { Component } from 'react'
import MainArea from './MainArea'
import Sidebar from './Sidebar'
import { Grid } from '@mui/material'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import ChangePassword from './ChangePassword'
import Login2 from './Login2'
import Login from './Login'
import ImageComp from './ImageComp'
import Logout from './Logout'
import ProductList from './ProductList'
import Order from './Order'


class ContentComp extends Component {
    render() {
        return (
            <div>
                <Router>

                <Grid container spacing={2}>
                <Grid item xs={3} style={{borderRight:"2px solid gray"}}>
                <Sidebar/>

                </Grid>
                
                <Grid item xs={9}>
                    <Switch>
                        <Route exact path='/changepass/:id' component={ChangePassword}/>
                       
                        <Route exact path='/register2'>
                            <Login2/>
                        </Route>
                        <Route exact path='/register'>
                            <Login/>
                        </Route>
                        <Route exact path='/products'>
                            <ImageComp/>
                        </Route>
                        <Route exact path='/logout'>
                            <Logout/>
                        </Route>
                        <Route exact path='/prods'>
                            <ProductList/>
                        </Route>
                        <Route exact path='/orders'>
                            <Order/>
                        </Route>
                        <Route exact path='/feedback'>
                            <Login2/>
                        </Route>
                        <Route exact path='/'>
                    <MainArea/>
                        </Route>
                    </Switch>
                </Grid>
        </Grid>
        </Router>
            </div>
        )
    }
}

export default ContentComp

// import MenuIcon from '@mui/icons-material/Menu';


