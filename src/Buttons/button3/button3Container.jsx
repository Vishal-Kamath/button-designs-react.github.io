import React, { Component } from 'react';
import Button3 from './button3';

class Button3Container extends Component {
  state = { 
    ContainerClass: 'button3Container',

    buttonValue: 'Click Me!',
    buttonClass: 'button3'
  }  

  render() { 
    return (
      <div className={`container ${this.state.ContainerClass}`}>
        <div className="cover"></div>
        <div className="body">Button 3</div>
        <Button3 
          buttonValue={this.state.buttonValue}
          buttonClass={this.state.buttonClass}/>
      </div>
    );
  }
}
 
export default Button3Container;