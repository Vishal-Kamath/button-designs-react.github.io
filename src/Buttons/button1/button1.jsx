import React from 'react';

const Button1 = (props) => {
  const {
    buttonValue,
    buttonClass
  } = props
  return ( 
    <button className={buttonClass}>
      {buttonValue}
    </button>
  );
}
 
export default Button1;