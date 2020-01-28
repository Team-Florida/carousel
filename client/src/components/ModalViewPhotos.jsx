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
`;

const Heading = styled.div`
  font-weight: bold;
  display: inline-block;
  margin-top: 5px;
`;

const CrossButton = styled.div`
  float: left;
  margin-left: 20px;
  text-align: left;
  font-size: 1.4em;
  font-weight: bold;
`;

const ModalShare = props => {
  return (
    <ShareModalBox>

      <CrossButton onClick={props.closeHandle}>X</CrossButton>
      <Heading>Sign up to book</Heading>
      <hr />
      <ImageMovement></ImageMovement>
    </ShareModalBox>
  );
}

export default ModalShare;