import React from 'react';
function Button(props){
  let themeClasses = 'bg-primary-default text-white border-indigo-700';
  if(props.theme==='secondary'){
    themeClasses='bg-red-300 border-red-700';
  }
  return(
    <div>
    <button onClick={props.onClick} class={"disabled:bg-gray-300  px-5 py-1 rounded-md text-xl font-bold " + themeClasses}  disabled={props.disabled}>{props.children}</button>
    </div>
  );
}
export default Button;