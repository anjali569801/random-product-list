import React from 'react';

function Input(props){
  return(
    <div className="border border-black w-11">
      <input type={props.type} min={props.min} disabled={props.disabled} value={props.value} onChange={props.onChange} className="  w-10"></input>
    </div>
  );
}
export default Input;
