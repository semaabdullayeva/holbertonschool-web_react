import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
describe("<Login />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders 2 input tags and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input").length).toBe(2);
    expect(wrapper.find("label").length).toBe(2);
  });

  it("submit button is disabled by default", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input[type='submit']").prop("disabled")).toBe(true); // Check if the submit button is disabled by default
  });

  it("submit button is enabled when both email and password fields are filled", () => {
    const wrapper = shallow(<Login />);

    wrapper
      .find("input[type='email']")
      .simulate("change", { target: { value: "user@example.com" } });
    wrapper
      .find("input[type='password']")
      .simulate("change", { target: { value: "password123" } });

    expect(wrapper.find("input[type='submit']").prop("disabled")).toBe(false);
  });
});
