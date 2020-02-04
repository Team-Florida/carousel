import React from 'react';
import styled from 'styled-components';


const PlatformBox = styled.div`
  display: block;
  height: 76px;
  padding: 24px 0px;
  text-align: left;
  background-color: #ffffff;
  border-bottom: 1px solid #ebebeb;
`;

const InnerBox = styled.div`
  display: inline-block;
  height: 27px;
  padding: 2px;
  cursor: pointer;
`;

const PlatformIcon = styled.div`
  float: left;
  height: 18px;
  width: 18px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 8px;
`;

const PlatformName = styled.div`
  float: left;
  font-size: 16px;
  color: #008489;
  &:hover {
    text-decoration: underline;
  }
  
`;



const ModalShareComponent = props => {
  return (
    <PlatformBox>
      <InnerBox>
        <PlatformIcon style={{ backgroundImage: `url('https://hrcarousel.s3-us-west-1.amazonaws.com/social/${props.platform.icon_url}')` }}></PlatformIcon>
        <PlatformName>{props.platform.name}</PlatformName>
      </InnerBox>
    </PlatformBox>
  );
}

export default ModalShareComponent;