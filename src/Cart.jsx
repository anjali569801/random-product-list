import React from 'react';
import CartProduct from './CartProduct'
import Button from './Button';
import Input from './Input';


function Cart({cart}){

  
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
