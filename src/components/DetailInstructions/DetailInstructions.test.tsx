import { render, screen } from '@testing-library/react';
import { meal } from '../../mocks/mealMock';
import DetailInstructions from './DetailInstructions';

describe('Given a recipe card component', () => {
  test('When card is rendered, it should show instructions, category and area with images', () => {
    render(<DetailInstructions recipe={meal.meals} />);
    const instructionsElement = screen.getAllByRole('heading');
    const imgElements = screen.getAllByRole('img');

    expect(instructionsElement.length).toEqual(3);
    expect(imgElements.length).toEqual(2);
  });
});
