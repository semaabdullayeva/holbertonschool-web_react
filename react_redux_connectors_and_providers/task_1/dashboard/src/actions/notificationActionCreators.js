import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import { bindActionCreators } from "redux";

export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    payload: { index },
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    payload: { filter },
  };
}
export const boundMarkAsRead = (index) => (dispatch) =>
  bindActionCreators(markAsRead, dispatch)(index);

export const boundSetNotificationFilter = (filter) => (dispatch) =>
  bindActionCreators(setNotificationFilter, dispatch)(filter);
