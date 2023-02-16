import { render } from '@testing-library/react';
import Detail from './Detail';
test('render page', () => {
  render(<Detail />);
  expect(true).toBe(true);
});
