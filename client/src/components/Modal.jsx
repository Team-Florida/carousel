import React from 'react';
// import modalCSS from '../../dist/modalStyles.module.css';
import modalCSS from '../styles/modalStyles.module.css';

import ModalIndex from './ModalIndex.jsx';



class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.modalCloseHandler = this.modalCloseHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.containerClickHandler = this.containerClickHandler.bind(this);
  }


  componentDidMount() {
    // Add event Listener that listens to keypress
    document.addEventListener('keydown', this.keyDownHandler);
  }

  // if 'Escape' key is pressed then close the modal
  keyDownHandler(event) {
    if (event.key === 'Escape') {
      this.modalCloseHandler();
    }
  }

  // When modal closes 
  modalCloseHandler() {
   
    // Remove event listener so that Escape button press does nothing after modal close
    document.removeEventListener('keydown', this.keyDownHandler);
    // this is passed from App (Main)
    this.props.quitHandle(this.props.modalName);
  }

  // When clicked outside of modal box then close the modal
  containerClickHandler(event) {
    if (event.target.getAttribute('name') === 'modalBox') {
      this.modalCloseHandler();
    }
  }

  render() {
 
    const ModaltoRender = ModalIndex[this.props.modalName];
 
    let modalDataToPass;
    let imageClicked;
    if(this.props.modalName === 'ModalViewPhotos') {
      modalDataToPass = this.props.modalData;
      imageClicked = this.props.imageClicked;
    }
    
    return (
      <div className={modalCSS.modalContainer} name="modalContainer">
        <div className={modalCSS.modalBox} name="modalBox" onClick={this.containerClickHandler}>
          <ModaltoRender 
            closeHandle={this.modalCloseHandler} 
            modalData={modalDataToPass}
            imageClicked={imageClicked}
          ></ModaltoRender>
        </div>
      </div>
    );
  }


}

export default Modal;