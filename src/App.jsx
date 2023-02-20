import React from 'react';
import Header from './Header';
import ProductListPage from './ProductListPage'
import {Routes,Route} from 'react-router-dom'
import ProductDetails from './ProductDetails'



function App() {

  return (

    <div className="bg-gray-300 flex flex-col h-screen overflow-scroll">
      
      <Header></Header>
      <Routes>
      <Route index element={<ProductListPage></ProductListPage>}/>
        <Route path="/products/:id" element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
      <Header></Header>

</div>
  );
}


export default App;

