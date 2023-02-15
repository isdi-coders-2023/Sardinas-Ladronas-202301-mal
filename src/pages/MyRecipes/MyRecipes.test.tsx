import { render } from '@testing-library/react';
import MyRecipes from './MyRecipes';

test('render page', () => {
  render(<MyRecipes />);
  expect(true).toBe(true);
});
