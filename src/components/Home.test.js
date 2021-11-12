/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
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
