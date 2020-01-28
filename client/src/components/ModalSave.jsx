import React from 'react';

// import modalCSS from '../../dist/modalStyles.module.css';

import styled from 'styled-components';

const ShareModalBox = styled.div`
  width: 500px;
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
      <Heading>Facebook</Heading>
      <hr />

    </ShareModalBox>
  );
}

export default ModalShare;