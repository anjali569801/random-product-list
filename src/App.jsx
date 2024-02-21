import React,{useState} from 'react';
import Header from './Header';
import ProductListPage from './ProductListPage'
import {Routes,Route,useParams} from 'react-router-dom'
import ProductDetails from './ProductDetails';
import Cart from './Cart'


function App() {
  const savedProduct = JSON.parse(localStorage.getItem('my-cart')) || {}
  
   const[cart,setCart]=useState(savedProduct);
  const[cartProduct,setCartProduct]=useState([])
  const[quantity,setQuantity]=useState('')

  const onAddToCart =(productId,count,product)=>{
    const oldCount = cart[productId] || 0;
   const newCart ={...cart, [productId]:oldCount+count};
    const data = JSON.stringify(newCart);
    localStorage.setItem('my-cart',data)
    console.log("price",cart)
    setQuantity(count)
    setCart(newCart);
   setCartProduct([...cartProduct,{ ...product, quantity:count, id:productId }])
    console.log("quantity add to cart",quantity);
    
  }
  
  
 const count= Object.keys(cart).reduce(function(previous,current){
  return previous + cart[current];
 },0);

  return (

    <div className="bg-gray-300 flex flex-col h-screen overflow-scroll">
     
      <Header totalProduct={count}></Header>
      <Routes>
      <Route index element={<ProductListPage></ProductListPage>}/>
        <Route path="/products/:id" element={<ProductDetails  AddToCart={onAddToCart}></ProductDetails>}></Route>
        <Route path="/cart" element={ <Cart cart={cartProduct} ></Cart>}/>
      </Routes>
  
</div>
  );
}


export default App;

