import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  default: {
    color: "rgb(4, 4, 177)",
  },
  urgent: {
    color: "red",
  },
  notificationItem: {
    "@media (max-width: 900px)": {
      position: "relative",
      width: "100vw",
      left: "-4vw",
      borderBottom: "1px solid black",
      fontSize: "20px",
      padding: "5px 5px",
    },
  },
});

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    const handleClick = () => {
      markAsRead(id);
    };

    const listItemStyle = css(
      type === "urgent" ? styles.urgent : styles.default,
      styles.notificationItem
    );

    return (
      <li
        onClick={handleClick}
        data-notification-type={type}
        className={listItemStyle}
      >
        {html ? <span dangerouslySetInnerHTML={html} /> : value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  html: null,
  value: "",
};

export default NotificationItem;
