import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from './api';
import { RxArrowLeft } from 'react-icons/rx';
import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr';
import Button from './Button';
import Input from './Input';
import PopUp from './PopUp';
import Loading from './Loading';

function ProductDetails({ AddToCart }) {
  const params = useParams();
  const id = +params.id;

  const [inputValue, setInputValue] = useState(1);
  const [product, setProduct] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  // or
  // const {id}=useParams()
  useEffect(
    function() {
      const promise = getProduct(id);
      promise.then(function(response) {
        setProduct(response.data);
        setLoading(false);
        console.log('data aa gya', response.data);
        console.log(id);
      });
      promise.catch(function(error) {
        console.log('erroe', error);
      });
    },
    [id]
  );

  const onInputChange = event => {
    const quantity = +event.target.value;
    setInputValue(quantity);
  };

  const addToCart = () => {
    AddToCart(id, inputValue, product);
    setShowPopup(true);
  };



  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-white shadow-lg  p-20 mx-20 my-8">
      {showPopup && <PopUp product={product.title} />}

      {product && (
        <div>
          <div>
            <Link to="/">
              <RxArrowLeft className="bg-white text-blue-900 text-2xl m-2 rounded-md" />
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
            <img className="h-full aspect-square" src={product.thumbnail} />
            <div className="flex flex-col space-y-3 lg:p-10">
              <h1 className="font-bold text-4xl">{product.title}</h1>
              <h1 className=" font-semibold text-xl">${product.price}</h1>
              <h1 className="text-gray-400">{product.category}</h1>
              <span>{product.description}</span>
              <div className="flex space-x-2">

                <Input
                  value={inputValue}
                  min="1"
                  type="number"
                  onChange={onInputChange}
                  className="w-9"
                />
                <Button onClick={addToCart}>Add to cart</Button>
              </div>
              <div className="flex space-x-2">
                <Link to={'/products/' + (id - 1)}>
                  <GrFormPreviousLink class="text-4xl bg-primary-default px-2 text-white" />
                </Link>
                <Link to={'/products/' + (id + 1)}>
                  <GrFormNextLink class="text-4xl bg-primary-default px-2 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductDetails;
