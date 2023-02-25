import React from 'react';
//import Product2 from './Product2';
import ProductList2 from './ProductList2'
// import Button from './Button'
// import Card from './Card';
import {Routes,Route} from 'react-router-dom';
import ProductDetails from './ProductDetails'
import NotFound from './NotFound'
import Header from './Header'



function App() {
  
 // const [productList, updateProductList]=useState([]);
 // const [inputValue, updateInputValue]=useState('');
  
 //  const addToCart=()=>{
 //    updateProductList([...productList,inputValue])
 //   updateInputValue('');
    
 //  }
 //  const onInputChange=(event)=>{
 //    updateInputValue(event.target.value)
    
 //  }
 // const removeFromCart=(name)=>{
 //   const newProductList = productList.filter(product=>product !== name);
 //   updateProductList(newProductList);
 // }
  



  


  // const showTable = (j)=>{
  // const num = document.getElementById("table");
  // num.innerHTML= '';

  // for(let i=1; i<=10;i++){
  //   num.innerHTML= `${num.innerHTML}<div>${j} x ${i}=${j*i}</div>`;
  // }}


  

  return (
//     <>
// // <Card>
// //   <input value={inputValue} onChange={onInputChange} className="px-5 py-2 border border-black m-2 rounded-md"></input>
// //   <Button onClick={addToCart}>Add</Button>
  
// // </Card>{ productList.length>0 &&
//       <Card>
//       {productList.map((products)=>{
//        return <Product2 key={products} name={products} remove={removeFromCart}></Product2>
//       })}
//         </Card>}
    // </>



  
    // //{AddCart(productList)}
    <div className="bg-gray-300">
      <Header></Header>
      <Routes>
        <Route index element={<ProductList2></ProductList2>}/>
        <Route path="/products/:id" element={<ProductDetails></ProductDetails>}/>
        <Route path='/NotFound' element={<NotFound></NotFound>}/>
      </Routes>

</div>
  );
}


// function AddCart(myProduct,removeFromCart){
//   const productHtml=[];

//   for(let i=0;i<myProduct.length; i++){
//     const productName=myProduct[i];
//     const html=<Product2 name={productName} remove={removeFromCart}></Product2>
//     productHtml.push(html);
    
//   }
//   return productHtml
  
// }

export default App;

