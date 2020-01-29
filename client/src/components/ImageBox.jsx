import React from 'react';

class ImageBox extends React.Component {

  constructor(props) {
    super(props)
  }

 

  render() {
    return (
      <div className={this.props.passData.divClass} data-test="main-image-box">
        <img
          src={this.props.passData.imgSrc}
          name={this.props.passData.imgName}
          className={this.props.passData.imgClass}
          onMouseOver={this.props.passData.mouseOverHandle}
          onMouseOut={this.props.passData.mouseOutHandle}
        ></img>
      </div>
    );
  }

}

// ImageBox is a div with image tag as child
// ImageBox className; Image src, name, className and mouse events are passed in as props

export default ImageBox;