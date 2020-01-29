import React from 'react';

import { TestScheduler } from 'jest';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

import App from '../components/App.jsx';

const setup = (props={}, state=null) => {
  const wrapper =  shallow(<App {...props} />);
  if(state) {
    wrapper.setState(state)
  }
  return wrapper;
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
  var appComponent = findByTestAttr(wrapper,'leftBig-image-box');
  expect(appComponent.length).toBe(1);
  var appComponent = findByTestAttr(wrapper,'leftTop-image-box');
  expect(appComponent.length).toBe(1);
  var appComponent = findByTestAttr(wrapper,'leftBottom-image-box');
  expect(appComponent.length).toBe(1);
  var appComponent = findByTestAttr(wrapper,'rightTop-image-box');
  expect(appComponent.length).toBe(1);
  var appComponent = findByTestAttr(wrapper,'rightBottom-image-box');
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


test('Mouse over on first Image Div', () => {
  const wrapper = setup();
  var appComponent = findByTestAttr(wrapper,'addDiv');

  var stateVal = wrapper.state('count');
  console.log("First ", stateVal)
  
  appComponent.simulate('mouseover');

  stateVal = wrapper.state('count');
  console.log("Second " , stateVal)

});
