'use strict';

import React, { View } from 'react-native';
import Register from '../app/components/Register';
import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Register />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a form', () => {
  const wrapper = shallow(<Register></Register>);
  expect(wrapper.type()).to.equal(View);
})
