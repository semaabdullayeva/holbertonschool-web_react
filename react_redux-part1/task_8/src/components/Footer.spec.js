import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component', () => {
  render(<Footer />);
  expect(screen.getByText(/Footer/i)).toBeInTheDocument();
});