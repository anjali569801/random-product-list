import React,{useState} from 'react';
import Header from './Header';
import ProductListPage from './ProductListPage'
import {Routes,Route} from 'react-router-dom'
import ProductDetails from './ProductDetails';
import Cart from './Cart'


function App() {
  const savedProduct = JSON.parse(localStorage.getItem('my-cart')) || {}
  
   const[cart,setCart]=useState(savedProduct);
  const[cartProduct,setCartProduct]=useState([])

  const onAddToCart =(productId,count,product)=>{
    const oldCount = cart[productId] || 0;
   const newCart ={...cart, [productId]:oldCount+count};
    const data = JSON.stringify(newCart);
    localStorage.setItem('my-cart',data)
    console.log("price",product.price)

    //or
    // const newCart={...cart};

    // newCart[productId] = oldCount+ count;
    setCart(newCart);
    
    //if (product.title !=)
    setCartProduct([...cartProduct,product])
    const name=Object.entries(cartProduct)
    console.log("cart.title",name[1])
    console.log("cart",cartProduct)
    
  }
  
 const count= Object.keys(cart).reduce(function(previous,current){
  return previous + cart[current];
 },0);

  const viewCart =()=>{
    
  }
  

  return (

    <div className="bg-gray-300 flex flex-col h-screen overflow-scroll">
     
  
      
      <Header totalProduct={count} product={cartProduct}></Header>
      <Routes>
      <Route index element={<ProductListPage></ProductListPage>}/>
        <Route path="/products/:id" element={<ProductDetails onViewCart={viewCart} AddToCart={onAddToCart}></ProductDetails>}></Route>
        <Route path="/cart" element={ <Cart products={cartProduct} ></Cart>}/>
      </Routes>
  
</div>
  );
}


export default App;

