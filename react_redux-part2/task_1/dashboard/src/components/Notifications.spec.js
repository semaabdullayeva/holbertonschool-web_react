import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Notifications from './Notifications';
import notificationsReducer from '../../features/notifications/notificationsSlice';

const store = createStore(notificationsReducer);

describe('Notifications Component', () => {
  it('renders notifications and displays loading state', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });
});