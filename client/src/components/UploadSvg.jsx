import React from 'react';
import styled from 'styled-components';


const UploadSvgBox = styled.div`
  height: 15px;
  width: 15px;
  float: left;
  margin-right: 7px;

  svg {
    height: 15px; 
    width: 15px; 
    display: block; 
    overflow: visible;
    stroke: #484848;

    @media only screen and (max-width: 743px) {
      stroke: #ffffff;
    }

  }
`;


const UploadSvg = props => {

  return (
    <UploadSvgBox onClick={props.closeHandle} buttonSize={props.buttonSize}>
      <svg viewBox="0 0 24 24" fillOpacity="0" strokeWidth="2.25" focusable="false" aria-hidden="true" role="presentation" strokeLinecap="round" strokeLinejoin="round">
        <g fillRule="evenodd">
          <path d="m11.5 16v-15"></path>
          <path d="m7.5 4 4-3 4 3"></path>
          <path d="m5.4 9.5h-3.9v14h20v-14h-3.1"></path>
        </g>
      </svg>
    </UploadSvgBox>
  );

};

export default UploadSvg;
