import React from 'react';
import appCss from '../../dist/carouselStyles.module.css';
const data = ['./Images/1.jpg', './Images/2.jpg', './Images/3.jpg', './Images/4.jpg', './Images/5.jpg', './Images/6.jpg', './Images/7.jpg', './Images/8.jpg', './Images/9.jpg', './Images/10.jpg', './Images/11.jpg']


import { TestScheduler } from 'jest';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

import App from '../components/App.jsx';
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

// const dummyFn = () => {
//   console.log('this is dumb');
// }



test('renders without error', () => {

  const wrapper = setup({
    passData: {
      divClass: appCss.LeftBox,
      imgSrc: data[0],
      imgName: 'one',
      imgClass: appCss["Inactive"],
      mouseOverHandle: App.mouseOverHandler,
      mouseOutHandle: App.mouseOutHandler
    }
  }, null);

  const appComponent = findByTestAttr(wrapper, 'main-image-box');
  expect(appComponent.length).toBe(1);
});


test('mouseover check' , () => {
  const wrapper = setup({
    passData: {
      divClass: appCss.LeftBox,
      imgSrc: data[0],
      imgName: 'one',
      imgClass: appCss["Inactive"],
      mouseOverHandle: App.mouseOverHandler,
      mouseOutHandle: App.mouseOutHandler
    }
  }, null);

  const appComponent = wrapper.find('img');
  
  // const FakeFun = jest.spyOn(ImageBox.prototype, "dummyFn");
  // appComponent.simulate('mouseover');
  // expect(FakeFun).toHaveBeenCalled();

});