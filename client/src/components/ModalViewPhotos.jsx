import React from 'react';

import styled from 'styled-components';
import ImageMovement from './ImageMovement.jsx';

const ShareModalBox = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #ffffff;
  padding: 10px 0px;
  border-radius: 10px;
  position: relative;
`;

const CrossButton = styled.div`
  float: right;
  margin: 36px;
  height: 36px;
  width: 36px;
  background-image: url("./Images/badge-images/close.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

const ModalViewPhotos = props => {
  return (
    <ShareModalBox>
      <CrossButton onClick={props.closeHandle}></CrossButton>
      <ImageMovement album={props.modalData} imageClicked={props.imageClicked}></ImageMovement>
    </ShareModalBox>
  );
}

export default ModalViewPhotos;