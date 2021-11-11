import renderer from 'react-test-renderer';
import Quote from './Quote';

it('Quote rendering test', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
