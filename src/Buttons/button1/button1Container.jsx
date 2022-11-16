import React, { Component } from 'react';
import Button1 from './button1';

class Button1Container extends Component {
  state = { 
    buttonValue: 'Click Me!',
    buttonClass: 'button1'
  } 
  render() { 
    return (
      <div className="container button1Container">
        <div className="body">Button 1</div>
        <Button1 
          buttonValue={this.state.buttonValue}
          buttonClass={this.state.buttonClass}/>
      </div>
    );
  }
}
 
export default Button1Container;