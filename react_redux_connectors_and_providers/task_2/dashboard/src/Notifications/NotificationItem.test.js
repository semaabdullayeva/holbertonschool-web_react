import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

describe("<NotificationItem />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection(); // Prevent style injection
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection(); // Resume style injection after tests
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders correct type and value", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.props()["data-notification-type"]).toEqual("default");
    expect(wrapper.text()).toEqual("test");
  });

  it("renders correct html when passed", () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    expect(wrapper.html()).toContain("<u>test</u>");
  });
  it("calls markAsRead with the correct id when clicked", () => {
    const mockMarkAsRead = jest.fn();
    const id = 1;
    const wrapper = shallow(
      <NotificationItem
        type="default"
        value="test"
        markAsRead={mockMarkAsRead}
        id={id}
      />
    );

    wrapper.find("li").simulate("click");

    expect(mockMarkAsRead).toHaveBeenCalledWith(id);
  });
});
