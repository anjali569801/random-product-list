import React, { useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { BsList } from 'react-icons/bs';
import OptionList from './OptionList';
import {Link} from 'react-router-dom';

function Header(props) {

  const [list, setList] = useState(false);

  const onListIconClick = () => {
    setList(true);
  }
  const onCancelIconClick = () => {
    setList(false);
  }

  return (
    <div className="py-4 px-4 bg-white ">
      <div className="max-w-6xl flex justify-between mx-auto  items-center ">
        <img className="h-16" src="https://th.bing.com/th/id/OIP.YdkQGmhB9c2Sr84FeDD9egHaEK?pid=ImgDet&rs=1"></img>
        <div className="flex items-center">
          <div className="relative h-16">
            <Link to="/cart">
            <AiOutlineShopping className="text-5xl relative text-primary-default" />
            <span class="absolute text-primary-default top-4 left-5 ">{props.totalProduct}</span>
              </Link>
          </div>{!list &&
            <BsList onClick={onListIconClick} className="bg-primary-default text-4xl text-white mb-2 md:hidden"></BsList>}
          {list && <RxCross2 onClick={onCancelIconClick} className="bg-primary-default text-4xl text-white mb-2 md:hidden"></RxCross2>}

        </div>
      </div>
      {list && <OptionList></OptionList>}

    </div>
  );
}
export default Header;