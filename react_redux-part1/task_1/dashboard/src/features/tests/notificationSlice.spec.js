import notificationReducer, { addNotification, removeNotification } from '../notifications/notificationSlice';

describe('notificationSlice', () => {
  const initialState = { notifications: [] };

  it('should handle addNotification', () => {
    const notification = { id: 1, message: 'Test Notification' };
    const nextState = notificationReducer(initialState, addNotification(notification));
    expect(nextState.notifications).toContainEqual(notification);
  });

  it('should handle removeNotification', () => {
    const initialStateWithNotification = {
      notifications: [{ id: 1, message: 'Test Notification' }],
    };
    const nextState = notificationReducer(initialStateWithNotification, removeNotification(1));
    expect(nextState.notifications).not.toContainEqual({ id: 1, message: 'Test Notification' });
  });
});