import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

const notifications = [
  { id: 1, value: 'New message', type: 'default' },
  { id: 2, value: 'New alert', type: 'urgent' },
  { id: 3, value: 'New task', type: 'default' },
];


describe('Notifications component tests', () => {
  test('renders notifications title', () => {
    render(<Notifications notifications={notifications} displayDrawer={true}/>);
    const titleElement = screen.getByText(/Here is the list of notifications/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications notifications={notifications} displayDrawer={true}/>);
    const buttonElement = screen.getByRole('button', { name: /close/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders three notification items', () => {
    render(<Notifications notifications={notifications} displayDrawer={true}/>);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  test('logs message when close button is clicked', () => {
    console.log = jest.fn();
    render(<Notifications notifications={notifications} displayDrawer={true}/>);
    const buttonElement = screen.getByRole('button', { name: /close/i });
    fireEvent.click(buttonElement);
    expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
  });
});
