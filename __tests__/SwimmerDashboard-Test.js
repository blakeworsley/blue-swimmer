import 'react-native';
import React from 'react';
import SwimmerDashboard from '../app/components/SwimmerDashboard';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <SwimmerDashboard />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a form on home page', () => {

})
