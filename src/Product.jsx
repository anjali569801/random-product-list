import React from 'react';
import { Link } from 'react-router-dom';


function Product({ thumbnail, category, title, price, id }) {

  return (
    <div>
      <div className="max-w-xs">
        <div className="w-full aspect-square">
          <img className="w-full object-cover h-full" src={thumbnail}></img>
        </div>
        <h1 className="text-gray-400">{category}</h1>
        <h1 className="font-semibold">{title}</h1>
        <h1 className=" font-semibold">${price}</h1>
        <Link to={"/products/" + (id)} className="text-primary-dark underline">view details</Link>
      </div>
    </div>
  );
}
export default Product;