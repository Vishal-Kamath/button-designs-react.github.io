import React from 'react';

const Button2 = (props) => {
  const {
    buttonValue,
    buttonClass,
    buttonFunction
  } = props
  return ( 
    <button 
      className={buttonClass} 
      onClick={() => buttonFunction()}>
      {buttonValue}
    </button>
  );
}
 
export default Button2;