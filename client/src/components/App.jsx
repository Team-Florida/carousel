import React, { Component } from 'react';
import appCss from '../../dist/styles.module.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imgBoxesStatus: {
        one: "Inactive",
        two: "Inactive",
        three: "Inactive",
        four: "Inactive",
        five: "Inactive"
      }
    };

    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
  }

  mouseOverHandler(event) {

    let eventTargetName = event.target.getAttribute('name');

    let tempObj = {};

    // Image with mouseOver is active , rest all are blur
    for (let currentKey in this.state.imgBoxesStatus) {
      if (currentKey === eventTargetName) {
        tempObj[currentKey] = 'Active';
      } else {
        tempObj[currentKey] = 'Blur';
      }
    }

    this.setState({
      imgBoxesStatus: tempObj
    }
      // , () => console.log(this.state.imgBoxesStatus)
    );

  }

  mouseOutHandler() {

    let tempObj = {};

    // On mouseOut all images are inactive
    for (let currentKey in this.state.imgBoxesStatus) {
      tempObj[currentKey] = 'inactive';
    }

    this.setState({
      imgBoxesStatus: tempObj
    }
      // , () => console.log(this.state.imgBoxesStatus)
    );

  }

  render() {
    return (
      <div>
        <div className={appCss.Container}>

          <div className={appCss.LeftBox}>
            <img src="./Images/1.jpg" name="one" className={appCss[this.state.imgBoxesStatus.one]} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}></img>
          </div>

          <div className={appCss.RightBox}>
            <div className={appCss.RightFirstBox}>
              <div className={appCss.SmallImageBox + ' ' + appCss.LeftTop}>
                <img src="./Images/2.jpg" name="two" className={appCss[this.state.imgBoxesStatus.two]} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}></img>
              </div>
              <div className={appCss.SmallImageBox + ' ' + appCss.LeftBottom}>
                <img src="./Images/3.jpg" name="three" className={appCss[this.state.imgBoxesStatus.three]} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}></img>
              </div>
            </div>
            <div className={appCss.RightSecondBox}>
              <div className={appCss.SmallImageBox + ' ' + appCss.RightTop}>
                <img src="./Images/4.jpg" name="four" className={appCss[this.state.imgBoxesStatus.four]} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}></img>
              </div>
              <div className={appCss.SmallImageBox + ' ' + appCss.RightBottom}>
                <img src="./Images/5.jpg" name="five" className={appCss[this.state.imgBoxesStatus.five]} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}></img>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;