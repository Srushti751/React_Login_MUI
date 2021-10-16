import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

export default function ImageComp() {
  return (
    // <ImageList sx={{ width: 600, height: 450 }}>
    <ImageList sx={{ width: '100%', maxWidth:1000, height: 550 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div"><h2>Products</h2></ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.image}?w=248&fit=crop&auto=format`}
            alt={item.pname}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.pname}
            subtitle={item.prod}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.pname}`}
              >
                {/* <InfoIcon /> */}
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    id:1,
    pname:"mobile",
    prod:"Rs.30000",
    quantity:1,
    image:"images/i1.jpg"
},
{
    id:2,
    pname:"Fan",
    prod:"Rs.5000",
    quantity:1,
    image:"images/i2.jpg"

},
{
    id:3,
    pname:"Fridge",
    prod:"Rs.25000",
    quantity:1,
    image:"images/i3.jpg"

},
{
    id:4,

    pname:"shoes",
    prod:"Rs.2000",
    quantity:1,
    image:"images/i4.jpg"

},
{
    id:5,
    pname:"Shirt",
    prod:"Rs.500",
    quantity:1,
    image:"images/i5.jpg"

},
{
    id:6,
    pname:"TV",
    prod:"Rs501000",
    quantity:1,
    image:"images/i6.jpg"

},
{
    id:7,
    pname:"Jeans",
    prod:"Rs.800",
    quantity:1,
    image:"images/i7.jpg"

},
{
    id:8,
    pname:"Heels",
    prod:"Rs.200",
    quantity:1,
    image:"images/i8.jpg"

},

];
