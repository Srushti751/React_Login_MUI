import React, { Component } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export class Sidebar extends Component {
    render() {
        return (
            <div>
      
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            <h2>Features</h2>
          </Typography>
            <List >
              
                <ListItem component="a" className="text-dark" style={{textDecoration:"none"}} href="/prods">
                    Products
                </ListItem>
                <ListItem component="a" className="text-dark" style={{textDecoration:"none"}} href="/products">
                Category
                </ListItem>
                <ListItem component="a" className="text-dark" style={{textDecoration:"none"}} href="/orders">
                    Order
                </ListItem>
                <ListItem component="a" className="text-dark" style={{textDecoration:"none"}} href="/feedback">

                    Feedback
                </ListItem>
            </List>
      
            </div>
        )
    }
}

export default Sidebar


