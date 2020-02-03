import React from 'react';

import styled from 'styled-components';
import ImageMovement from './ImageMovement.jsx';
import CloseButton from './CloseButton.jsx';

const ImageModalBox = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #ffffff;
  padding: 10px 0px;
  border-radius: 10px;
  position: relative;
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 999;
`;

const ModalViewPhotos = props => {
  return (
    <ImageModalBox>
      <CloseButtonContainer>
        <CloseButton closeHandle={props.closeHandle} buttonSize="24"></CloseButton>
      </CloseButtonContainer>
      <ImageMovement album={props.modalData} imageClicked={props.imageClicked}></ImageMovement>
    </ImageModalBox>
  );
}

export default ModalViewPhotos;