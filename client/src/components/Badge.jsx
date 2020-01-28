import React from 'react';
import appCss from '../../dist/carouselStyles.module.css';

const Badge = props => {

  return (
    <div onClick={() => props.clickHandle(props.passData.modalName)}>
      <div
        className={appCss.badge}
        style={{
          top: props.passData.posTop + 'px',
          right: props.passData.posRight + 'px',
          backgroundImage: (props.passData.imgSrc) ? `url(./Images/badge-images/${props.passData.imgSrc})` : null,
          paddingLeft: (props.passData.imgSrc) ? '40px' : '10px'
        }}
      >
        {props.passData.text}
      </div>
    </div>
  );

}

// On Click pass back the modal name so that correct modal can be activated
// Absolute position top, right is passed as props
// Some Badge's will not have background Image so adjust backgroundImage and paddingLeft accordingly 

export default Badge;