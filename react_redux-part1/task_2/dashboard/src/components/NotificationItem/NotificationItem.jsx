// src/Notifications/NotificationItem.jsx
import React, { memo } from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ id, type, html, value, markAsRead }) {

  const handleClick = () => {
    markAsRead(id);
  };

  return (
    <li
      data-notification-type={type}
      style={{ color: type === 'urgent' ? 'red' : 'blue' }}
      dangerouslySetInnerHTML={html ? html : undefined}
      onClick={handleClick}
    >
      {html ? null : value}
    </li>
  );
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  value: '',
  html: null,
};

export default memo(NotificationItem);
