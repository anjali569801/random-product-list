import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai'

function Header(props) {
 
  return (
    <div className="py-4 bg-white ">
      <div className="max-w-6xl flex justify-between mx-auto  items-center">
        <img className="h-16" src="https://th.bing.com/th/id/OIP.YdkQGmhB9c2Sr84FeDD9egHaEK?pid=ImgDet&rs=1"></img>
        <div className="relative">
          <AiOutlineShopping className="text-5xl relative text-primary-default" />
          <span class="absolute text-primary-default top-4 left-5 ">{props.totalProduct}</span>
        </div>
      </div>

    </div>
  );
}
export default Header;