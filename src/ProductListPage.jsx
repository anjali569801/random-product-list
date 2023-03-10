import React, { useState, useEffect } from 'react';
import ProductList from './ProductList'
import NotFound from './NotFound'
import { getProductList } from './api'
import Loading from './Loading'
import Button from './Button';


function ProductListPage() {

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

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
  if (loading) {
    return <Loading />
  }

  return (

    <div className="p-2 md:px-16 items-center mx-auto max-w-6xl bg-white  md:my-16 md:mx-7 my-4 mx-2">
      <div className="flex flex-col items-start justify-between space-y-2 md:space-y-0 px-5 py-2 md:flex-row">
        <input value={query} placeholder="search" className="w-44 p-2 border border-black rounded-md " onChange={onInputChange}></input>
        <select value={sort} onChange={onSortChange} className="border w-44 h-10 border-black p-2 ">
          <option value="default">default sorting</option>
          <option value="ns">name sorting</option>
          <option value="ps">price sorting</option>
        </select>
      </div>
      <div>
      {data.length > 0 && <ProductList products={data} ></ProductList>}
      {data.length == 0 && <NotFound></NotFound>}</div>
      <div className="flex space-x-2">

        <Button>1</Button>
        <Button theme="secondary">2</Button>
        <Button theme="secondary">-></Button>
      </div>
    </div>
  );
}
export default ProductListPage;
/*       </div>*/
