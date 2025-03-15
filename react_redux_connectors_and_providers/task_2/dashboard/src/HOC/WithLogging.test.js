import React from "react";
import { render } from "@testing-library/react";
import WithLogging from "./WithLogging";
import Login from "../Login";

global.console = {
  log: jest.fn(),
};

describe("WithLogging HOC", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("logs on mount and unmount with Component when wrapped element is pure HTML", () => {
    const WrappedComponent = WithLogging(() => <p>Hello World</p>);
    const { unmount } = render(<WrappedComponent />);

    expect(console.log).toHaveBeenCalledWith("Component Component is mounted");
    unmount();
    expect(console.log).toHaveBeenCalledWith(
      "Component Component is going to unmount"
    );
  });

  test("logs on mount and unmount with the name of the Login component", () => {
    const WrappedLogin = WithLogging(Login);
    const { unmount } = render(<WrappedLogin />);

    expect(console.log).toHaveBeenCalledWith("Component Login is mounted");
    unmount();
    expect(console.log).toHaveBeenCalledWith(
      "Component Login is going to unmount"
    );
  });
});
