import renderer from 'react-test-renderer';
import Home from './Home.js';

it('Home rendering test', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
