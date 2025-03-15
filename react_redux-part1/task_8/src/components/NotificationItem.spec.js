import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

test('renders Notification Item', () => {
  render(<NotificationItem notification={{ type: 'default', value: 'New Notification' }} />);
  expect(screen.getByText(/New Notification/i)).toBeInTheDocument();
});