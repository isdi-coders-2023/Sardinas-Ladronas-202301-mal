import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

describe('Given a Pagination component', () => {
  test('When rendered, Then it should show an array of alphabetics letters which are also links', () => {
    render(<Pagination />);
    const arrayElementLinks = screen.getAllByRole('link');
    expect(arrayElementLinks.length).toEqual(27);
  });
});
