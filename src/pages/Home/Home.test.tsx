import { render } from '@testing-library/react';
import Home from './Home';

test('render page', () => {
  render(<Home />);
  expect(true).toBe(true);
});
