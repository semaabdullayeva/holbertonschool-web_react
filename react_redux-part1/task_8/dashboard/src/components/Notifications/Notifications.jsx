import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import NotificationItem from "./NotificationItem";
import closeIcon from "../assets/close-button.png";
import { StyleSheet, css } from "aphrodite";
import { 
  markNotificationAsRead, 
  showDrawer, 
  hideDrawer 
} from "../../features/notifications/notificationsSlice";

const Notifications = () => {
  const dispatch = useDispatch();
  const { notifications, displayDrawer } = useSelector(state => state.notifications);

  const handleDisplayDrawer = () => {
    dispatch(showDrawer());
  };

  const handleHideDrawer = () => {
    dispatch(hideDrawer());
  };

  const handleMarkAsRead = (id) => {
    dispatch(markNotificationAsRead(id));
    console.log(`Notification ${id} has been marked as read`);
  };

  return (
    <>
      <div className={css(styles.menuItem)} id="menuItem">
        <p onClick={handleDisplayDrawer} className={css(styles.menuItemPShow)}>
          Your notifications
        </p>
      </div>
      {displayDrawer && (
        <div className={css(styles.notifications)} id="Notifications">
          <button
            style={{
              background: "transparent",
              border: "none",
              position: "absolute",
              right: 20,
            }}
            onClick={handleHideDrawer}
            aria-label="close"
          >
            <img
              src={closeIcon}
              alt="close-icon"
              className={css(styles.notificationsButtonImage)}
            />
          </button>
          <p className={css(styles.notificationsP)}>
            Here is the list of notifications
          </p>
          <ul className={css(styles.notificationsUL)}>
            {notifications.length === 0 ? (
              <NotificationItem
                id={0}
                type="default"
                value="No new notification for now"
                markAsRead={handleMarkAsRead}
              />
            ) : (
              notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={handleMarkAsRead}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
};

// Keep existing styles...
const styles = StyleSheet.create({
  // ...existing styles...
});

export default memo(Notifications);