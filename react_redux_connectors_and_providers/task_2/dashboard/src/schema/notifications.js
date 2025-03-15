import * as notifications from "../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalized = normalize(notifications.default, [notification]);

export function getAllNotificationsByUser(userId) {
  const list = [];

  for (const notificationId of normalized.result) {
    const notification = normalized.entities.notifications[notificationId];
    if (notification.author === userId) {
      list.push(normalized.entities.messages[notification.context]);
    }
  }
  return list;
}

export function NotificationsNormalizer(data) {
  return normalize(data, [notification]);
}

export { normalized };
