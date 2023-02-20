import React from 'react';

function Card(props){
  return(
    <div className="bg-gray-200 shadow-lg p-2 m-2">{props.children}</div>
  );
}
export default Card;