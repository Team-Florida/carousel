import React from 'react';
import styled from 'styled-components';


const CloseButtonBox = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: ${props => props.buttonSize}px; 
    width: ${props => props.buttonSize}px; 
    display: block; fill: 
    rgb(118, 118, 118);
  }
`;


const CloseButton = props => {
 
  return(
    <CloseButtonBox onClick={props.closeHandle} buttonSize={props.buttonSize}>
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
        <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22">
        </path>
      </svg>
    </CloseButtonBox>
  );

};

export default CloseButton;
