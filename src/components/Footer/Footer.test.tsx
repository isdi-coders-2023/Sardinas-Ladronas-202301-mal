import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Given a footer component', () => {
  test('When is rendered, then it should show a logo, a paragraph and 3 links', () => {
    render(<Footer />);
    const imgElement = screen.getByAltText('Appetite logo');
    const paragraphElement = screen.getByText(
      /When you open you mind to learning/
    );
    const linkElement = screen.getAllByRole('link');

    expect(imgElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
    expect(linkElement.length).toEqual(3);
  });
});
