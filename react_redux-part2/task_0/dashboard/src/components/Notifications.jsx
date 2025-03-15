import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotifications } from '../../features/notifications/notificationsSlice';
import './Notifications.css';

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.notifications.items);
  const loading = useSelector(state => state.notifications.loading);
  const notificationsRef = useRef(null);

  React.useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  const handleToggleDrawer = () => {
    notificationsRef.current.classList.toggle('visible');
  };

  return (
    <div>
      <button onClick={handleToggleDrawer}>Toggle Notifications</button>
      {loading ? <p>Loading...</p> : (
        <div ref={notificationsRef} className="notifications">
          {notifications.map((notification) => (
            <div key={notification.id} className="notification-item">
              {notification.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;