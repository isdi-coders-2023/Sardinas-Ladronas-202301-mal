import DetailReagents from './DetailReagents';
import { render, screen } from '@testing-library/react';
import { meal } from '../../mocks/mealMock';

describe('Given a recipe card component', () => {
  test('When card is rendered, it should show ingredients and measures', async () => {
    render(<DetailReagents recipe={meal.meals} />);
    const reagentsElements = screen.queryAllByRole('div');
    await (async () => expect((await reagentsElements).length).toEqual(11));
  });
});
