import React, { Component } from 'react';
import appCss from '../../dist/carouselStyles.module.css';
import ImageBox from './ImageBox.jsx';
import Badge from './Badge.jsx';
import Modal from './Modal.jsx';
import Axios from 'axios';

// const imagesCollection = ['./Images/1.jpg', './Images/2.jpg', './Images/3.jpg', './Images/4.jpg', './Images/5.jpg', './Images/6.jpg', './Images/7.jpg', './Images/8.jpg', './Images/9.jpg', './Images/10.jpg', './Images/11.jpg'];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {},  // all images of the property 
      imgBoxesStatus: {        // status of each of the five images Inactive/Active/Blur
        one: "Inactive",
        two: "Inactive",
        three: "Inactive",
        four: "Inactive",
        five: "Inactive"
      },
      showingModal: "Inactive",  // Currently showing Modal, When Inactive no modal is shown
      imageClicked: 1 //Default
    };

    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.modalActivate = this.modalActivate.bind(this);
    this.modalQuitHandler = this.modalQuitHandler.bind(this);
  }


  componentDidMount() {
    var comp = this;
    let property_id = Math.floor(Math.random() * 100);

    Axios.get(`/property:${property_id}`)
      .then(response => {
        comp.setState({
          data: response.data[0]
        }
          // , () => console.log(this.state.data)
        )
      })
      .catch((error) => console.log("Error fetching initial Data on componentDidMount"));
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
      tempObj[currentKey] = 'Inactive';
    }

    this.setState({
      imgBoxesStatus: tempObj
    }
      // , () => console.log(this.state.imgBoxesStatus)
    );

  }

  clickHandler() {

    this.setState({
      imageClicked: parseInt(event.target.id),
      showingModal: 'ModalViewPhotos'
    })

  }

  // Activates the modal by assigning the name of modal to the state.showingModal
  modalActivate(modalName) {
    this.setState({
      showingModal: modalName
    });
  }

  // Deactivates the modal by assigning 'Inactive' to the state.showingModal
  modalQuitHandler(whichModalClosed) {
    let resetImageClicked = this.setState.imageClicked;

    if (whichModalClosed === 'ModalViewPhotos') {
      resetImageClicked = 1;
    }
    this.setState({
      showingModal: 'Inactive',
      imageClicked: resetImageClicked
    });
  }

  render() {

    return (
      <div data-test="main-app">

        <div className={appCss.Container}>

          <ImageBox
            // First Image - Big - Left
            data-test="leftBig-image-box"
            passData={{
              divClass: appCss.LeftBox,
              imgSrc: (this.state.data.property_id) ? this.state.data.property_images[0].path : '',
              imgName: 'one',
              imgId: 1,
              imgClass: appCss[this.state.imgBoxesStatus.one],
              mouseOverHandle: this.mouseOverHandler,
              mouseOutHandle: this.mouseOutHandler,
              clickHandle: this.clickHandler
            }}
          ></ImageBox>

          <div className={appCss.RightBox}>

            <div className={appCss.RightFirstBox}>
              <ImageBox
                // Second Image - Right Top Left
                data-test="leftTop-image-box"
                passData={{
                  divClass: appCss.SmallImageBox + ' ' + appCss.LeftTop,
                  imgSrc: (this.state.data.property_id) ? this.state.data.property_images[1].path : '',
                  imgName: 'two',
                  imgId: 2,
                  imgClass: appCss[this.state.imgBoxesStatus.two],
                  mouseOverHandle: this.mouseOverHandler,
                  mouseOutHandle: this.mouseOutHandler,
                  clickHandle: this.clickHandler
                }}
              ></ImageBox>
              <ImageBox
                // Third Image - Left Bottom Left
                data-test="leftBottom-image-box"
                passData={{
                  divClass: appCss.SmallImageBox + ' ' + appCss.LeftBottom,
                  imgSrc: (this.state.data.property_id) ? this.state.data.property_images[2].path : '',
                  imgName: 'three',
                  imgId: 3,
                  imgClass: appCss[this.state.imgBoxesStatus.three],
                  mouseOverHandle: this.mouseOverHandler,
                  mouseOutHandle: this.mouseOutHandler,
                  clickHandle: this.clickHandler
                }}
              ></ImageBox>
            </div>

            <div className={appCss.RightSecondBox}>
              <ImageBox
                // Fourth Image - Right Top Right
                data-test="rightTop-image-box"
                passData={{
                  divClass: appCss.SmallImageBox + ' ' + appCss.RightTop,
                  imgSrc: (this.state.data.property_id) ? this.state.data.property_images[3].path : '',
                  imgName: 'four',
                  imgId: 4,
                  imgClass: appCss[this.state.imgBoxesStatus.four],
                  mouseOverHandle: this.mouseOverHandler,
                  mouseOutHandle: this.mouseOutHandler,
                  clickHandle: this.clickHandler
                }}
              ></ImageBox>
              <ImageBox
                // Fifth Image - Right Bottom Right
                data-test="rightBottom-image-box"
                passData={{
                  divClass: appCss.SmallImageBox + ' ' + appCss.RightBottom,
                  imgSrc: (this.state.data.property_id) ? this.state.data.property_images[4].path : '',
                  imgName: 'five',
                  imgId: 5,
                  imgClass: appCss[this.state.imgBoxesStatus.five],
                  mouseOverHandle: this.mouseOverHandler,
                  mouseOutHandle: this.mouseOutHandler,
                  clickHandle: this.clickHandler
                }}
              ></ImageBox>
            </div>

          </div>

          <Badge
            // Share Badge 
            data-test="badge-share"
            passData={{
              classAdd: 'ShareBadge',
              posRight: 120,
              posTop: 20,
              text: 'Share',
              imgSrc: 'export.png',
              modalName: 'ModalShare'
            }}
            clickHandle={this.modalActivate}
          ></Badge>

          <Badge
            // Save Badge
            passData={{
              classAdd: 'SaveBadge',
              posRight: 20,
              posTop: 20,
              text: "Save",
              imgSrc: 'heart.png',
              modalName: 'ModalSave'
            }}
            clickHandle={this.modalActivate}
          ></Badge>

          <Badge
            // View Photos Badge 
            passData={{
              classAdd: 'PhotoBadge',
              posRight: 20,
              posTop: 240,
              text: "View Photos",
              modalName: 'ModalViewPhotos'
            }}
            clickHandle={this.modalActivate}
          ></Badge>

        </div>

        {
          this.state.showingModal !== "Inactive"
            ?
            <Modal modalName={this.state.showingModal} quitHandle={this.modalQuitHandler} modalData={this.state.data.property_images} imageClicked={this.state.imageClicked}></Modal>
            :
            null
        }

      </div>
    );
  }
}

export default App;