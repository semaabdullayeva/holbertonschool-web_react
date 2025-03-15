import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotifications } from '../../features/notifications/notificationsSlice';

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.items);
  const loading = useSelector((state) => state.notifications.loading);

  React.useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>
              {notification.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;