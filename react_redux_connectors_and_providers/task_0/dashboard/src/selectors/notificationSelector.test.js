import { fromJS, Map } from "immutable";
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";

describe("notification selectors", () => {
  const state = fromJS({
    notifications: {
      1: {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available",
      },
      2: { id: 2, isRead: true, type: "urgent", value: "New resume available" },
      3: { id: 3, isRead: false, type: "urgent", value: "Urgent message" },
    },
    filter: "URGENT",
  });

  it("filterTypeSelected should return the filter type", () => {
    const result = filterTypeSelected(state);
    expect(result).toBe("URGENT");
  });

  it("getNotifications should return all notifications in a Map format", () => {
    const result = getNotifications(state);
    const expectedNotifications = Map({
      1: Map({
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available",
      }),
      2: Map({
        id: 2,
        isRead: true,
        type: "urgent",
        value: "New resume available",
      }),
      3: Map({ id: 3, isRead: false, type: "urgent", value: "Urgent message" }),
    });
    expect(result).toEqual(expectedNotifications);
  });

  it("getUnreadNotifications should return only unread notifications", () => {
    const result = getUnreadNotifications(state);
    const expectedUnreadNotifications = Map({
      1: Map({
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available",
      }),
      3: Map({ id: 3, isRead: false, type: "urgent", value: "Urgent message" }),
    });
    expect(result).toEqual(expectedUnreadNotifications);
  });
});
