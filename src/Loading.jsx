import React from 'react';
import {ImSpinner} from 'react-icons/im'

function Loading(){
  return(
    <div className="bg-primary-default  grow flex items-center justify-center">
      <ImSpinner className="animate-spin text-4xl"></ImSpinner>
    </div>
    
  );
}
export default Loading