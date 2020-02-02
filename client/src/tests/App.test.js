import React from 'react';

import { TestScheduler } from 'jest';
import Enzyme, { shallow, render, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

import App from '../components/App.jsx';
import appCss from '../../dist/carouselStyles.module.css';

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) {
    wrapper.setState(state)
  }
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
  // const wrapper = setup();
  const wrapper = shallow(<App />);
  const appComponent = findByTestAttr(wrapper, 'main-app');
  expect(appComponent.length).toBe(1);
});



test('renders all Image Boxes', () => {
  const wrapper = setup();
  var appComponent = findByTestAttr(wrapper, 'leftBig-image-box');
  expect(appComponent.length).toBe(1);
  var appComponent = findByTestAttr(wrapper, 'leftTop-image-box');
  expect(appComponent.length).toBe(1);
  var appComponent = findByTestAttr(wrapper, 'leftBottom-image-box');
  expect(appComponent.length).toBe(1);
  var appComponent = findByTestAttr(wrapper, 'rightTop-image-box');
  expect(appComponent.length).toBe(1);
  var appComponent = findByTestAttr(wrapper, 'rightBottom-image-box');
  expect(appComponent.length).toBe(1);
});


test('Inital state of all imgBoxesStatus is "Inactive" ', () => {

  const wrapper = setup();
  var stateVal = wrapper.state('imgBoxesStatus');

  expect(Object.keys(stateVal).length).toBe(5);
  expect(stateVal.one).toBe('Inactive');
  expect(stateVal.two).toBe('Inactive');
  expect(stateVal.three).toBe('Inactive');
  expect(stateVal.four).toBe('Inactive');
  expect(stateVal.five).toBe('Inactive');

});


// test('Mouse over on first Image Div', () => {
//   const wrapper = setup();
//   var appComponent = findByTestAttr(wrapper,'addDiv');

//   var stateVal = wrapper.state('count');
//   console.log("First ", stateVal)

//   appComponent.simulate('mouseover');

//   stateVal = wrapper.state('count');
//   console.log("Second " , stateVal)

// });


test('modalActivate method changes the state', () => {
  // const wrapper = mount(<App />);
  
  const wrapper = setup();
  const instance = wrapper.instance();
  // console.log("Wrapper: ", wrapper.debug());
  
  instance.modalActivate("ModalShare");
  var stateVal = wrapper.state('showingModal');
  expect(stateVal).toBe("ModalShare");

  instance.modalActivate("ModalSave");
  var stateVal = wrapper.state('showingModal');
  expect(stateVal).toBe("ModalSave");
});

test('method mouseOverHandler changes the state', () => {

  // create a event
  const element = document.createElement('img');
  element.name= 'one';
  element.id=1;
  const event = {
    target: element
  };

  // Setup
  const wrapper = setup();
  const instance = wrapper.instance();

  // Test mouseOverHandler on element with name="one"
  instance.mouseOverHandler(event);
  var stateVal = wrapper.state('imgBoxesStatus');
  expect(stateVal.one).toBe('Active');

  // Test mouseOverHandler on element with name="five"
  element.name = 'five';
  instance.mouseOverHandler(event);
  var stateVal = wrapper.state('imgBoxesStatus');
  expect(stateVal.five).toBe('Active');

});

test('method mouseOverHandler changes the state', () => {

  // create a event
  const element = document.createElement('img');
  element.name= 'three';
  element.id=3;
  const event = {
    target: element
  };

  // Setup
  const wrapper = setup();
  const instance = wrapper.instance();

  // Test mouseOutHandler on element with name="three"
  // instance.mouseOverHandler(event);
  var appComponent = findByTestAttr(wrapper, 'leftBottom-image-box');
  expect(appComponent.prop('passData').imgClass).toBe('Inactive');

  instance.mouseOverHandler(event);
  var appComponent = findByTestAttr(wrapper, 'leftBottom-image-box');
  expect(appComponent.prop('passData').imgClass).toBe('Active');

});


