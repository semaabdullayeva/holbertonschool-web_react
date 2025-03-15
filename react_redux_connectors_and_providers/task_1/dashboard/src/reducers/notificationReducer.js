import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import { Map, fromJS } from "immutable";
import { NotificationsNormalizer } from "../schema/notifications";

const initialState = Map({
  notifications: Map(),
  filter: "DEFAULT",
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalized = NotificationsNormalizer(action.data);
      return state.merge({
        notifications: fromJS(normalized.entities.notifications),
      });
    case MARK_AS_READ:
      return state.setIn(
        ["notifications", String(action.index), "isRead"],
        true
      );
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);
    default:
      return state;
  }
};

export default notificationReducer;
