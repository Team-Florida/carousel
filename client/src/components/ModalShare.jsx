import React from 'react';
import styled from 'styled-components';
import ModalShareComponent from './ModalShareComponent.jsx';

const socialData = [{ name: 'Facebook', icon_url: 'facebook.png' }, { name: 'Twitter', icon_url: 'twitter.png' }, { name: 'Messenger', icon_url: 'messenger.png' }, { name: 'Email', icon_url: 'email.png' }, { name: 'Whatsapp', icon_url: 'whatsapp.png' }]

const ShareModalBox = styled.div`
  min-width: 376px;
  text-align: left;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 10px;
`;

const CloseButton = styled.div`
  display: inline-block;
  height: 24px;
  width: 24px;
  background-image: url("./Images/badge-images/close.png");
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 24px;
  cursor: pointer;
`;

const Heading = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #484848;
  padding-bottom: 24px;
  line-height: 30px;
  border-bottom: 1px solid #ebebeb;
`;

const ModalShare = props => {
  return (
    <ShareModalBox>
      <CloseButton onClick={props.closeHandle}></CloseButton>
      <Heading>Share</Heading>
      {socialData.map((platform, index) => {
        return (
          <ModalShareComponent
            key={index}
            platform={platform}
          ></ModalShareComponent>);
      })}

    </ShareModalBox>
  );
}

export default ModalShare;