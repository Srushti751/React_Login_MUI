import React, { Component } from 'react'

class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {proddata:this.props.pdata 
             
        }
    }

    showData=(id)=>{
        if(localStorage.getItem('mycart')!=null){
            let arr = JSON.parse(localStorage.getItem('mycart'));
                
             
             
            let body1 = document.getElementById("prodHead");
            body1.innerHTML = ` <tr>
                                    <td>Product</td>
                                    <td>Image</td>
                                    <td>Quantity</td>
                                    <td>Price</td>
                                    <td>TotalAmt</td>
                                </tr>`
            arr.forEach(item => {
                let pname= item.pname
                let image= item.image
                let prod =item.prod
                let qty = item.quantity
                let amt = parseInt(item.prod * qty)
                let body = document.getElementById("prods")
                // let show_total= document.getElementById("show_total")
                let div1 = document.createElement("tr")
                let td1 = document.createElement("td")
                let td5 = document.createElement("td")
                let td6 = document.createElement("img")
                let td2 = document.createElement("td")
                let td3 = document.createElement("td")
                let td4 = document.createElement("td")
                // let td1 = document.createElement("td")
                td1.innerText = pname
                td2.innerText = qty
                td3.innerText = "Rs."+ prod
                td4.innerText = amt
                td6.src = image
                td6.height = 100
                td6.width = 100
                // td5.innerText= total
                body.appendChild(div1)
                div1.appendChild(td1)
                div1.appendChild(td5)
                td5.appendChild(td6)
                div1.appendChild(td2)
                div1.appendChild(td3)
                div1.appendChild(td4)
                
            });
    
        }}
   
    render() {
        
        return (
            <>

            <div>
                <div className="bg-dark mt-5">
                <button className="btn btn-outline btn-lg m-3 text-white">Home</button>
                <button className="btn btn-warning btn-lg m-3 ml-0" onClick={()=>this.showData()}>Cart  {this.props.cart}</button>
               </div>
                <table className="tbl-style" border="1">
                    <thead id="prodHead">

                    </thead>
                    <tbody id="prods">
                    
                           
                    </tbody>
                </table>
                <div id="show_total"></div>
            </div>
            </>
        )
    }
    }

export default Cart
