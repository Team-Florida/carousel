import React from 'react';
import styled from 'styled-components';


const HeartSvgBox = styled.div`
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


const HeartSvg = props => {

  return (
    <HeartSvgBox onClick={props.closeHandle} buttonSize={props.buttonSize}>
      <svg viewBox="0 0 24 24" fillOpacity="0" strokeWidth="2.25" focusable="false" aria-label="Save this listing." role="img" strokeLinecap="round" strokeLinejoin="round">
        <path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6">
        </path>
      </svg>
    </HeartSvgBox>
  );

};

export default HeartSvg;
