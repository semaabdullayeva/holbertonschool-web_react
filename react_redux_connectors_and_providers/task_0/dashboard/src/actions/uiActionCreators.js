import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";
import { bindActionCreators } from "redux";

export function login(email, password) {
  return {
    type: LOGIN,
    payload: { user: { email, password } },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
}

export function loginSuccess(userData) {
  return {
    type: LOGIN_SUCCESS,
    payload: userData,
  };
}

export const loginRequest = (email, password) => async (dispatch) => {
  dispatch(login(email, password)); // Start login attempt

  try {
    const response = await fetch("/login-success.json", {
      // Simulated API call
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    response.ok
      ? dispatch(loginSuccess(data))
      : dispatch(loginFailure("Login failed"));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const boundLogin = (email, password) => (dispatch) =>
  bindActionCreators(login, dispatch)({ email, password });

export const boundLogout = () => (dispatch) =>
  bindActionCreators(logout, dispatch)();

export const boundDisplayNotificationDrawer = () => (dispatch) =>
  bindActionCreators(displayNotificationDrawer, dispatch)();

export const boundHideNotificationDrawer = () => (dispatch) =>
  bindActionCreators(hideNotificationDrawer, dispatch)();
