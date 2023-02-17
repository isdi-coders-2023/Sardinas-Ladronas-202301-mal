import { render, screen } from '@testing-library/react';
import { meal } from '../../mocks/mealMock';
import DetailInstructions from './DetailInstructions';

describe('Given a recipe card component', () => {
  test('When card is rendered, it should show a recipe img', () => {
    render(<DetailInstructions recipe={meal.meals[0]} />);
    const instructionsElement = screen.getAllByRole('heading');
    const imgElements = screen.getAllByRole('img');

    expect(instructionsElement.length).toEqual(3);
    expect(imgElements.length).toEqual(2);
  });
});
