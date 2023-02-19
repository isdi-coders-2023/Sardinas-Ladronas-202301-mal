import { render, screen } from '@testing-library/react';
import { meal } from '../../mocks/mealMock';
import RecipeCardList from './RecipeCardList';
import { MemoryRouter } from 'react-router-dom';

describe('Given a recipe card component', () => {
  test('When cardList is rendered, it should show as much cards than data array lenght', () => {
    render(
      <MemoryRouter>
        <RecipeCardList recipeList={meal.meals} />
      </MemoryRouter>
    );

    const imgElement = screen.getAllByAltText('recipe img');
    const titleElement = screen.getAllByRole('heading');
    expect(imgElement.length).toBe(meal.meals.length);
    expect(titleElement.length).toBe(meal.meals.length);
  });
});
