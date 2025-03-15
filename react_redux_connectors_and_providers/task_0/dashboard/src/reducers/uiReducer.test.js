import uiReducer, { initialState } from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/uiActionTypes";

describe("uiReducer", () => {
  it("should return the initial state when no action is passed", () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it("should return the initial state when action SELECT_COURSE is passed", () => {
    expect(uiReducer(undefined, { type: "SELECT_COURSE" }).toJS()).toEqual(
      initialState.toJS()
    );
  });

  it("should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed", () => {
    const expectedState = initialState.set("isNotificationDrawerVisible", true);
    expect(
      uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER }).toJS()
    ).toEqual(expectedState.toJS());
  });
});
