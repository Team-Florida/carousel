import React from 'react';
import movementCss from '../../dist/movementStyles.module.css';


class ImageMovement extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // data: imagesCollection,
      data: this.props.album,
      currentPosition: 0,
      translatePosition: 0,
      sliderWindowLeft: 36
    }

    this.imageBackHandler = this.imageBackHandler.bind(this);
    this.imageFowardHandler = this.imageFowardHandler.bind(this);
    this.thumbnailClickHandler = this.thumbnailClickHandler.bind(this);
    this.sliderHelper = this.sliderHelper.bind(this);
  }

  componentDidMount() {
    // Passed from App => Modal => ModalViewPhotos
    // minus one as array is zero indexed but pic position starts from one 
    this.sliderHelper(this.props.imageClicked - 1);
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

    let newTranslatePosition = newPosition - 1;
    let newSliderWindowLeft = 96;

    if (newPosition === 0) {
      newTranslatePosition = newTranslatePosition + 1;
      newSliderWindowLeft = 36;
    }

    if (newPosition === this.state.data.length - 1) {
      newTranslatePosition = newTranslatePosition - 1;
      newSliderWindowLeft = 156;
    }

    // New Values
    this.setState({
      currentPosition: newPosition,
      translatePosition: newTranslatePosition,
      sliderWindowLeft: newSliderWindowLeft
    }
      // , () => console.log(this.state.currentPosition, this.state.translatePosition )
    )
  }

  // Map over data array to make Images Element for slider 
  sliderImageElementMaker() {

    const smallImagesElement = this.state.data.map((picPath, index) => {
      let currentClass = ' ';
      if (index !== this.state.currentPosition) {
        currentClass = movementCss.LessOpaque;
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
              <img src="/Images/badge-images/less-than.png"></img>
            </button>
          </div>
          <div className={movementCss.MainImageDiv}>
            <div className={movementCss.MainImageBox}>
              <img src={this.state.data[this.state.currentPosition].path}></img>
            </div>
          </div>
          <div className={movementCss.FowardButton}>
            <button onClick={this.imageFowardHandler}>
              <img src="/Images/badge-images/greater-than.png"></img>
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

            <div
              className={movementCss.SliderWindow}
              style={{ left: `${this.state.sliderWindowLeft}px` }}>
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