import React from 'react';
import CartProduct from './CartProduct'

function Cart({products}){
  // let data = products.filter(function(items) {
  //   console.log(!products.includes(items.title));
  //   return !products.includes(items.title);
  //   console.log(data)
    //items.title.toLowerCase() == -1;
  //});
  return(
    <div>
      {products.map(function(product){
      return(
    <CartProduct {...product}/>)})}</div>
  );
}
export default Cart