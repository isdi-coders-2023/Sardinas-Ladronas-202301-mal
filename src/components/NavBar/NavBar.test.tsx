import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

describe('Given a recipe Navigation Bar component', () => {
  test('When rendered, Then it should show the Navigation Bar', () => {
    render(<NavBar />);
    const imageElement = screen.getAllByRole('img');
    const linkElementsList = screen.getAllByRole('link');
    expect(imageElement.length).toEqual(2);
    expect(linkElementsList.length).toEqual(3);
  });
});
