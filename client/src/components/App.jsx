import React, { Component } from 'react';
import appCss from '../../dist/carouselStyles.module.css';
import ImageBox from './ImageBox.jsx';
import Badge from './Badge.jsx';
import Modal from './Modal.jsx';

const imagesCollection = ['./Images/1.jpg', './Images/2.jpg', './Images/3.jpg', './Images/4.jpg', './Images/5.jpg', './Images/6.jpg', './Images/7.jpg', './Images/8.jpg', './Images/9.jpg', './Images/10.jpg', './Images/11.jpg']


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: imagesCollection,  // all images of the property 
      imgBoxesStatus: {        // status of each of the five images Inactive/Active/Blur
        one: "Inactive",
        two: "Inactive",
        three: "Inactive",
        four: "Inactive",
        five: "Inactive"
      },
      showingModal: "Inactive"  // Currently showing Modal, When Inactive no modal is shown
    };

    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.modalActivate = this.modalActivate.bind(this);
    this.modalQuitHandler = this.modalQuitHandler.bind(this);
  }

  // When mouse is over the Image
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

  // When mouse is out of the Image
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

  // Activates the modal by assigning the name of modal to the state.showingModal
  modalActivate(modalName) {
    this.setState({
      showingModal: modalName
    });
  }

  // Deactivates the modal by assigning 'Inactive' to the state.showingModal
  modalQuitHandler() {
    this.setState({
      showingModal: 'Inactive'
    });
  }

  render() {
    return (
      <div>
        <div className={appCss.Container}>

          <ImageBox
            // First Image - Big - Left
            passData={{
              divClass: appCss.LeftBox,
              imgSrc: this.state.data[0],
              imgName: 'one',
              imgClass: appCss[this.state.imgBoxesStatus.one],
              mouseOverHandle: this.mouseOverHandler,
              mouseOutHandle: this.mouseOutHandler
            }}
          ></ImageBox>

          <div className={appCss.RightBox}>

            <div className={appCss.RightFirstBox}>
              <ImageBox
                // Second Image - Right Top Left
                passData={{
                  divClass: appCss.SmallImageBox + ' ' + appCss.LeftTop,
                  imgSrc: this.state.data[1],
                  imgName: 'two',
                  imgClass: appCss[this.state.imgBoxesStatus.two],
                  mouseOverHandle: this.mouseOverHandler,
                  mouseOutHandle: this.mouseOutHandler
                }}
              ></ImageBox>
              <ImageBox
                // Third Image - Right Bottom Left
                passData={{
                  divClass: appCss.SmallImageBox + ' ' + appCss.LeftBottom,
                  imgSrc: this.state.data[2],
                  imgName: 'three',
                  imgClass: appCss[this.state.imgBoxesStatus.three],
                  mouseOverHandle: this.mouseOverHandler,
                  mouseOutHandle: this.mouseOutHandler
                }}
              ></ImageBox>
            </div>

            <div className={appCss.RightSecondBox}>
              <ImageBox
                // Fourth Image - Right Top Right
                passData={{
                  divClass: appCss.SmallImageBox + ' ' + appCss.RightTop,
                  imgSrc: this.state.data[3],
                  imgName: 'four',
                  imgClass: appCss[this.state.imgBoxesStatus.four],
                  mouseOverHandle: this.mouseOverHandler,
                  mouseOutHandle: this.mouseOutHandler
                }}
              ></ImageBox>
              <ImageBox
                // Fifth Image - Right Bottom Right
                passData={{
                  divClass: appCss.SmallImageBox + ' ' + appCss.RightBottom,
                  imgSrc: this.state.data[4],
                  imgName: 'five',
                  imgClass: appCss[this.state.imgBoxesStatus.five],
                  mouseOverHandle: this.mouseOverHandler,
                  mouseOutHandle: this.mouseOutHandler
                }}
              ></ImageBox>
            </div>

          </div>

          <Badge
            // Share Badge 
            passData={{
              text: 'Share',
              posRight: 120,
              posTop: 20,
              imgSrc: 'export.png',
              modalName: 'ModalShare'
            }}
            clickHandle={this.modalActivate}
          ></Badge>

          <Badge
            // Save Badge
            passData={{
              text: "Save",
              posRight: 20,
              posTop: 20,
              imgSrc: 'heart.png',
              modalName: 'ModalSave'
            }}
            clickHandle={this.modalActivate}
          ></Badge>

          <Badge
            // View Photos Badge 
            passData={{
              text: "View Photos",
              posRight: 20,
              posTop: 240,
              modalName: 'ModalViewPhotos'
            }}
            clickHandle={this.modalActivate}
          ></Badge>

        </div>

        {
          this.state.showingModal !== "Inactive"
            ?
            <Modal modalName={this.state.showingModal} quitHandle={this.modalQuitHandler}></Modal>
            :
            null
        }

      </div>
    );
  }
}

export default App;