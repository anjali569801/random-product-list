import React from 'react';
import Button from './Button';
import {AiFillCheckCircle} from 'react-icons/ai'

function PopUp(props){
  
  return(
    <div className="p-4 bg-gray-300 border-t-4 mt-4 border-primary-default flex justify-between">
      <div className="flex">
      <AiFillCheckCircle className="text-primary-default text-xl mr-2"></AiFillCheckCircle>
      <span>" {props.product} " has been added to your cart</span>
        </div>
    <Button>View cart</Button></div>
    
  );
}
export default PopUp;