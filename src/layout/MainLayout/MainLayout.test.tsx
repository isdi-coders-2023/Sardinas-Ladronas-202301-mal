import { render } from '@testing-library/react';
import MainLayout from './MainLayout';

test('render page', () => {
  render(<MainLayout />);
  expect(true).toBe(true);
});
