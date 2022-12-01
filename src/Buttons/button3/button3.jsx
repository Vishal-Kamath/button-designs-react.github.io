import React from 'react';

const Button3 = (props) => {
  const {
    buttonValue,
    buttonClass
  } = props
  return ( 
    <button 
      className={buttonClass}>
      <div className="buttonCover"></div>
      {buttonValue}
    </button>
  );
}
 
export default Button3;