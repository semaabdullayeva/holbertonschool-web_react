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
  it("Does not render logoutSection when default context is applied", () => {
    wrapper = shallow(<Header />);
    expect(wrapper.find("#logoutSection").length).toBe(0);
  });

  it("Renders logoutSection when user is logged in (isLoggedIn=true)", () => {
    const userContext = {
      user: {
        isLoggedIn: true,
        email: "test@test.com",
        password: "password",
      },
      logOut: jest.fn(),
    };

    wrapper = shallow(
      <AppContext.Provider value={userContext}>
        <Header />
      </AppContext.Provider>
    ).dive();

    expect(wrapper.find("#logoutSection").length).toBe(1);
    expect(wrapper.find("#logoutSection").text()).toContain(
      "Welcome test@test.com"
    );
  });

  it("Calls logOut when logout link is clicked", () => {
    const logOutMock = jest.fn();
    const userContext = {
      user: {
        isLoggedIn: true,
        email: "test@test.com",
        password: "password",
      },
      logOut: logOutMock,
    };

    wrapper = shallow(
      <AppContext.Provider value={userContext}>
        <Header />
      </AppContext.Provider>
    ).dive();

    wrapper.find("#logoutSection a").simulate("click");
    expect(logOutMock).toHaveBeenCalled();
  });

  it('Updates UI to display "School dashboard" after logout link is clicked', () => {
    const logOutMock = jest.fn();
    const userContext = {
      user: {
        isLoggedIn: true,
        email: "test@test.com",
        password: "password",
      },
      logOut: logOutMock,
    };

    wrapper = shallow(
      <AppContext.Provider value={userContext}>
        <Header />
      </AppContext.Provider>
    ).dive();

    wrapper.find("#logoutSection a").simulate("click");

    expect(wrapper.find("h1").text()).toBe("School dashboard");
  });
});
