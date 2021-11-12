/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import {
  render,
} from '@testing-library/react';
import MakeOperations from './calculator';

it('calculator snapshot test', () => {
  const tree = renderer
    .create(<MakeOperations />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

render(<MakeOperations />);
