import { render, screen } from '@testing-library/react';

import { meal } from '../../mocks/mealMock';
import RecipeHeader from './RecipeHeader';

describe('Given a recipe header component', () => {
  test('When card is rendered, it should show a recipe img with its name', () => {
    render(<RecipeHeader recipes={meal.meals} />);
    const imgElement = screen.getByAltText(meal.meals[0].strMeal);
    const categoryElements = screen.getByText(meal.meals[0].strMeal);

    expect(imgElement).toBeInTheDocument();
    expect(categoryElements).toBeInTheDocument();
  });
});
