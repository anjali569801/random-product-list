import React from 'react';
import Button from './Button';
import Input from './Input';

function CartProduct({thumbnail,price,title}) {
  return (
    <div className="flex flex-col bg-white">
      <img className="border-b-1 p-1" src={thumbnail}></img>
      <div className="flex justify-between px-6 border-b-1">
        <span>Product:</span>
        <span>{title}</span>
      </div>
      <div className="flex justify-between px-6 border-b-1">
        <span >Price:</span>
        <span>{price}</span>
      </div>
      <div className="flex justify-between px-6 border-b-1">
        <span >Quantity:</span>
        <span>l</span>
      </div>
      <div className="flex justify-between px-6 border-b-1">
        <span >SubTotal:</span>
        <span>m</span>
      </div>
      <div className="flex mt-2">
        <Input placeholder="coupon code"></Input>
        <Button>Apply Coupon</Button>
      </div>
      <Button>Update Cart</Button>
    </div>

  );
}
export default CartProduct