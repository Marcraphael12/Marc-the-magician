import renderer from 'react-test-renderer';
import MakeOperations from './calculator';

it('calculator snapshot test', () => {
  const tree = renderer
    .create(<MakeOperations />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
