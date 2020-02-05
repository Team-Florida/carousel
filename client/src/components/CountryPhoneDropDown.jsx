import React from 'react';
import data from '../data/data.js';
import styled from 'styled-components';

const DropDown = styled.select`
  width: 100%;
  padding-left: 12px;
  padding-right: 36px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  border-style: none;
  outline: none;
  margin: 0px !important;
  -webkit-appearance: none !important;  // no inherit allow
`;

const LabelForInput = styled.div`
  display: block;
  color: #717171;
  font-size: 12px;
  line-height: 20px;
  text-align: left;
  padding-left: 10px;
`;

const Arrow = styled.div`

-webkit-box-pack: center !important;
    -webkit-box-align: center !important;
    position: absolute !important;
    right: 0px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    height: 100% !important;
    max-width: 50% !important;
    min-width: 36px !important;
    padding-right: 12px !important;
    pointer-events: none !important;
    color: rgb(34, 34, 34) !important;

svg {
  display: block; 
  fill: none; 
  height: 16px; 
  width: 16px; 
  stroke: currentcolor; 
  stroke-width: 4;
  }
`;

class CountryPhoneDropDown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      countryList: data.countryCode
    }

    this.dropDownElementMaker = this.dropDownElementMaker.bind(this);

  }

  dropDownElementMaker() {
    let dropDownElements = this.state.countryList.map( (country, index) => {
 
      let currentKey = Object.keys(country)[0];
      return(
        <option value={currentKey} key={index}>
          {currentKey + ' (' + country[currentKey] + ')'}
        </option>
      );
    });

    return dropDownElements;
  }

  render() {
    
    return(

        <div>
          <LabelForInput htmlFor="country">Country/Region</LabelForInput>
          <div style={{display: 'flex', position: 'relative'}}>
          <DropDown id="country">
            {this.dropDownElementMaker()}
          </DropDown>
          <Arrow>
          <svg aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>

          </Arrow>
          </div>
        </div>
    );
  }

}

export default CountryPhoneDropDown;

