import React from 'react';
import movementCss from '../../dist/movementStyles.module.css';


const imagesCollection = ['./Images/1.jpg', './Images/2.jpg', './Images/3.jpg', './Images/4.jpg', './Images/5.jpg', './Images/6.jpg', './Images/7.jpg', './Images/8.jpg', './Images/9.jpg', './Images/10.jpg', './Images/11.jpg']

class ImageMovement extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: imagesCollection,
      currentPosition: 0,
      translatePosition: 0,
      sliderWindowLeft: 64
    }

    this.imageBackHandler = this.imageBackHandler.bind(this);
    this.imageFowardHandler = this.imageFowardHandler.bind(this);
    this.sliderHelper = this.sliderHelper.bind(this);
  }

  // Handles event when back button is clicked
  imageBackHandler() {

    // Position - Index of Array in data
    let newPosition = this.state.currentPosition - 1;
    // When reached the beginning and back button is pressed go to end
    if (newPosition < 0) {
      newPosition = this.state.data.length - 1
    }

    // TranslatePosition - Movement of slider
    let newTranslatePosition;

    if(newPosition === this.state.data.length - 1) {
      // When reached the beginning and back button is pressed
      newTranslatePosition = -(this.state.data.length - 3)
    } else if (newPosition === 0 || newPosition === this.state.data.length - 2) {
      // For first and last position don't move slider, move the slider window
      newTranslatePosition = this.state.translatePosition;
    } else {
      newTranslatePosition = this.state.translatePosition + 1;
    }

    // Helper function to adjust slider window and setState of all values
    this.sliderHelper(newPosition, newTranslatePosition);

  }

  // Handles event when foward button is clicked
  imageFowardHandler() {

    // Position - Index of Array in data 
    let newPosition = this.state.currentPosition + 1;
    // When reach the end start from zero
    if (newPosition >= this.state.data.length) {
      newPosition = 0
    }

    // TranslatePosition - Movement of slider
    let newTranslatePosition;
    // For first and last position don't move slider, move the slider window
    if (newPosition === 1 || newPosition === this.state.data.length - 1) {
      newTranslatePosition = this.state.translatePosition;
    } else {
      newTranslatePosition = this.state.translatePosition - 1;
    }

    // Helper function to adjust slider window and setState of all values
    this.sliderHelper(newPosition, newTranslatePosition);

  }

  // Helper function used in imageFowardHandler and imageBackHandler event Handler
  sliderHelper(newPosition, newTranslatePosition) {

    // Reached at end , so start from beginning
    // -3 as for index starts from zero, 1st element and last element no change in translate Position 
    if (newTranslatePosition < -(this.state.data.length - 3)) {
      newTranslatePosition = 0;
    }

    // Slider - Window 
    let newSliderWindowLeft = this.state.sliderWindowLeft;

    // Start Position for Slider (Only for first Image)
    if (newPosition === 0) {
      newSliderWindowLeft = 64;
    }

    // Default Position for Slider (All Images except first and second)
    if (newPosition > 0) {
      newSliderWindowLeft = 160;
    }

    // End Position for Slider (Only for Last Image)
    if (newPosition === this.state.data.length - 1) {
      newSliderWindowLeft = 256;
    }

    // New Values
    this.setState({
      currentPosition: newPosition,
      translatePosition: newTranslatePosition,
      sliderWindowLeft: newSliderWindowLeft
    })
  }

  // Map over data array to make Images Element for slider 
  sliderImageElementMaker() {

    const smallImagesElement = this.state.data.map((picPath, index) => {
      let currentClass = movementCss.ThumbnailImage;
      if (index !== this.state.currentPosition) {
        currentClass = currentClass + ' ' + movementCss.LessOpaque;
      }

      return (
        <img
          src={picPath} key={index}
          className={currentClass}>
        </img>);
    });

    return smallImagesElement;
  }


  render() {
    
    return (
      <div>
        {/* Main Image Container */}
        <div className={movementCss.MainImageContainer}>
          <div className={movementCss.BackButton}>
          <button onClick={this.imageBackHandler} className={movementCss.btn}>Back</button>
          </div>
          <div className={movementCss.MainImageBox}>
            <img src={this.state.data[this.state.currentPosition]}></img>
          </div>
          <div className={movementCss.FowardButton}>
            <button onClick={this.imageFowardHandler}>Foward</button>
          </div>
        </div>

        {/* Image Slider Container */}
        <div className={movementCss.AsideContainer}>

          <div className={movementCss.SlideImageContainer}>
            <div className={movementCss.ImageSlider} style={{ transform: `translate(${this.state.translatePosition * 96}px)` }}>
              {this.sliderImageElementMaker()}
            </div>

            <div className={movementCss.SliderWindow} style={{ left: `${this.state.sliderWindowLeft}px` }}>
            </div>

          </div>

        </div>

      </div>
    );

  }

}

export default ImageMovement;