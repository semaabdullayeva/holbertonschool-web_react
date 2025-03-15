import uiReducer, { initialState } from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGIN_REQUEST,
} from "../actions/uiActionTypes";
import { Map } from "immutable";

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

  it("should change isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed", () => {
    const state = initialState.set("isNotificationDrawerVisible", true);
    const expectedState = initialState.set(
      "isNotificationDrawerVisible",
      false
    );
    expect(uiReducer(state, { type: HIDE_NOTIFICATION_DRAWER }).toJS()).toEqual(
      expectedState.toJS()
    );
  });

  it("should update user information on LOGIN_SUCCESS", () => {
    const user = { email: "user@example.com" };
    const expectedState = initialState.merge({
      isUserLoggedIn: true,
      user,
    });
    expect(
      uiReducer(initialState, { type: LOGIN_SUCCESS, user }).toJS()
    ).toEqual(expectedState.toJS());
  });

  it("should set isUserLoggedIn to false on LOGIN_FAILURE", () => {
    const expectedState = initialState.set("isUserLoggedIn", false);
    expect(uiReducer(initialState, { type: LOGIN_FAILURE }).toJS()).toEqual(
      expectedState.toJS()
    );
  });

  it("should reset user and set isUserLoggedIn to false on LOGOUT", () => {
    const state = initialState.merge({
      isUserLoggedIn: true,
      user: { email: "user@example.com" },
    });
    const expectedState = initialState;
    expect(uiReducer(state, { type: LOGOUT }).toJS()).toEqual(
      expectedState.toJS()
    );
  });

  it("should set isUserLoggedIn to false on LOGIN_REQUEST and reset user to null", () => {
    const state = initialState.merge({
      isUserLoggedIn: true,
      user: { email: "user@example.com" },
    });
    const expectedState = initialState.merge({
      isUserLoggedIn: false,
      user: null,
    });
    expect(uiReducer(state, { type: LOGIN_REQUEST }).toJS()).toEqual(
      expectedState.toJS()
    );
  });
});
