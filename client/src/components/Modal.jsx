import React from 'react';
import modalCSS from '../../dist/modalStyles.module.css';

import ModalIndex from './ModalIndex.jsx';



class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.modalCloseHandler = this.modalCloseHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.containerClickHandler = this.containerClickHandler.bind(this);
  }


  componentDidMount() {
    document.addEventListener('keydown', this.keyDownHandler);
  }

  keyDownHandler(event) {
    if (event.key === 'Escape') {
      this.modalCloseHandler();
    }
  }

  modalCloseHandler() {
    document.removeEventListener('keydown', this.keyDownHandler);
    this.props.quitHandle();
  }


  containerClickHandler(event) {
    if (event.target.getAttribute('name') === 'modalBox') {
      this.modalCloseHandler();
    }
  }

  render() {

    const ModaltoRender = ModalIndex[this.props.modalName];

    return (
      <div className={modalCSS.modalContainer} name="modalContainer">
        <div className={modalCSS.modalBox} name="modalBox" onClick={this.containerClickHandler}>
          <ModaltoRender closeHandle={this.modalCloseHandler}></ModaltoRender>
        </div>
      </div>
    );
  }


}

export default Modal;