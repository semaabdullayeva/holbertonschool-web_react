import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

test('renders Notifications component', () => {
  render(<Notifications />);
  expect(screen.getByText(/Notifications/i)).toBeInTheDocument();
});