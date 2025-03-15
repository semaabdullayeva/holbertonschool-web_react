import { shallow } from "enzyme";
import React from "react";
import App from "./App";
import { mapStateToProps } from "./App";
import { fromJS } from "immutable";
import { StyleSheetTestUtils } from "aphrodite";

describe("<App />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it("should contain the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it("should contain the Login component by default (when user is not logged in)", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it("should contain the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it("CourseList is not displayed when the user is not logged in (default state)", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });

  it("should display CourseList and hide Login when isLoggedIn state is true", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { isLoggedIn: true } });
    expect(wrapper.find("Login")).toHaveLength(0);
    expect(wrapper.find("CourseList")).toHaveLength(1);
  });

  it("when the keys control and h are pressed, the logOut function is called and the alert function is called with 'Logging you out'", () => {
    const events = {};
    const logOut = jest.fn();

    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });

    window.alert = jest.fn();

    const wrapper = shallow(<App />);
    wrapper.setState({ logOut });

    events.keydown({ key: "h", ctrlKey: true });

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logOut).toHaveBeenCalled();

    jest.restoreAllMocks();
  });

  it("Has default state displayDrawer as false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("displayDrawer changes to true when calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    wrapper.instance().handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it("displayDrawer changes back to false when calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);

    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);

    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("markNotificationAsRead removes the correct notification from the list", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "default", value: "New resume available" },
        {
          id: 3,
          type: "urgent",
          html: { __html: "<strong>Urgent requirement</strong>" },
        },
      ],
    });

    wrapper.instance().markNotificationAsRead(2);

    const updatedNotifications = wrapper.state().listNotifications;
    expect(updatedNotifications).toHaveLength(2);
    expect(updatedNotifications).toEqual([
      { id: 1, type: "default", value: "New course available" },
      {
        id: 3,
        type: "urgent",
        html: { __html: "<strong>Urgent requirement</strong>" },
      },
    ]);
  });
});
describe("mapStateToProps", () => {
  it("should return the correct object from Redux state", () => {
    const state = fromJS({
      isUserLoggedIn: true,
    });
    const expectedProps = { isLoggedIn: true };

    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
