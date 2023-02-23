import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from './api'
import { RxArrowLeft } from "react-icons/rx";
import Button from './Button'
import Input from './Input'
import PopUp from './PopUp';

function ProductDetails({AddToCart}) {
  const { id } = useParams()
  
  const [inputValue,setInputValue]=useState(1);
  const [product, setProduct] = useState([]);
 const [showPopup, setShowPopup] = useState(false);


  // or
  // const {id}=useParams()
  useEffect(function() {
    const promise = getProduct(id)
    promise.then(function(response) {
      setProduct(response.data)
      console.log(product.title)
      console.log(response.data)
    })
  }, [])

  const onInputChange=(event)=>{
    const quantity=+(event.target.value)
    setInputValue(quantity)
    
    
  }

  const addToCart=()=>{
    AddToCart(id,inputValue);
    console.log("hlw")
    setShowPopup(true)
  }

  return (
    <div className="bg-white shadow-lg  p-20 mx-20 my-8">{showPopup&&<PopUp product={product.title} ></PopUp>}
      {product &&
      <div>
        <div>
          <Link to="/" ><RxArrowLeft className="bg-white text-blue-900 text-2xl m-2 rounded-md"></RxArrowLeft></Link>
        </div>
        <div className="flex gap-10">
          <img className="h-full aspect-square" src={product.thumbnail}/>
          <div className="flex flex-col space-y-3 p-10">
            <h1 className="font-bold text-4xl">{product.title}</h1>
            <h1 className=" font-semibold text-xl">${product.price}</h1>
            <h1 className="text-gray-400">{product.category}</h1>
            <span>{product.description}</span>
            <Input value={inputValue} min="1" type="number" onChange={onInputChange}></Input>
            <Button onClick={addToCart}>Add to cart</Button>
          </div>
        </div>

      </div>}
    </div>

  );
}
export default ProductDetails;