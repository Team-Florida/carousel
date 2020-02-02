import React from 'react';
import appCss from '../../dist/carouselStyles.module.css';
const data = ['./Images/1.jpg', './Images/2.jpg', './Images/3.jpg', './Images/4.jpg', './Images/5.jpg', './Images/6.jpg', './Images/7.jpg', './Images/8.jpg', './Images/9.jpg', './Images/10.jpg', './Images/11.jpg']


import { TestScheduler } from 'jest';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import jest from 'jest-mock';

Enzyme.configure({ adapter: new EnzymeAdapter() });


import ImageBox from '../components/ImageBox.jsx';

const setup = (props={}, state=null) => {
  const wrapper =  shallow(<ImageBox {...props} />);
  if(state) {
    wrapper.setState(state)
  }
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}


const dummyClick = jest.fn(() => console.log('clicked'));
const dummyMouseOver = jest.fn(() => console.log('mouseOut'));
const dummyMouseOut = jest.fn(() => console.log('mouseOver'));



test('renders without error', () => {

  const wrapper = setup({
    passData: {
      divClass: appCss.LeftBox,
      imgSrc: data[0],
      imgName: 'two',
      imgClass: appCss["Inactive"],
      mouseOverHandle: dummyMouseOver,
      mouseOutHandle: dummyMouseOut,
      clickHandle: dummyClick
    }
  }, null);

  const appComponent = findByTestAttr(wrapper, 'main-image-box');
  expect(appComponent.length).toBe(1);
});


test('mouseClick check' , () => {
  const wrapper = setup({
    passData: {
      divClass: appCss.LeftBox,
      imgSrc: data[0],
      imgName: 'one',
      imgClass: appCss["Inactive"],
      mouseOverHandle: dummyMouseOver,
      mouseOutHandle: dummyMouseOut,
      clickHandle: dummyClick
    }
  }, null);


  // const instance = wrapper.instance();

  const appComponent = findByTestAttr(wrapper, 'main-image-box');
    expect(dummyClick).toHaveBeenCalledTimes(0);
    appComponent.simulate('click'); 
    expect(dummyClick).toHaveBeenCalledTimes(1);
});

test('mouseOver check' , () => {
  const wrapper = setup({
    passData: {
      divClass: appCss.LeftBox,
      imgSrc: data[0],
      imgName: 'one',
      imgClass: appCss["Inactive"],
      mouseOverHandle: dummyMouseOver,
      mouseOutHandle: dummyMouseOut,
      clickHandle: dummyClick
    }
  }, null);


  // const instance = wrapper.instance();

  const appComponent = findByTestAttr(wrapper, 'main-image-box');
    expect(dummyMouseOver).toHaveBeenCalledTimes(0);
    appComponent.simulate('mouseover'); 
    expect(dummyMouseOver).toHaveBeenCalledTimes(1);
});