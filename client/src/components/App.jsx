import React, { Component } from 'react';
import appCss from '../../dist/styles.module.css';
import ImageBox from './ImageBox.jsx';
import Badge from './Badge.jsx';

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

          <ImageBox
            passData={{
              divClass: appCss.LeftBox,
              imgSrc: "./Images/1.jpg",
              imgName: "one",
              imgClass: appCss[this.state.imgBoxesStatus.one],
              mouseOverHandle: this.mouseOverHandler,
              mouseOutHandle: this.mouseOutHandler
            }}
          ></ImageBox>

          <div className={appCss.RightBox}>

            <div className={appCss.RightFirstBox}>
              <ImageBox
                passData={{
                  divClass: appCss.SmallImageBox + ' ' + appCss.LeftTop,
                  imgSrc: "./Images/2.jpg",
                  imgName: "two",
                  imgClass: appCss[this.state.imgBoxesStatus.two],
                  mouseOverHandle: this.mouseOverHandler,
                  mouseOutHandle: this.mouseOutHandler
                }}
              ></ImageBox>
              <ImageBox
                passData={{
                  divClass: appCss.SmallImageBox + ' ' + appCss.LeftBottom,
                  imgSrc: "./Images/3.jpg",
                  imgName: "three",
                  imgClass: appCss[this.state.imgBoxesStatus.three],
                  mouseOverHandle: this.mouseOverHandler,
                  mouseOutHandle: this.mouseOutHandler
                }}
              ></ImageBox>
            </div>

            <div className={appCss.RightSecondBox}>
              <ImageBox
                passData={{
                  divClass: appCss.SmallImageBox + ' ' + appCss.RightTop,
                  imgSrc: "./Images/4.jpg",
                  imgName: "four",
                  imgClass: appCss[this.state.imgBoxesStatus.four],
                  mouseOverHandle: this.mouseOverHandler,
                  mouseOutHandle: this.mouseOutHandler
                }}
              ></ImageBox>
              <ImageBox
                passData={{
                  divClass: appCss.SmallImageBox + ' ' + appCss.RightBottom,
                  imgSrc: './Images/5.jpg',
                  imgName: 'five',
                  imgClass: appCss[this.state.imgBoxesStatus.five],
                  mouseOverHandle: this.mouseOverHandler,
                  mouseOutHandle: this.mouseOutHandler
                }}
              ></ImageBox>
            </div>

          </div>

          <Badge
            passData={{
              text: 'Share',
              posRight: 120,
              posTop: 20,
              imgSrc: 'export.png'
            }}
          ></Badge>

          <Badge
            passData={{
              text: "Save",
              posRight: 20,
              posTop: 20,
              imgSrc: 'heart.png'
            }}
          ></Badge>

          <Badge
            passData={{
              text: "View Photos",
              posRight: 20,
              posTop: 240
            }}
          ></Badge>
          
        </div>

      </div>
    );
  }
}

export default App;