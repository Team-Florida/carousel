import React from 'react';
// import appCss from '../../dist/carouselStyles.module.css';
import appCss from '../styles/carouselStyles.module.css';
import HeartSvg from './HeartSvg.jsx';
import UploadSvg from './UploadSvg.jsx';

class Badge extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        posRight: this.props.passData.posRight,
        posTop: this.props.passData.posTop
    }

    this.handleResize = this.handleResize.bind(this);
  }



  componentDidMount() {
    if(this.props.passData.classAdd === 'ShareBadge') {
      window.addEventListener("resize", this.handleResize);
    }
  }

  componentWillUnmount() {
    if(this.props.passData.classAdd === 'ShareBadge') {
      window.removeEventListener("resize", this.handleResize);
    }
  }

  handleResize() {
      let newPosRight = this.props.passData.posRight; 
      if (window.innerWidth <= 743) {
        newPosRight = 60;
      }
      this.setState({
        posRight: newPosRight
      })
    }
  
  render() {
    return (

      <div onClick={() => this.props.clickHandle(this.props.passData.modalName)}>
        <div
          className={appCss.badge + ' ' + appCss[this.props.passData.classAdd]}
          style={{
            top: `${this.state.posTop}px`,
            right: `${this.state.posRight}px`

          }}
        >
          {
            (this.props.passData.modalName === 'ModalSave')
              ?
              <HeartSvg></HeartSvg>
              :
              (this.props.passData.modalName === 'ModalShare')
                ?
                <UploadSvg></UploadSvg>
                :
                null
          }


          <span className={appCss.BadgeText}>{this.props.passData.text}</span>

        </div>
      </div>
    );

  }


}


// On Click pass back the modal name so that correct modal can be activated
// Absolute position top, right is passed as props
// Some Badge's will not have background Image so adjust backgroundImage and paddingLeft accordingly 

export default Badge;