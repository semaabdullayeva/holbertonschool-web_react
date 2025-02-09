import notificationsReducer, {
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
  fetchNotifications,
} from '../notifications/notificationsSlice';
import { getLatestNotification } from '../../utils/utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('notificationsSlice', () => {
  const initialState = {
    notifications: [],
    displayDrawer: true,
  };

  const mockNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: 'Old notification' } },
  ];

  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should return the initial state by default', () => {
    expect(notificationsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should fetch notifications correctly', async () => {
    mock.onGet('/notifications.json').reply(200, mockNotifications);

    const expectedNotifications = mockNotifications.map(notification => {
      if (notification.id === 3) {
        return {
          ...notification,
          html: { __html: getLatestNotification() },
        };
      }
      return notification;
    });

    const dispatch = jest.fn();
    const thunk = fetchNotifications();
    await thunk(dispatch);

    const [_, fulfilledAction] = dispatch.mock.calls;
    expect(fulfilledAction[0].type).toBe('notifications/fetchNotifications/fulfilled');
    expect(fulfilledAction[0].payload).toEqual(expectedNotifications);
  });

  it('should handle markNotificationAsRead', () => {
    const stateWithNotifications = {
      ...initialState,
      notifications: mockNotifications,
    };

    const consoleSpy = jest.spyOn(console, 'log');
    const newState = notificationsReducer(
      stateWithNotifications,
      markNotificationAsRead(1)
    );

    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    expect(newState.notifications).toHaveLength(2);
    expect(newState.notifications.find(n => n.id === 1)).toBeUndefined();
    consoleSpy.mockRestore();
  });

  it('should handle showDrawer', () => {
    const stateWithHiddenDrawer = {
      ...initialState,
      displayDrawer: false,
    };

    const newState = notificationsReducer(stateWithHiddenDrawer, showDrawer());
    expect(newState.displayDrawer).toBe(true);
  });

  it('should handle hideDrawer', () => {
    const newState = notificationsReducer(initialState, hideDrawer());
    expect(newState.displayDrawer).toBe(false);
  });
});