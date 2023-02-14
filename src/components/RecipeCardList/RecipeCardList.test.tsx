import { render, screen } from '@testing-library/react';
import { provisionalData } from '../../data';
import RecipeCardList from './RecipeCardList';

describe('Given a recipe card component', () => {
  test('When cardList is rendered, it should show as much cards than data array lenght', () => {
    render(<RecipeCardList recipeList={provisionalData} />);

    const imgElement = screen.getAllByAltText('recipe img');
    const titleElement = screen.getAllByRole('heading');
    expect(imgElement.length).toBe(provisionalData.length);
    expect(titleElement.length).toBe(provisionalData.length);
  });
});
