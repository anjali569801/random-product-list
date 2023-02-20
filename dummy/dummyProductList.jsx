import React from 'react';
import Product from './Product';
// import Header from './Header'
// import Footer from './Footer'


function dummyProductList({products}) {

  // const [Quantity, updateQuantity] = React.useState(0);
  // console.log(Quantity);
  // const [isAGift, updateIsAGift] = React.useState(false);
  // const decreaseQuantity = () => {
  //   updateQuantity(Quantity - 1);
  // };
  // const increaseQuantity = () => {
  //   updateQuantity(Quantity + 1);

  // };
  // const toggleGiftWrap = () => {
  //   updateIsAGift(!isAGift);
  // }
  // let buttonText = 'gift Wrap it';
  // let colorClass='bg-red-400';
  // if(isAGift){
  //   buttonText='Remove gift wrap';
  //   colorClass='bg-green-500';
  // }


    
  

  return (
    <div className="sm:grid grid-cols-3  bg-gray-100  w-2/3 flex flex-wrap mx-auto p-10">
      {products.map(function (item){
      return(
        <Product key={item.title} {...item}/>
        );
      
      })}
      
      
    </div>



    
// <div className="bg-gray-100 mx-auto p-2 w-2/3">
//   <Header></Header>
//     <div className="flex flex-wrap mx-auto p-10">
     
//       <Product catagory="mugs" title="black printed coffee mug" src="https://www.bing.com/images/blob?bcid=S4VMGgSwITAFDumguJT8UnfeJBle.....7o" price="15"></Product>
//       <Product catagory="mugs" title="fathers coffee mug" src="https://th.bing.com/th/id/OIP.1HhFayjmZfFbWjU9ZLU5EQHaGR?pid=ImgDet&rs=1" price="15"></Product>
//       <Product catagory="T-Shirt" title="white shirt" src="https://m.media-amazon.com/images/I/A1OZPgCsCHL._CLa%7C2140%2C2000%7C91-1LmnumEL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png" price="15"></Product>
//       <Product catagory="mugs" title="black printed coffee mug" src="https://www.bing.com/images/blob?bcid=S4VMGgSwITAFDumguJT8UnfeJBle.....7o" price="20"></Product>
//       <Product catagory="mugs" title="black printed coffee mug" src="https://www.bing.com/images/blob?bcid=S4VMGgSwITAFDumguJT8UnfeJBle.....7o" price="30"></Product>
//       <Product catagory="T-Shirt" title="black printed coffee mug" src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81y9uY155qL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX569_.png" price="45"></Product>
//     </div>
//   <Footer></Footer>
//     </div





    
    // <div className="border border-1 p-2 border-black m-2">
    // <div className={" flex justify-between p-4 " + colorClass}>
    //   <Button  onClick={decreaseQuantity}> - </Button>
    //   <div className="flex flex-col text-center">
    //   <span className="text-2xl font-extrabold p-2" >{props.ProductName}</span>
    //    <span className=""> ( Total Product : { Quantity })</span>
    // </div>
    // <Button onClick={increaseQuantity}> + </Button>
    //   <Button theme="secondary" onClick={toggleGiftWrap}>{buttonText}</Button>
    // </div>
    // </div>

  );
}

export default dummyProductList;
