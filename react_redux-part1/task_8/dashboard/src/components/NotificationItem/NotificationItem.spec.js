import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';  // Adjust path if necessary

describe('NotificationItem component', () => {
  
  test('should have color blue and data-notification-type set to "default" when type is "default"', () => {
    // Render NotificationItem with type 'default'
    render(<NotificationItem type="default" value="Test notification" />);

    // Select the li element
    const listItem = screen.getByRole('listitem');

    // Check if the li element has the correct color
    expect(listItem).toHaveStyle('color: blue');

    // Check if the data-notification-type attribute is set to "default"
    expect(listItem).toHaveAttribute('data-notification-type', 'default');
  });

  test('should have color red and data-notification-type set to "urgent" when type is "urgent"', () => {
    // Render NotificationItem with type 'urgent'
    render(<NotificationItem type="urgent" value="Test urgent notification" />);

    // Select the li element
    const listItem = screen.getByRole('listitem');

    // Check if the li element has the correct color
    expect(listItem).toHaveStyle('color: red');

    // Check if the data-notification-type attribute is set to "urgent"
    expect(listItem).toHaveAttribute('data-notification-type', 'urgent');
  });

});
