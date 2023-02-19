import { render, screen } from '@testing-library/react';
import DetailHeader from './DetailHeader';
import { meal } from '../../mocks/mealMock';

describe('Given a recipe card component', () => {
  test('When card is rendered, it should show a recipe img', () => {
    render(<DetailHeader recipe={meal.meals[0]} />);
    const imgElement = screen.getByAltText('recipe img');
    const titleElement = screen.getByRole('heading');

    expect(imgElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });
});
