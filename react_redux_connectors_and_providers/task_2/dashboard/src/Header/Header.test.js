import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("<Header />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders img and h1 tags", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img").length).toBe(1);
    expect(wrapper.find("h1").length).toBe(1);
  });

  it("does not render logoutSection when user is not logged in", () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false }} />);
    expect(wrapper.find("#logoutSection").length).toBe(0);
  });

  it("renders logoutSection when user is logged in", () => {
    const wrapper = shallow(
      <Header
        user={{
          isLoggedIn: true,
          email: "test@test.com",
        }}
      />
    );
    expect(wrapper.find("#logoutSection").length).toBe(1);
    expect(wrapper.find("#logoutSection").text()).toContain(
      "Welcome test@test.com"
    );
  });
});
