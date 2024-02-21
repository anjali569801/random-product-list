import React, { useState,useEffect } from 'react';
import CartProduct from './CartProduct'
//import { getProduct } from './api';
import Button from './Button';
import Input from './Input';
import { useParams } from 'react-router-dom';


function Cart({cart,quantity,id}){
     // const params=useParams()
     // const id=params.id;

   const [cartdata,setCartdata]=useState([])
  //  console.log("quantity in cart",cart);
  //   // console.log("id in the cart",id);
   const newcartdata=cart.map(item=>{
     if(item.id===id){
       console.log("item quantity before in cart",item.quantity);
       item.quantity=item.quantity+quantity;
       console.log("item quantity after in cart",item.quantity);

     }
     return item;
   })
  console.log("newcartdata",newcartdata);
     //filter(item=>item.id!==id
  //     // if(item.id!==id){
  //     //    return item;
  //     //    //return { ...item, quantity: item.quantity + quantity };
  //     // }
  //     // return item;
  //   )
  // setCartdata(newcartdata)
  //  console.log("cartdata",cartdata);
  
  // const [products,setProduct]=useState([]);
  // const productIds=Object.keys(cart);

  // useEffect(function(){
  //   const promise = productIds.map(function(id){
  //     return getProduct(id);
  //   })
  //   Promise.all(promise).then(function(products){
  //     setProduct(products);
  //     console.log("producta",products)
  //   })
  // },[])
  
  return(
    <div className="p-2 md:px-16 items-center mx-auto  md:max-w-6xl bg-white  md:my-16 md:mx-7 my-4 mx-2">
      {cart.map(function(product){
      return(
    <CartProduct {...product} />)})}
    <div className="flex mt-2">
        <Input placeholder="coupon code"></Input>
        <Button>Apply Coupon</Button>
      </div>
      <Button>Update Cart</Button>
    </div>
  );
}
export default Cart
//<CartProduct {...product} quantity={quantity}/>)})}