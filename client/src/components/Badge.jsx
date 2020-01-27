import React from 'react';
import appCss from '../../dist/styles.module.css';

const Badge = props => {

  return (
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
  );

}

export default Badge;