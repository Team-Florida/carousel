import React from 'react';

import { TestScheduler } from 'jest';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

import App from '../components/App.jsx';

const setup = (props={}, state=null) => {
  return shallow(<App {...props} />)
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'main-app');
  expect(appComponent.length).toBe(1);
});

test('renders all Image Boxes', () => {
  const wrapper = setup();
  var appComponent = wrapper.find("[data-test='leftBig-image-box']");
  expect(appComponent.length).toBe(1);
  var appComponent = wrapper.find("[data-test='leftTop-image-box']");
  expect(appComponent.length).toBe(1);
  var appComponent = wrapper.find("[data-test='leftBottom-image-box']");
  expect(appComponent.length).toBe(1);
  var appComponent = wrapper.find("[data-test='rightTop-image-box']");
  expect(appComponent.length).toBe(1);
  var appComponent = wrapper.find("[data-test='rightBottom-image-box']");
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



