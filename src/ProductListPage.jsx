import React, { useState, useEffect } from 'react';
import ProductList from './ProductList'
import NotFound from './NotFound'
import { getProductList } from './api'
import Loading from './Loading'




function ProductListPage() {
  const [productList, setProductList] = useState([]);
  const [loading,setLoading]=useState(true);

  const [query, setQuery] = useState('');
  const [sort, setSort] = useState("default");

  useEffect(function() {
    const promise = getProductList()
    promise.then(function(response) {
      const ddata = response.data.products
      setProductList(ddata)
      setLoading(false)
    })

  }, [])

  let data = productList.filter(function(items) {
    return items.title.toLowerCase().indexOf(query.toLowerCase()) != -1;
  });

  const onInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery)
    console.log(newQuery);
  }

  const onSortChange = (event) => {
    setSort(event.target.value);
  }
  if (sort == "ps") {
    data.sort(function(x, y) {
      return x.price - y.price;
    });
  } else if (sort == "ns") {
    data.sort(function(x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }
  if(loading){
    return  <Loading/>
  }

  return (
    
        <div className="p-2 px-16 items-center mx-auto max-w-6xl bg-white py:12.5 my-16 mx-7">
          <input value={query} placeholder="search" className="p-2 border border-black m-3 rounded-md" onChange={onInputChange}></input>
          <select value={sort} onChange={onSortChange} className="border border-black p-2">
            <option value="default">default sorting</option>
            <option value="ns">name sorting</option>
            <option value="ps">price sorting</option>
          </select>
          {data.length > 0 &&<ProductList products={data} ></ProductList>}
        {data.length == 0 && <NotFound></NotFound>} 
        </div>
      );
}
export default ProductListPage;
/*       </div>*/
