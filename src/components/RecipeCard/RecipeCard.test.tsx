import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { meal } from '../../mocks/mealMock';
import Card from './RecipeCard';

describe('Given a recipe card component', () => {
  test('When card is rendered, it should show a recipe img', () => {
    render(
      <MemoryRouter>
        <Card recipe={meal.meals[0]} />
      </MemoryRouter>
    );
    const imgElement = screen.getByAltText('recipe img');
    const titleElement = screen.getByRole('heading');
    const linkElement = screen.getByRole('link');
    expect(imgElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
