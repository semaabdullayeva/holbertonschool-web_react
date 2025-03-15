import { render, screen } from '@testing-library/react';
import Login from '../Login';

test('renders Login page', () => {
  render(<Login />);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});