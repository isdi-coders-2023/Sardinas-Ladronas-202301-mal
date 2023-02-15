import { render } from '@testing-library/react';
import NotFound from './NotFound';

test('render page', () => {
  render(<NotFound />);
  expect(true).toBe(true);
});
