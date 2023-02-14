import { render, screen } from '@testing-library/react';
import RecipeCard from './RecipeCard';
import { provisionalData } from '../../data';

describe('Given a recipe card component', () => {
  test('When card is rendered, it should show a recipe img', () => {
    render(<RecipeCard recipe={provisionalData[0]} />);
    const iconImgElement = screen.getByAltText('heart icon');
    const imgElement = screen.getByAltText('recipe img');
    const titleElement = screen.getByRole('heading');

    expect(iconImgElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });
});
