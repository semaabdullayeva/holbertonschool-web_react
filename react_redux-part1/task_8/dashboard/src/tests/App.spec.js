import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App component', () => {
  render(<App />);
  expect(screen.getByText(/Header/i)).toBeInTheDocument();
  expect(screen.getByText(/Footer/i)).toBeInTheDocument();
});