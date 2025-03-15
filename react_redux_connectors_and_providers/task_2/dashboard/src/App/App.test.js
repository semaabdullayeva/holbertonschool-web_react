import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the Login component if user is not logged in", () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find("Login").exists()).toBe(true);
  });

  it("renders the CourseList component if user is logged in", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find("CourseList").exists()).toBe(true);
  });

  it("should show the notification drawer when displayDrawer is true", () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={true} />);
    expect(wrapper.find("Notifications").prop("displayDrawer")).toBe(true);
  });

  it("should hide the notification drawer when displayDrawer is false", () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={false} />);
    expect(wrapper.find("Notifications").prop("displayDrawer")).toBe(false);
  });
});
