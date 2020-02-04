import React from 'react';
import data from '../data/data.js';
import styled from 'styled-components';

const DropDown = styled.select`
  width: 100%;
  padding-left: 12px;
  padding-right: 36px;
  padding-top: 26px;
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
`;

const LabelForInput = styled.div`
  color: #717171;
  font-size: 12px;
  line-height: 20px;
  text-align: left;
  padding-left: 10px;
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
    // console.log(data.countryCode);
    return(

        <div>
          <LabelForInput htmlFor="country">Country/Region</LabelForInput>
          <DropDown id="country">
            {this.dropDownElementMaker()}
          </DropDown>
        </div>
    );
  }

}

export default CountryPhoneDropDown;

