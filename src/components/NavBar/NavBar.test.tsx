import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('Given a recipe Navigation Bar component', () => {
  test('When rendered, Then it should show the Navigation Bar', () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    const imageElement = screen.getByRole('img');
    const linkElementsList = screen.getAllByRole('link');
    expect(imageElement).toBeInTheDocument();
    expect(linkElementsList.length).toEqual(4);
  });
  test('When user click hamburguer menu, Then it should change the className', () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    const linkElement = screen.getByTestId('burger');
    userEvent.click(linkElement);
  });
});
