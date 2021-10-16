import React, { Component } from 'react'
import Cart from './Cart';


export class Product extends Component {
    constructor(props){
        super(props);
        this.state={prodQty:this.props.prodData.quantity, cart:0, quantity:1}
    }
    componentDidMount(){
        // this.setState({prodData:data.products})
        if(localStorage.getItem('mycart')){
        let arra = JSON.parse(localStorage.getItem('mycart'));
        this.setState({
            cart: arra.length
        
        })
    }}
  
    addCart=(id,quantity,image,pname,prod)=>{
        /* eslint-disable */
        if(localStorage.getItem('mycart')!=undefined){
            let arr = JSON.parse(localStorage.getItem('mycart'));
            const newid= arr.find((ele)=>{
                return(ele.id===id)
            })
            if(newid ){
                console.log(id)
                // let arr1 = JSON.parse(localStorage.getItem('mycart'));
                newid.quantity = newid.quantity + 1
                
                alert(`Total ${newid.quantity} quantity of this item added`)

                // this.setState({prodQty: newid.quantity+1})
                // arr.push({id:newid.id,quantity:newid.quantity})
                // arr.pop({newid,quantity})
            localStorage.setItem('mycart',JSON.stringify(arr))

            }
            else{
                arr.push({id:id, quantity:quantity,image:image,pname:pname,prod:prod});
            localStorage.setItem('mycart',JSON.stringify(arr))
            alert("Product Added")
            }
        }
        else{
            let arr=[];
            // arr.push(id);
            arr.push({id:id, quantity:quantity,image:image,pname:pname,prod:prod});
            localStorage.setItem('mycart',JSON.stringify(arr))
            alert("Product Added")

        }
    }
   
    render() {
        return (
            <div>
             
                {/* <Cart pdata={this.props.prodData} pqty={this.state.prodQty} cart={this.state.cart}/> */}

                <section className="container">
                    <div className="row">
                        {/* <h1>Products</h1> */}
                        {this.props.prodData.map(currElm=>{
                        const {id, pname,prod, quantity, image} = currElm;
                        return(
                            <>

                            <div key={currElm.id} className="col-sm-3">
                                <div  key={id} className="card " style={{height:"500px",width: "18rem"}}>
                                    <img src={image}   className="card-img-top" alt={pname}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Product:{pname}</h5>
                                        <p className="card-text">price: Rs.{prod}</p>
                                        {/* <p className="card-text">Qty:{quantity}</p> */}
                                        <button className="btn-warning" onClick={()=>this.addCart(id,quantity,image,pname,prod)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                                
                            </>
                        )
                    })}
                    </div>
                </section>
                {/* <Cart pdata={this.props.prodData} pqty={this.state.prodQty} cart={this.state.cart}/> */}
            </div>
        );
        
    }
}



export default Product