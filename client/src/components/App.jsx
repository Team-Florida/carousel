import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imgBoxesStatus: {
        one: "inactive",
        two: "inactive",
        three: "inactive",
        four: "inactive",
        five: "inactive"
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
        tempObj[currentKey] = 'active';
      } else {
        tempObj[currentKey] = 'blur';
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
        <div className="container">

          <div className="leftBox">
            <img src="./Images/1.jpg" name="one" className={this.state.imgBoxesStatus.one} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}></img>
          </div>

          <div className="rightBox">
            <div className="rightFirstBox">
              <div className="smallImageBox leftTop">
                <img src="./Images/2.jpg" name="two" className={this.state.imgBoxesStatus.two} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}></img>
              </div>
              <div className="smallImageBox leftBottom">
                <img src="./Images/3.jpg" name="three" className={this.state.imgBoxesStatus.three} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}></img>
              </div>
            </div>
            <div className="rightSecondBox">
              <div className="smallImageBox rightTop">
                <img src="./Images/4.jpg" name="four" className={this.state.imgBoxesStatus.four} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}></img>
              </div>
              <div className="smallImageBox rightBottom">
                <img src="./Images/5.jpg" name="five" className={this.state.imgBoxesStatus.five} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}></img>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;