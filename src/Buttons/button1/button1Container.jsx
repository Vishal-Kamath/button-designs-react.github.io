import React, { Component } from 'react';
import Button1 from './button1';

class Button1Container extends Component {
  state = {  } 
  render() { 
    return (
      <div className="container button1Container">
        <div className="body">Button 1</div>
        <Button1 
          buttonValue='Click Me!'
          buttonClass='button1'/>
      </div>
    );
  }
}
 
export default Button1Container;