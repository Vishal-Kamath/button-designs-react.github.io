import React, { Component } from 'react';
import Button4 from './button4';

class Button4Container extends Component {
  state = { 
    ContainerClass: 'button4Container',

    buttonValue: 'Click Me!',
    buttonClass: 'button4',
  }  

  handleOnClick = async () => {
    const newPageGrid = document.getElementsByClassName('newPage-grid')[0];
    newPageGrid.style.zIndex=999;

    const newPageGridItems = document.getElementsByClassName('newPage-grid-item');
    
    this.handleDisplay(newPageGridItems);

    await new Promise(resolve => setTimeout(resolve, 2000));

    this.handleDisplay(newPageGridItems);

    await new Promise(resolve => setTimeout(resolve, 1500));

    newPageGrid.style.zIndex=-1;
  }

  handleDisplay = async (gridItems) => {
    gridItems[17].classList.toggle('display');

    await new Promise(resolve => setTimeout(resolve, 100));

    gridItems[16].classList.toggle('display');
    gridItems[18].classList.toggle('display');
    gridItems[12].classList.toggle('display');
    gridItems[22].classList.toggle('display');

    await new Promise(resolve => setTimeout(resolve, 100));

    gridItems[15].classList.toggle('display');
    gridItems[19].classList.toggle('display');

    gridItems[11].classList.toggle('display');
    gridItems[13].classList.toggle('display');
    gridItems[7].classList.toggle('display');

    gridItems[21].classList.toggle('display');
    gridItems[23].classList.toggle('display');

    await new Promise(resolve => setTimeout(resolve, 100));

    gridItems[10].classList.toggle('display');
    gridItems[14].classList.toggle('display');

    gridItems[6].classList.toggle('display');
    gridItems[8].classList.toggle('display');
    gridItems[2].classList.toggle('display');

    gridItems[20].classList.toggle('display');
    gridItems[24].classList.toggle('display');

    await new Promise(resolve => setTimeout(resolve, 100));

    gridItems[5].classList.toggle('display');
    gridItems[9].classList.toggle('display');

    gridItems[1].classList.toggle('display');
    gridItems[3].classList.toggle('display');

    await new Promise(resolve => setTimeout(resolve, 100));

    gridItems[0].classList.toggle('display');
    gridItems[4].classList.toggle('display');
  }

  render() { 
    return (
      <div className={`container ${this.state.ContainerClass}`}>
        <div className="grid">
          <div className="animation"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>

        <div className="newPage-grid">
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
          <div className="newPage-grid-item"></div>
        </div>

        <div className="body">Button 4</div>

        <Button4 
          buttonValue={this.state.buttonValue}
          buttonClass={this.state.buttonClass}
          buttonFunction={this.handleOnClick}/>

        
      </div>
    );
  }
}
 
export default Button4Container;