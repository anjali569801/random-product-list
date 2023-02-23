import React from 'react';
function Button(props){
  let themeClasses = 'bg-primary-default text-white';
  if(props.theme==='secondary'){
    themeClasses='bg-white text-primary-default border-primary-default hover:bg-primary-default hover:text-white';
  }
  return(
    <div>
    <button onClick={props.onClick} class={"disabled:bg-gray-300  px-5 py-1 border rounded-md  font-bold " + themeClasses}  disabled={props.disabled}>{props.children}</button>
    </div>
  );
}
export default Button;