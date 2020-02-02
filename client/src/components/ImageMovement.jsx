import React from 'react';
import movementCss from '../../dist/movementStyles.module.css';
import CloseButton from './CloseButton.jsx';


class ImageMovement extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.album,
      currentPosition: 0,
      translatePosition: 0,
      fixedPositions: 1
    }

    this.imageBackHandler = this.imageBackHandler.bind(this);
    this.imageFowardHandler = this.imageFowardHandler.bind(this);
    this.thumbnailClickHandler = this.thumbnailClickHandler.bind(this);
    this.sliderHelper = this.sliderHelper.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  

  componentDidMount() {
    if (window.innerWidth <= 1127) {
      this.setState({
        fixedPositions: 3
      })
    }
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    let newFixedPosition = 1;
    if (window.innerWidth <= 1127) {
      newFixedPosition = 3;
    }
    this.setState({
      fixedPositions: newFixedPosition
    }
    ,() => this.sliderHelper(this.state.currentPosition)
    )
  }



  // Handles event when back button is clicked
  imageBackHandler() {

    // Position - Index of Array in data
    let newPosition = this.state.currentPosition - 1;
    // When reached the beginning and back button is pressed go to end
    if (newPosition < 0) {
      newPosition = this.state.data.length - 1
    }

    // Helper function to adjust slider window and setState of all values
    this.sliderHelper(newPosition);

  }

  // Handles event when foward button is clicked
  imageFowardHandler() {

    // Position - Index of Array in data 
    let newPosition = this.state.currentPosition + 1;
    // When reach the end start from zero
    if (newPosition >= this.state.data.length) {
      newPosition = 0
    }

    // Helper function to adjust slider window and setState of all values
    this.sliderHelper(newPosition);

  }

  thumbnailClickHandler(event) {
    let newPosition = parseInt(event.target.id);

    // Helper function to adjust slider window and setState of all values
    this.sliderHelper(newPosition);
  }


  // Helper function used in imageFowardHandler and imageBackHandler event Handler
  sliderHelper(newPosition) {

    let newTranslatePosition = newPosition - this.state.fixedPositions;

    if (newPosition < this.state.fixedPositions) {
      newTranslatePosition = 0;
    }
   
    if (newPosition > this.state.data.length - this.state.fixedPositions) {
      newTranslatePosition = this.state.data.length - (this.state.fixedPositions * 2);
    }

    // New Values
    this.setState({
      currentPosition: newPosition,
      translatePosition: newTranslatePosition
    });
      
  }

  // Map over data array to make Images Element for slider 
  sliderImageElementMaker() {

    const smallImagesElement = this.state.data.map((picPath, index) => {
      let currentClass = ' ';
      if (index !== this.state.currentPosition) {
        currentClass = movementCss.LessOpaque;
      } else {
        currentClass  = movementCss.BorderFrame;
      }

      return (
        <div key={index} className={movementCss.ThumbnailImage}>
          <img
            src={picPath.path}
            id={index}
            className={currentClass}>
          </img>
        </div>
      );
    });

    return smallImagesElement;
  }

 
  render() {

    return (
      <div>
        {/* Main Image Container */}
        <div className={movementCss.MainImageContainer}>
          <div className={movementCss.BackButton}>
            <button onClick={this.imageBackHandler} className={movementCss.btn}>
              <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false">
                <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z">
                  </path>
              </svg>
            </button>
          </div>
          <div className={movementCss.MainImageDiv}>
            <div className={movementCss.MainImageBox}>
              <img src={this.state.data[this.state.currentPosition].path}></img>
            </div>
          </div>
          <div className={movementCss.FowardButton}>
            <button onClick={this.imageFowardHandler}>
            <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false">
              <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z">
              </path>
            </svg>
            </button>
          </div>
        </div>

        {/* Image Slider Container */}
        <div className={movementCss.AsideContainer}>

          <div className={movementCss.SlideImageContainer}>
            <div
              className={movementCss.ImageSlider}
              style={{ transform: `translate(${this.state.translatePosition * -60 + 30}px)` }}
              onClick={this.thumbnailClickHandler}
            >
              {this.sliderImageElementMaker()}
            </div>

          </div>

          <div className={movementCss.DescriptionBox}>
            <p>{this.state.currentPosition + 1}/{this.state.data.length} </p>
            <p>{this.state.data[this.state.currentPosition].description}</p>
          </div>

        </div>

      </div>
    );

  }

}

export default ImageMovement;