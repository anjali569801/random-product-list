import React from 'react';

function CartProduct({thumbnail,price,title,quantity}) {
  console.log("quantity cart product",quantity);
  return (
    <div className="flex flex-col border items-center bg-white">
      <img className=" w-32 h-32 my-2" src={thumbnail}></img>
      <div className="w-full">
      <div className="flex justify-between border-t-1 px-6 border-b-1">
        <span>Product:</span>
        <span>{title}</span>
      </div>
      <div className="flex justify-between px-6 border-b-1">
        <span >Price:</span>
        <span>{price}</span>
      </div>
      <div className="flex justify-between px-6 border-b-1">
        <span >Quantity:</span>
        <span>{quantity}</span>
      </div>
      <div className="flex justify-between px-6 border-b-1">
        <span >SubTotal:</span>
        <span>{price*quantity}</span>
      </div>
        </div>
      
    </div>

  );
}
export default CartProduct