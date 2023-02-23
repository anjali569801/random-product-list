import React,{useState} from 'react';
import Header from './Header';
import ProductListPage from './ProductListPage'
import {Routes,Route} from 'react-router-dom'
import ProductDetails from './ProductDetails'




function App() {
  const savedProduct = JSON.parse(localStorage.getItem('my-cart')) || {}
   const[cart,setCart]=useState(savedProduct);

  const onAddToCart =(productId,count)=>{
    const oldCount = cart[productId] || 0;
   const newCart ={...cart, [productId]:oldCount+count};
    const data = JSON.stringify(newCart);
    localStorage.setItem('my-cart',data)

    //or
    // const newCart={...cart};

    // newCart[productId] = oldCount+ count;
    setCart(newCart);
    
  }
 const count= Object.keys(cart).reduce(function(previous,current){
  return previous + cart[current];
 },0);
  

  return (

    <div className="bg-gray-300 flex flex-col h-screen overflow-scroll">
      
      <Header totalProduct={count} ></Header>
      <Routes>
      <Route index element={<ProductListPage></ProductListPage>}/>
        <Route path="/products/:id" element={<ProductDetails AddToCart={onAddToCart}></ProductDetails>}></Route>
      </Routes>
  
</div>
  );
}


export default App;

