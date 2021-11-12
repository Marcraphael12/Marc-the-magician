/* eslint-disable no-unused-vars */
import renderer from 'react-test-renderer';
import {
  render,
} from '@testing-library/react';
import Quote from './Quote';

it('Quote rendering test', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

render(<Quote />);
