import React from 'react';

const Button4 = (props) => {
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
 
export default Button4;