import React from 'react';
import Button from './Button'

function Product2(props){
  
 const [quantity, updateQuantity]=React.useState(1);

  //console.log("product funtion called",quantity,props.name);
  //const [Disabled, setDisabled]=React.useState(false);
const [gift, updateGift]=React.useState(false);
  
  const increase =()=>{
   
    updateQuantity(quantity+1);
    //console.log("inscreas funtion called",quantity,props.name);
    
  }

  const decrease =()=>{
    if(quantity>1){   
      updateQuantity(quantity-1);
   console.log(quantity)}else
    {    
    props.remove(props.name)
    }
  }
 // const set=()=>{
 //   if(quantity>10){
 //      setDisabled(!Disabled);
 //   }
// }

  const giftWrap=()=>{
    
      updateGift(!gift);
      
    }
  
    let text="gift wrap"
    let bgColor="bg-red-500"

  if(gift){
    bgColor="bg-green-500"
    text="remove gift wrap"
  }

  
  return(
    <div className={" p-2 m-2 " +bgColor}>
      <span className="text-blue-500 font-bold ">{props.name}</span>
      <div className="flex">
      <Button onClick={increase} >+</Button>
      <span className="p-2">product quantity {quantity}</span>
      <Button onClick={decrease} Disabled={quantity === 0}>-</Button>
      <Button theme="secondary" onClick={giftWrap}>{text}</Button>  
      </div>
    </div>
  );
}
export default Product2;