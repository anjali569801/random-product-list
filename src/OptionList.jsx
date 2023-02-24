import React from 'react'
import { Link } from 'react-router-dom'

function OptionList() {
  return(
    <div className="flex flex-col">
      <Link to="/" className="hover:text-primary-default border-b-1 border-t-1 border-black p-1 bg-white ">home</Link>
      <Link  className="hover:text-primary-default border-b-1 border-black p-1 bg-white">allProduct</Link>
      <Link  className="hover:text-primary-default border-b-1 border-black p-1 bg-white">about</Link>
      <Link  className="hover:text-primary-default border-b-1 border-black p-1 bg-white">details</Link>
    </div>

  );
}
export default OptionList