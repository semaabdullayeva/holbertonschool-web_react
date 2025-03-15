import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Map } from "immutable";
import rootReducer from "../reducers";

const initialState = Map({
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false,
});

const store = createStore(rootReducer, initialState);

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("should show the notification drawer when displayDrawer is true", () => {
    const updatedState = Map({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: true,
    });
    const updatedStore = createStore(rootReducer, updatedState);

    const wrapper = shallow(
      <Provider store={updatedStore}>
        <App />
      </Provider>
    );

    expect(wrapper.find("Notifications").prop("displayDrawer")).toBe(true);
  });

  it("should hide the notification drawer when displayDrawer is false", () => {
    const updatedState = Map({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: false,
    });
    const updatedStore = createStore(rootReducer, updatedState);

    const wrapper = shallow(
      <Provider store={updatedStore}>
        <App />
      </Provider>
    );

    expect(wrapper.find("Notifications").prop("displayDrawer")).toBe(false);
  });

  it("should render the Login component if user is not logged in", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find("Login").exists()).toBe(true);
  });

  it("should render the CourseList component if user is logged in", () => {
    const loggedInState = Map({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false,
    });
    const loggedInStore = createStore(rootReducer, loggedInState);

    const wrapper = shallow(
      <Provider store={loggedInStore}>
        <App />
      </Provider>
    );
    expect(wrapper.find("CourseList").exists()).toBe(true);
  });
});
