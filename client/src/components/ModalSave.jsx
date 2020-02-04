import React from 'react';

import CloseButton from './CloseButton.jsx';

import styled from 'styled-components';

const SaveModalBox = styled.div`
  width: 500px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
`;

const Head = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #ebebeb;
`;

const Heading = styled.div`
  font-weight: bold;
  display: inline-block;
  margin-top: 5px;
  font-size: 16px;
`;

const Body = styled.div`
  padding: 24px;
`;

const InputBoxes = styled.div`
  border-radius: 8px;
  border: 1px solid #b0b0b0;
`;

const CountryBox = styled.div`
  display: block;
  height: 56px;
`;

const PhoneBox = styled.div`
  display: block;
  height: 56px;
`;

const InputBoxesSubText = styled.div`
  font-size: 12px;
  color: #717171;
  margin-bottom: 16px;
`;

const ContinueButton = styled.div`
  height: 48px;
  width: 100%;
  line-height: 48px;
  margin-bottom: 16px;
  color: ${props => props.textColor};
  background-color: ${props => props.backgroundColor};
  background-image: url("https://hrcarousel.s3-us-west-1.amazonaws.com/social/${props => props.backgroundImage}");
  background-size: 25px 25px;
  background-position: 12px 10px; 
  background-repeat: no-repeat;

  border: 1px solid ${props => props.borderColor};
  border-radius: 8px;

  &:hover {
    border: 1px solid ${props => props.borderHoverColor};
  }
`;

const Footer = styled.div`

  span {
    font-size: 14px;
    color: #484848;
  }

  button {
    border: 0;
    cursor: pointer;
    font-size: 14px;
    color: #222222;
    text-decoration: underline;
  }
`;


const ModalSave = props => {
  return (
    <SaveModalBox>
      <Head>

        <CloseButton closeHandle={props.closeHandle} buttonSize="16"></CloseButton>

        <Heading>Sign up to book</Heading>
      </Head>
      <Body>
        <InputBoxes>
          <CountryBox></CountryBox>
          <PhoneBox></PhoneBox>
        </InputBoxes>
        <InputBoxesSubText>We’ll call or text you to confirm your number. Standard message and data rates apply.</InputBoxesSubText>
        <ContinueButton backgroundColor="#ff385c" textColor="#ffffff" borderColor="#ff385c" borderHoverColor="#ff385c" >
          Continue
        </ContinueButton>
        <ContinueButton backgroundColor="#ffffff" backgroundImage="facebook.png" textColor="#484848" borderColor="#b0b0b0" borderHoverColor="#222222" >
          Continue with Facebook
        </ContinueButton>
        <ContinueButton backgroundColor="#ffffff" backgroundImage="google.png" textColor="#484848" borderColor="#b0b0b0" borderHoverColor="#222222" >
          Continue with Google
        </ContinueButton>
        <Footer>
          <span>Already have a account?</span>
          <button>Log in</button>
        </Footer>
      </Body>

    </SaveModalBox>
  );
}

export default ModalSave;