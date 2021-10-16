
import React, { Component } from 'react'
import Product from './Product';
class ProductList extends Component {
    state={ products:[
        {
            id:1,
            pname:"mobile",
            prod:1000,
            quantity:1,
            image:"images/i1.jpg"
        },
        {
            id:2,
            pname:"Fan",
            prod:500,
            quantity:1,
            image:"images/i2.jpg"

        },
        {
            id:3,
            pname:"Fridge",
            prod:1000,
            quantity:1,
            image:"images/i3.jpg"

        },
        {
            id:4,
            pname:"shoes",
            prod:2000,
            quantity:1,
            image:"images/i4.jpg"

        },
        {
            id:5,
            pname:"Shirt",
            prod:1000,
            quantity:1,
            image:"images/i5.jpg"

        },
        {
            id:6,
            pname:"TV",
            prod:1000,
            quantity:1,
            image:"images/i6.jpg"

        },
        {
            id:7,
            "pname":"Jeans",
            "prod":1000,
            "quantity":1,
            "image":"images/i7.jpg"

        },
        {
            id:8,
            "pname":"Heels",
            "prod":700,
            "quantity":1,
            "image":"images/i8.jpg"

        },
        {
            id:9,
            pname:"Earphones",
            prod:1200,
            quantity:1,
            image:"images/i9.png"

        },
        {
            id:10,
            pname:"Laptop",
            prod:15000,
            quantity:1,
            image:"images/i10.jpg"

        },
        {
            id:11,
            pname:"Bottle",
            prod:1000,
            quantity:1,
            image:"images/i11.jpg"

        },
        {
            id:12,
            pname:"Tiffin",
            prod:800,
            quantity:1,
            image:"images/i12.jpg"

        },
        {
            id:13,
            pname:"Handbag",
            prod:8000,
            quantity:1,
            image:"images/i13.jpg"

        },
        {
            id:14,
            pname:"Sneakers",
            prod:2000,
            quantity:1,
            image:"images/i14.jpg"

        },
        {
            id:15,
            pname:"Sweater",
            prod:750,
            quantity:1,
            image:"images/i15.jpg"

        },
        {
            id:16,
            pname:"Sweater",
            prod:600,
            quantity:1,
            image:"images/i16.jpg"

        },
        {
            id:17,
            pname:"Helmet",
            prod:900,
            quantity:1,
            image:"images/i17.jpg"

        },
        {
            id:18,
            pname:"TV",
            prod:1000,
            quantity:1,
            image:"images/i1.jpg"

        },
        {
            id:19,
            pname:"TV",
            prod:1000,
            quantity:1,
            image:"images/i2.jpg"

        },
        {
            id:20,
            pname:"TV",
            prod:1000,
            quantity:1,
            image:"images/i3.jpg"

        },

    ]}
    render() {
        return (
            <div>
                <Product prodData={this.state.products}/>
            </div>
        )
    }
}

export default ProductList ;


