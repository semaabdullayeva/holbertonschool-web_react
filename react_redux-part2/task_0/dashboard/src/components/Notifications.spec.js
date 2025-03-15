import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Notifications from './Notifications';
import notificationsReducer from '../../features/notifications/notificationsSlice';

const store = createStore(notificationsReducer);

describe('Notifications Component', () => {
  it('renders and toggles notifications visibility', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    fireEvent.click(screen.getByText(/toggle notifications/i));
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });
});