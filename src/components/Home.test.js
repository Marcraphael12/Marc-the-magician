/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import {
  render,
} from '@testing-library/react';
import Home from './Home';

it('Home rendering test', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

render(<Home/>);
