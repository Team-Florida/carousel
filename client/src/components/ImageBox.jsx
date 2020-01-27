import React from 'react';

class ImageBox extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.passData.divClass}>
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

export default ImageBox;