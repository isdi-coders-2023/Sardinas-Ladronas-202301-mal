import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyRecipes from './MyRecipes';

test('render page', () => {
  render(<MyRecipes />, { wrapper: MemoryRouter });
  expect(true).toBe(true);
});
